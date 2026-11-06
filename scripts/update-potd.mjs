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

function parseChallenge(daily, now) {
  return getCurrentDailyProblem(
    {
      date: daily?.date,
      questionId: daily?.question?.questionFrontendId,
      title: daily?.question?.title,
      slug: daily?.question?.titleSlug,
      solutionUrl: null,
    },
    now,
  );
}

async function backfillMonth(
  month,
  missing,
  byDate,
  fetchImpl,
  solutionsDirectory,
) {
  const [year, monthNumber] = month.split('-').map(Number);
  const url = new URL('https://leetcode.com/graphql/');
  url.searchParams.set(
    'query',
    `query {
    dailyCodingChallengeV2(year: ${year}, month: ${monthNumber}) {
      challenges { date question { questionFrontendId title titleSlug } }
    }
  }`,
  );
  const response = await fetchImpl(url, {
    signal: AbortSignal.timeout(15_000),
  });
  if (!response.ok)
    throw new Error(`Monthly POTD returned HTTP ${response.status}`);
  const payload = await response.json();
  for (const challenge of payload.data?.dailyCodingChallengeV2?.challenges ??
    []) {
    if (!missing.has(challenge?.date)) continue;
    const entry = parseChallenge(challenge, new Date(challenge.date));
    if (!entry) continue;
    entry.solutionUrl = await findSolutionUrl(entry.slug, solutionsDirectory);
    byDate.set(entry.date, entry);
    missing.delete(entry.date);
  }
  if (missing.size) throw new Error(`Missing POTD: ${[...missing].join(', ')}`);
}

export async function updateYearlyArchives({
  dailyProblem,
  dataDirectory = 'data',
  fetchImpl = fetch,
  solutionsDirectory = path.resolve('solutions'),
}) {
  const currentYear = Number(dailyProblem.date.slice(0, 4));
  const files = await readdir(dataDirectory);
  const years = files.flatMap((file) => {
    const match = /^potd-(\d{4})\.json$/.exec(file);
    return match ? [Number(match[1])] : [];
  });
  const firstYear = Math.min(currentYear, ...years);
  for (let year = firstYear; year <= currentYear; year++) {
    const archivePath = path.join(dataDirectory, `potd-${year}.json`);
    let previous = '[]';
    try {
      previous = await readFile(archivePath, 'utf8');
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
    }
    const byDate = new Map(
      JSON.parse(previous).map((entry) => [entry.date, entry]),
    );
    if (year === currentYear) byDate.set(dailyProblem.date, dailyProblem);

    // Begin at the first recorded day. Backfill later years from January 1.
    const firstDate =
      year === firstYear ? [...byDate.keys()].sort()[0] : `${year}-01-01`;
    if (!firstDate) continue;
    const end = new Date(
      year === currentYear ? dailyProblem.date : `${year}-12-31`,
    );
    const missingByMonth = new Map();
    for (
      const day = new Date(firstDate);
      day <= end;
      day.setUTCDate(day.getUTCDate() + 1)
    ) {
      const date = day.toISOString().slice(0, 10);
      if (byDate.has(date)) continue;
      const month = date.slice(0, 7);
      if (!missingByMonth.has(month)) missingByMonth.set(month, new Set());
      missingByMonth.get(month).add(date);
    }
    for (const [month, missing] of missingByMonth) {
      await backfillMonth(
        month,
        missing,
        byDate,
        fetchImpl,
        solutionsDirectory,
      );
    }
    const entries = [...byDate.values()].sort((a, b) =>
      a.date.localeCompare(b.date),
    );
    const serialized = `${JSON.stringify(entries, null, 2)}\n`;
    if (serialized !== previous) await writeFile(archivePath, serialized);
  }
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
  const problem = parseChallenge(daily, now);
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
    try {
      await updateYearlyArchives({ dailyProblem: problem });
      console.log(`Updated POTD for ${problem.date}: ${problem.title}`);
    } catch (error) {
      console.error(`POTD data update failed: ${error.message}`);
      process.exitCode = 1;
    }
  } else {
    process.exitCode = 1;
  }
}
