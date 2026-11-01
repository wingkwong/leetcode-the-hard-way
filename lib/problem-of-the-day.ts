export type DailyProblem = {
  date: string;
  questionId: string;
  title: string;
  slug: string;
  solutionUrl: string | null;
};

export function getCurrentDailyProblem(
  value: unknown,
  now = new Date(),
): DailyProblem | null {
  if (!value || typeof value !== 'object') return null;
  const problem = value as Partial<DailyProblem>;
  if (
    problem.date !== now.toISOString().slice(0, 10) ||
    typeof problem.questionId !== 'string' ||
    !/^[1-9]\d*$/.test(problem.questionId) ||
    typeof problem.title !== 'string' ||
    !problem.title.trim() ||
    typeof problem.slug !== 'string' ||
    !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(problem.slug) ||
    (problem.solutionUrl !== null &&
      (typeof problem.solutionUrl !== 'string' ||
        !/^\/solutions\/[A-Za-z0-9/-]+\/$/.test(problem.solutionUrl)))
  ) {
    return null;
  }
  return problem as DailyProblem;
}

export function millisecondsUntilUtcMidnight(now = new Date()) {
  return (
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1) -
    now.getTime()
  );
}
