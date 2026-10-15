import { notFound } from 'next/navigation';
import { StaticRedirect } from '../../../../components/static-redirect';
import { createPageMetadata } from '../../../../lib/seo';

const tutorialCategoryRedirects = {
  'basic-topics': '/tutorials/basic-topics/',
  sorting: '/tutorials/basic-topics/sorting/',
  'graph-theory': '/tutorials/graph-theory/',
  math: '/tutorials/math/',
  'number-theory': '/tutorials/math/number-theory/',
  strings: '/tutorials/strings/',
} as const;

type TutorialCategory = keyof typeof tutorialCategoryRedirects;

type PageProps = {
  params: Promise<{ category: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { category } = await params;
  const destination = tutorialCategoryRedirects[category as TutorialCategory];
  if (!destination) notFound();

  return createPageMetadata({
    title: 'Tutorials',
    pathname: destination,
    type: 'website',
  });
}

export function generateStaticParams() {
  return Object.keys(tutorialCategoryRedirects).map((category) => ({
    category,
  }));
}

export default async function TutorialCategoryRedirectPage({
  params,
}: PageProps) {
  const { category } = await params;
  const destination = tutorialCategoryRedirects[category as TutorialCategory];

  if (!destination) notFound();

  return <StaticRedirect destination={destination} />;
}
