type PaginationProps = {
  currentPage: number;
  totalPages: number;
} & (
  | { getPageHref: (page: number) => string; onPageChange?: never }
  | { onPageChange: (page: number) => void; getPageHref?: never }
);

export function ProblemPagination({
  currentPage,
  totalPages,
  getPageHref,
  onPageChange,
}: PaginationProps) {
  function control(label: string, target: number) {
    const disabled = target < 1 || target > totalPages;
    if (!disabled && getPageHref) {
      return (
        <a className="ratings-pagination-button" href={getPageHref(target)}>
          {label}
        </a>
      );
    }
    return (
      <button
        className="ratings-pagination-button"
        disabled={disabled}
        onClick={onPageChange ? () => onPageChange(target) : undefined}
        type="button"
      >
        {label}
      </button>
    );
  }
  return (
    <nav aria-label="Problem list pagination" className="ratings-pagination">
      {control('Previous', currentPage - 1)}
      <span className="ratings-pagination-status">
        Page {currentPage} of {totalPages}
      </span>
      {control('Next', currentPage + 1)}
    </nav>
  );
}
