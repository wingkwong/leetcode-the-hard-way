import { getDocsMetadata, renderDocsPage } from '../../../components/docs-page';
import { solutionsSource } from '../../../lib/source';

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
  const params = solutionsSource.generateParams();
  const seen = new Set<string>();

  return params.flatMap((param) => {
    const variants = [param];
    const publicSlug = param.slug ? formatSolutionSlug(param.slug) : undefined;

    if (publicSlug && publicSlug.join('/') !== param.slug?.join('/')) {
      variants.push({ ...param, slug: publicSlug });
    }

    return variants.filter((variant) => {
      const key = variant.slug?.join('/') ?? '';
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  });
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
  return renderDocsPage(section, slug);
}

function resolveSolutionSlug(slug: string[]) {
  if (slug.length < 2 || hasSolutionIdPrefix(slug.at(-1))) return slug;

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

function hasSolutionIdPrefix(slug = '') {
  return /^\d{4}-/.test(slug);
}
