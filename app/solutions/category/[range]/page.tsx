import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { StaticRedirect } from '../../../../components/static-redirect';

const solutionRanges = Array.from({ length: 34 }, (_, index) => {
  const start = index * 100;
  const end = start + 99;
  const folder = `${String(start).padStart(4, '0')}-${String(end).padStart(4, '0')}`;

  return {
    destination: `/solutions/${folder}/`,
    range: `${String(start).padStart(4, '0')}---${String(end).padStart(4, '0')}`,
  };
});

type PageProps = {
  params: Promise<{ range: string }>;
};

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

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
