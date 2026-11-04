'use client';

import { useEffect, useState } from 'react';
import {
  type DailyProblem,
  getCurrentDailyProblem,
  millisecondsUntilUtcMidnight,
} from '../lib/problem-of-the-day';

export function ProblemOfTheDay() {
  const [problem, setProblem] = useState<DailyProblem | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    let midnightTimer: ReturnType<typeof setTimeout>;
    let pending = false;

    async function refresh() {
      // Expire the old problem even when the next deployment is still pending.
      setProblem((current) => getCurrentDailyProblem(current));
      if (pending) return;
      pending = true;
      try {
        const response = await fetch('/potd.json', {
          cache: 'no-store',
          signal: controller.signal,
        });
        if (response.ok) {
          const data: unknown = await response.json();
          if (!controller.signal.aborted) {
            setProblem(getCurrentDailyProblem(data));
          }
        }
      } catch {
        // Keep today's data on transient failures, or show the placeholder.
      } finally {
        pending = false;
      }
    }

    function scheduleMidnight() {
      midnightTimer = setTimeout(() => {
        void refresh();
        scheduleMidnight();
      }, millisecondsUntilUtcMidnight());
    }

    function onVisibilityChange() {
      if (document.visibilityState === 'visible') void refresh();
    }

    void refresh();
    scheduleMidnight();
    const interval = setInterval(() => void refresh(), 60_000);
    document.addEventListener('visibilitychange', onVisibilityChange);
    return () => {
      controller.abort();
      clearTimeout(midnightTimer);
      clearInterval(interval);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, []);

  return (
    <section aria-label="Problem of the Day" aria-live="polite">
      {problem && (
        <>
          <a
            className="generated-index-link"
            href={problem.solutionUrl || `https://leetcode.com/problems/${problem.slug}/`}
          >
            <strong>Problem of the Day {problem.solutionUrl && '(Editorial Available)'}</strong>
            <small>
              {problem.questionId} - {problem.title}
            </small>
          </a>
        </>
      )}
    </section>
  );
}
