import { readdirSync } from 'node:fs';
import path from 'node:path';
import type { DailyProblem } from './problem-of-the-day';

const problems = readdirSync(path.resolve('data')).flatMap(
  (name): DailyProblem[] => {
    const match = /^potd-(\d{4})\.json$/.exec(name);
    if (!match) return [];
    // Load yearly files through webpack so editing the archive refreshes the dev server.
    return require(`../data/potd-${match[1]}.json`);
  },
);

const pageSize = 15;
const newestFirst = problems.sort((a, b) => b.date.localeCompare(a.date));

export const potdArchivePages = Array.from(
  { length: Math.ceil(newestFirst.length / pageSize) },
  (_, index) => {
    const slug = index === 0 ? [] : ['page', String(index + 1)];
    return {
      slug,
      href: ['', 'potd', ...slug, ''].join('/'),
      page: index + 1,
      problems: newestFirst.slice(index * pageSize, (index + 1) * pageSize),
    };
  },
);
