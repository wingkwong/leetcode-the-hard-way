import assert from 'node:assert/strict';
import { mkdtemp, mkdir, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { test } from 'node:test';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import {
  getCurrentDailyProblem,
  millisecondsUntilUtcMidnight,
} from '../lib/problem-of-the-day.ts';
import { fetchDailyProblem, findSolutionUrl } from './update-potd.mjs';

const problem = {
  date: '2026-11-01',
  questionId: '453',
  title: 'Minimum Moves to Equal Array Elements',
  slug: 'minimum-moves-to-equal-array-elements',
  solutionUrl:
    '/solutions/0400-0499/minimum-moves-to-equal-array-elements-medium/',
};

test('CLI refresh failures fail strict automation but preserve ordinary builds', () => {
  const mockFetch = `data:text/javascript,${encodeURIComponent(
    'globalThis.fetch = async () => new Response("", { status: 503 });',
  )}`;
  for (const strict of [false, true]) {
    const result = spawnSync(
      process.execPath,
      [
        '--import',
        mockFetch,
        fileURLToPath(new URL('./update-potd.mjs', import.meta.url)),
        ...(strict ? ['--strict'] : []),
      ],
      { encoding: 'utf8' },
    );
    assert.equal(result.status, strict ? 1 : 0, result.stderr);
    assert.match(result.stderr, /POTD refresh attempt 3 failed/);
  }
});

test('POTD is visible for exactly its UTC calendar day', () => {
  for (const time of ['00:00:00.000', '23:59:59.999']) {
    assert.deepEqual(
      getCurrentDailyProblem(problem, new Date(`2026-11-01T${time}Z`)),
      problem,
    );
  }
  for (const time of ['2026-10-31T23:59:59.999Z', '2026-11-02T00:00:00Z']) {
    assert.equal(getCurrentDailyProblem(problem, new Date(time)), null);
  }
});

test('date selection and rollover use UTC across time zones and month/year boundaries', () => {
  assert.equal(
    getCurrentDailyProblem(problem, new Date('2026-11-02T07:59:59+08:00')),
    problem,
  );
  assert.equal(
    getCurrentDailyProblem(problem, new Date('2026-11-01T00:00:00+08:00')),
    null,
  );
  assert.equal(
    millisecondsUntilUtcMidnight(new Date('2026-11-01T00:00:00Z')),
    86_400_000,
  );
  assert.equal(
    millisecondsUntilUtcMidnight(new Date('2026-12-31T23:59:59.999Z')),
    1,
  );
});

test('missing solutions remain valid, while malformed data cannot create links', () => {
  const now = new Date('2026-11-01T12:00:00Z');
  assert.equal(
    getCurrentDailyProblem({ ...problem, solutionUrl: null }, now)?.solutionUrl,
    null,
  );
  for (const value of [
    null,
    {},
    { ...problem, questionId: undefined },
    { ...problem, questionId: '' },
    { ...problem, questionId: 'invalid' },
    { ...problem, questionId: 453 },
    { ...problem, slug: '../bad' },
    { ...problem, solutionUrl: '//example.com/' },
  ]) {
    assert.equal(getCurrentDailyProblem(value, now), null);
  }
});

test('existing solution resolves to its canonical URL', async () => {
  assert.equal(
    await findSolutionUrl(problem.slug, path.resolve('solutions')),
    problem.solutionUrl,
  );
});

for (const { name, questionId, slug, solutionUrl } of [
  {
    name: 'editorial without a difficulty suffix',
    questionId: '421',
    slug: 'maximum-xor-of-two-numbers-in-an-array',
    solutionUrl: '/solutions/0400-0499/maximum-xor-of-two-numbers-in-an-array/',
  },
  {
    name: 'capitalized editorial filename',
    questionId: '403',
    slug: 'frog-jump',
    solutionUrl: '/solutions/0400-0499/Frog-Jump/',
  },
]) {
  test(`${name} survives lookup and client validation`, async () => {
    const now = new Date('2026-11-01T12:00:00Z');
    const result = await fetchDailyProblem({
      now,
      fetchImpl: async () =>
        Response.json({
          data: {
            activeDailyCodingChallengeQuestion: {
              date: problem.date,
              question: {
                questionFrontendId: questionId,
                title: name,
                titleSlug: slug,
              },
            },
          },
        }),
    });
    assert.equal(result.solutionUrl, solutionUrl);
    // Exercise the JSON boundary used by the browser, preserving URL casing.
    assert.deepEqual(
      getCurrentDailyProblem(JSON.parse(JSON.stringify(result)), now),
      result,
    );
  });
}

test('absent and draft solutions return no editorial URL', async () => {
  const directory = await mkdtemp(path.join(os.tmpdir(), 'potd-test-'));
  try {
    await mkdir(path.join(directory, '0400-0499'));
    const file = path.join(
      directory,
      '0400-0499/0453-minimum-moves-to-equal-array-elements-medium.md',
    );
    assert.equal(await findSolutionUrl(problem.slug, directory), null);
    for (const draft of ['true', "'true'", '"true"']) {
      await writeFile(file, `---\ndraft: ${draft}\n---\n# Draft`);
      assert.equal(await findSolutionUrl(problem.slug, directory), null);
    }
    await writeFile(file, '---\ndraft: false\n---\n# Published');
    assert.equal(
      await findSolutionUrl(problem.slug, directory),
      problem.solutionUrl,
    );
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});

test('LeetCode response is matched against the local solution catalog', async () => {
  const result = await fetchDailyProblem({
    now: new Date('2026-11-01T12:00:00Z'),
    fetchImpl: async (url, options) => {
      assert.equal(url, 'https://leetcode.com/graphql/');
      assert.equal(options.method, 'POST');
      assert.match(JSON.parse(options.body).query, /\bquestionFrontendId\b/);
      return Response.json({
        data: {
          activeDailyCodingChallengeQuestion: {
            date: problem.date,
            question: {
              questionFrontendId: problem.questionId,
              title: problem.title,
              titleSlug: problem.slug,
            },
          },
        },
      });
    },
  });
  assert.deepEqual(result, problem);
});

test('failed, malformed, and stale API responses are rejected', async () => {
  for (const response of [
    new Response('', { status: 503 }),
    Response.json({ errors: [{ message: 'Unavailable' }] }),
    Response.json({
      data: {
        activeDailyCodingChallengeQuestion: {
          date: '2026-10-31',
          question: {
            questionFrontendId: problem.questionId,
            title: problem.title,
            titleSlug: problem.slug,
          },
        },
      },
    }),
  ]) {
    await assert.rejects(
      fetchDailyProblem({
        now: new Date('2026-11-01T12:00:00Z'),
        fetchImpl: async () => response,
      }),
    );
  }
});
