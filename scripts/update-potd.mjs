import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { getCurrentDailyProblem } from '../lib/problem-of-the-day.ts';

export async function findSolutionUrl(slug, solutionsDirectory) {
  const files = await readdir(solutionsDirectory, { recursive: true });
  const pattern = new RegExp(
    `^\\d{4}-${slug}(?:-(easy|medium|hard))?\\.mdx?$`,
    'i',
  );
  for (const file of files) {
    if (!pattern.test(path.basename(file))) continue;
    const content = await readFile(path.join(solutionsDirectory, file), 'utf8');
    const frontmatter = content.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1];
    if (
      /^draft:\s*(?:true|'true'|"true")\s*(?:#.*)?$/m.test(frontmatter ?? '')
    ) {
      continue;
    }
    const publicPath = file
      .split(path.sep)
      .join('/')
      .replace(/\d{4}-([^/]+)\.mdx?$/i, '$1');
    return `/solutions/${publicPath}/`;
  }
  return null;
}

export async function fetchDailyProblem({
  fetchImpl = fetch,
  now = new Date(),
  solutionsDirectory = path.resolve('solutions'),
} = {}) {
  const response = await fetchImpl('https://leetcode.com/graphql/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `query {
        activeDailyCodingChallengeQuestion {
          date
          question { questionFrontendId title titleSlug }
        }
      }`,
    }),
    signal: AbortSignal.timeout(15_000),
  });
  if (!response.ok)
    throw new Error(`LeetCode returned HTTP ${response.status}`);
  const payload = await response.json();
  const daily = payload.data?.activeDailyCodingChallengeQuestion;
  const problem = getCurrentDailyProblem(
    {
      date: daily?.date,
      questionId: daily?.question?.questionFrontendId,
      title: daily?.question?.title,
      slug: daily?.question?.titleSlug,
      solutionUrl: null,
    },
    now,
  );
  if (!problem) throw new Error('LeetCode did not return the current UTC POTD');
  problem.solutionUrl = await findSolutionUrl(problem.slug, solutionsDirectory);
  return problem;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  let problem;
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      problem = await fetchDailyProblem();
      break;
    } catch (error) {
      console.warn(
        `POTD refresh attempt ${attempt + 1} failed: ${error.message}`,
      );
    }
  }
  if (problem) {
    await writeFile(
      'public/potd.json',
      `${JSON.stringify(problem, null, 2)}\n`,
    );
    console.log(`Updated POTD for ${problem.date}: ${problem.title}`);
  } else {
    // Do not block unrelated deployments. The UI rejects any expired data.
    console.warn('Keeping the bundled POTD; expired data shows a placeholder.');
  }
}
