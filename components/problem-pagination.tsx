export const PAGE_SIZE = 25;

export function ProblemPagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  return (
    <div className="ratings-pagination">
      <button
        className="ratings-pagination-button"
        disabled={currentPage <= 1}
        onClick={() => onPageChange(currentPage - 1)}
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
        onClick={() => onPageChange(currentPage + 1)}
        type="button"
      >
        Next
      </button>
    </div>
  );
}
