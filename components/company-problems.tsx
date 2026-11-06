'use client';

import { useMemo, useState } from 'react';
import type { CompanyProblem } from '../data/companies';
import { PAGE_SIZE, ProblemPagination } from './problem-pagination';

export function CompanyProblems({ problems }: { problems: CompanyProblem[] }) {
  const [query, setQuery] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [page, setPage] = useState(1);
  const matches = useMemo(() => {
    const term = query.trim().toLowerCase();
    return problems
      .filter(
        (p) =>
          (!difficulty || p.difficulty === difficulty) &&
          (problemLabel(p).toLowerCase().includes(term) ||
            p.topics.some((topic) => topic.toLowerCase().includes(term))),
      )
      .sort((a, b) => b.frequency - a.frequency);
  }, [problems, difficulty, query]);
  const totalPages = Math.ceil(matches.length / PAGE_SIZE);
  const rows = matches.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="ratings-table-wrapper">
      <div className="company-filters">
        <input
          className="ratings-search"
          type="search"
          aria-label="Search by ID, title, or topic"
          placeholder="Search by ID, title, or topic"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setPage(1);
          }}
        />
        <span className="ratings-select-wrapper">
          <select
            className="ratings-select"
            aria-label="Difficulty"
            value={difficulty}
            onChange={(e) => {
              setDifficulty(e.target.value);
              setPage(1);
            }}
          >
            <option value="">All difficulties</option>
            {['Easy', 'Medium', 'Hard'].map((level) => (
              <option key={level}>{level}</option>
            ))}
          </select>
        </span>
      </div>
      <table className="company-table" aria-label="Company problems">
        <thead>
          <tr>
            <th scope="col">Problem</th>
            <th scope="col">Difficulty</th>
            <th scope="col" aria-sort="descending">
              Frequency <span aria-hidden="true">↓</span>
            </th>
            <th scope="col" className="company-topics-heading">
              Topics
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((p) => (
            <tr key={p.titleSlug}>
              <td>
                <a
                  href={`https://leetcode.com/problems/${p.titleSlug}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {problemLabel(p)}
                </a>
              </td>
              <td>
                <span className="company-difficulty" data-level={p.difficulty}>
                  {p.difficulty}
                </span>
              </td>
              <td>{p.frequency}%</td>
              <td className="company-topics">
                <div className="company-topic-badges">
                  <span className="company-topics-label" aria-hidden="true">
                    Topics
                  </span>
                  {p.topics.length
                    ? p.topics.map((topic) => (
                        <span className="company-topic-badge" key={topic}>
                          {topic}
                        </span>
                      ))
                    : '—'}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {matches.length === 0 && (
        <div className="company-empty">
          <p role="status">
            {problems.length
              ? 'No problems found.'
              : 'No all-time problems listed for this company.'}
          </p>
          {(query || difficulty) && (
            <button
              type="button"
              className="ratings-pagination-button"
              onClick={() => {
                setQuery('');
                setDifficulty('');
                setPage(1);
              }}
            >
              Clear filters
            </button>
          )}
        </div>
      )}
      {totalPages > 1 && (
        <ProblemPagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      )}
    </div>
  );
}

function problemLabel(problem: CompanyProblem) {
  return problem.id === null
    ? problem.title
    : `${problem.id}. ${problem.title}`;
}
