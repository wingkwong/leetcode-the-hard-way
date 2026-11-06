import { DocsBody, DocsPage, DocsTitle } from 'fumadocs-ui/layouts/docs/page';
import { notFound } from 'next/navigation';
import { ProblemPagination } from '../../../components/problem-pagination';
import { SponsorsTableOfContent } from '../../../components/sponsors-table-of-content';
import { potdArchivePages } from '../../../lib/potd-archive';
import { createPageMetadata } from '../../../lib/seo';

type Props = { params: Promise<{ slug?: string[] }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return potdArchivePages.map(({ slug }) => ({ slug }));
}

async function getPage(params: Props['params']) {
  const { slug = [] } = await params;
  const path = slug.join('/');
  return (
    potdArchivePages.find((entry) => entry.slug.join('/') === path) ??
    notFound()
  );
}

const title = 'LeetCode Problem of the Day (POTD)';

export async function generateMetadata({ params }: Props) {
  const { href, page } = await getPage(params);
  return createPageMetadata({
    title: page === 1 ? title : `${title} – Page ${page}`,
    description:
      'Browse daily LeetCode challenges by date, with links to the problems and available editorials.',
    pathname: href,
    type: 'website',
  });
}

export default async function ArchivePage({ params }: Props) {
  const { page, problems } = await getPage(params);
  return (
    <DocsPage tableOfContent={{ component: <SponsorsTableOfContent /> }}>
      <DocsTitle>{title}</DocsTitle>
      <DocsBody>
        <table>
          <thead>
            <tr>
              <th scope="col">Date (UTC)</th>
              <th scope="col">Problem</th>
              <th scope="col">Editorial</th>
            </tr>
          </thead>
          <tbody>
            {problems.map(({ date, questionId, title, slug, solutionUrl }) => (
              <tr key={date}>
                <td>
                  <time dateTime={date}>{date}</time>
                </td>
                <td>
                  <a href={`https://leetcode.com/problems/${slug}/`}>
                    {questionId} – {title}
                  </a>
                </td>
                <td>
                  {solutionUrl ? (
                    <a
                      href={solutionUrl}
                      aria-label={`Read editorial for ${title}`}
                    >
                      Read editorial
                    </a>
                  ) : (
                    '—'
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ProblemPagination
          currentPage={page}
          totalPages={potdArchivePages.length}
          getPageHref={(target) => potdArchivePages[target - 1].href}
        />
      </DocsBody>
    </DocsPage>
  );
}
