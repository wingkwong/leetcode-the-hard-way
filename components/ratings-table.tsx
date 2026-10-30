'use client';

import { useMemo, useState } from 'react';

const PAGE_SIZE = 25;

export type RatingEntry = {
  id: number;
  rating: number;
  title: string;
};

type SortKey = 'id' | 'title' | 'rating';
type SortDirection = 'asc' | 'desc';

export function RatingsTable({ ratings }: { ratings: RatingEntry[] }) {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [sortKey, setSortKey] = useState<SortKey>('rating');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');

  const filteredRatings = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    const matches = normalizedQuery
      ? ratings.filter((entry) => {
          const id = String(entry.id);
          const combined = `${entry.id}. ${entry.title}`.toLowerCase();
          return (
            id.includes(normalizedQuery) ||
            entry.title.toLowerCase().includes(normalizedQuery) ||
            combined.includes(normalizedQuery)
          );
        })
      : ratings;

    return [...matches].sort((left, right) =>
      compareRatings(left, right, sortKey, sortDirection),
    );
  }, [query, ratings, sortDirection, sortKey]);

  const totalPages = Math.max(1, Math.ceil(filteredRatings.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageStart = (currentPage - 1) * PAGE_SIZE;
  const pageRatings = filteredRatings.slice(pageStart, pageStart + PAGE_SIZE);
  const rangeStart = filteredRatings.length === 0 ? 0 : pageStart + 1;
  const rangeEnd = Math.min(pageStart + PAGE_SIZE, filteredRatings.length);

  return (
    <div className="ratings-table-wrapper">
      <p className="ratings-source-note">
        <b>Disclaimer</b>: The data is sourced from the <a href="https://github.com/zerotrac/leetcode_problem_rating" target="_blank" rel="noopener noreferrer">LeetCode Problem Rating Project</a>. The ratings may not be fully accurate and should be used for reference only.
      </p>
      <div className="ratings-toolbar">
        <div className="ratings-search-group">
          <input
            aria-label="Search ratings by problem ID or title"
            className="ratings-search"
            onChange={(event) => {
              setQuery(event.target.value);
              setPage(1);
            }}
            placeholder="Search by ID or title"
            type="search"
            value={query}
          />

          <p className="ratings-summary" role="status">
            Showing {rangeStart}-{rangeEnd} of {filteredRatings.length} problems
            with rating
          </p>
        </div>

        <div className="ratings-controls">
          <label className="ratings-sort-control">
            <span>Sort by</span>
            <span className="ratings-select-wrapper">
              <select
                className="ratings-select"
                onChange={(event) => {
                  setSortKey(event.target.value as SortKey);
                  setPage(1);
                }}
                value={sortKey}
              >
                <option value="id">ID</option>
                <option value="title">Title</option>
                <option value="rating">Rating</option>
              </select>
            </span>
          </label>

          <button
            aria-label={`Sort ${sortDirection === 'asc' ? 'ascending' : 'descending'}`}
            className="ratings-pagination-button ratings-direction-button"
            onClick={() => {
              setSortDirection((current) =>
                current === 'asc' ? 'desc' : 'asc',
              );
              setPage(1);
            }}
            type="button"
          >
            {sortDirection === 'asc' ? 'Ascending' : 'Descending'}
          </button>
        </div>
      </div>

      <table className="ratings-table">
        <thead>
          <tr>
            <th>Question</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {pageRatings.length > 0 ? (
            pageRatings.map((entry) => (
              <tr className="ratings-row" key={entry.id}>
                <td className="ratings-question-cell">
                  {entry.id}. {entry.title}
                </td>
                <td className="ratings-rating-cell">
                  {roundRating(entry.rating)}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="ratings-empty" colSpan={2}>
                No questions found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="ratings-pagination">
        <button
          className="ratings-pagination-button"
          disabled={currentPage <= 1}
          onClick={() => setPage((current) => Math.max(1, current - 1))}
          type="button"
        >
          Previous
        </button>

        <span className="ratings-pagination-status">
          Page {currentPage} of {totalPages}
        </span>

        <button
          className="ratings-pagination-button"
          disabled={currentPage >= totalPages}
          onClick={() =>
            setPage((current) => Math.min(totalPages, current + 1))
          }
          type="button"
        >
          Next
        </button>
      </div>
    </div>
  );
}

function compareRatings(
  left: RatingEntry,
  right: RatingEntry,
  sortKey: SortKey,
  sortDirection: SortDirection,
) {
  const direction = sortDirection === 'asc' ? 1 : -1;

  switch (sortKey) {
    case 'id':
      return (left.id - right.id) * direction;
    case 'title':
      return left.title.localeCompare(right.title) * direction;
    case 'rating':
      return (left.rating - right.rating) * direction;
    default:
      return 0;
  }
}

function roundRating(rating: number) {
  return Math.round(rating);
}
