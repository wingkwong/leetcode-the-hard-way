import { notFound } from 'next/navigation';
import { StaticRedirect } from '../../../../components/static-redirect';
import { createPageMetadata } from '../../../../lib/seo';
import { solutionsSource } from '../../../../lib/source';

const solutionRanges = [
  ...new Set(solutionsSource.getPages().map((page) => page.slugs[0])),
].map((folder) => ({
  destination: `/solutions/${folder}/`,
  range: folder.replace('-', '---'),
}));

type PageProps = {
  params: Promise<{ range: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { range } = await params;
  const redirect = solutionRanges.find((item) => item.range === range);
  if (!redirect) notFound();

  return createPageMetadata({
    title: 'Solutions',
    pathname: redirect.destination,
    type: 'website',
  });
}

export function generateStaticParams() {
  return solutionRanges.map(({ range }) => ({ range }));
}

export default async function SolutionCategoryRedirectPage({
  params,
}: PageProps) {
  const { range } = await params;
  const redirect = solutionRanges.find((item) => item.range === range);

  if (!redirect) notFound();

  return <StaticRedirect destination={redirect.destination} />;
}
