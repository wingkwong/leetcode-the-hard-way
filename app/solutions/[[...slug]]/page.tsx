import { getDocsMetadata, renderDocsPage } from '../../../components/docs-page';
import { solutionsSource } from '../../../lib/source';
import { generateDocsStaticParams } from '../../../lib/static-params';
import { StaticRedirect } from '../../../components/static-redirect';
import { formatPagePathname } from '../../../lib/seo';

const section = {
  baseUrl: '/solutions',
  contentDir: 'solutions',
  formatSlug: formatSolutionSlug,
  renderTitle: false,
  resolveSlug: resolveSolutionSlug,
  source: solutionsSource,
  title: 'Solutions',
};

export function generateStaticParams() {
  return generateDocsStaticParams(
    solutionsSource.generateParams(),
    formatSolutionSlug,
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug = [] } = await params;
  return getDocsMetadata(section, slug);
}

export default async function SolutionsPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug = [] } = await params;
  const canonicalSlug = formatSolutionSlug(resolveSolutionSlug(slug));

  // Keep old numbered URLs working without publishing a second article.
  // GitHub Pages serves static files, so use an immediate HTML redirect.
  if (canonicalSlug.join('/') !== slug.join('/')) {
    return (
      <StaticRedirect
        destination={formatPagePathname(
          `/solutions/${canonicalSlug.join('/')}`,
        )}
      />
    );
  }

  return renderDocsPage(section, slug);
}

function resolveSolutionSlug(slug: string[]) {
  if (slug.length < 2 || solutionsSource.getPage(slug)) return slug;

  const page = solutionsSource.getPages().find((candidate) => {
    if (candidate.slugs.length !== slug.length) return false;
    if (
      !candidate.slugs.slice(0, -1).every((part, index) => part === slug[index])
    ) {
      return false;
    }

    return stripSolutionIdPrefix(candidate.slugs.at(-1)) === slug.at(-1);
  });

  return page?.slugs ?? slug;
}

function formatSolutionSlug(slug: string[]) {
  if (slug.length < 2) return slug;

  const publicSlug = [...slug];
  publicSlug[publicSlug.length - 1] = stripSolutionIdPrefix(publicSlug.at(-1));
  return publicSlug;
}

function stripSolutionIdPrefix(slug = '') {
  return slug.replace(/^\d{4}-/, '');
}
