export const PAGE_SIZE = 25;

export function companyPageHref(slug: string, page: number) {
  return page === 1
    ? `/companies/${slug}/`
    : `/companies/${slug}/page/${page}/`;
}
