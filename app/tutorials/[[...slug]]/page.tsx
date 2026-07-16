import { getDocsMetadata, renderDocsPage } from '../../../components/docs-page';
import { tutorialsSource } from '../../../lib/source';

const section = {
  baseUrl: '/tutorials',
  contentDir: 'tutorials',
  source: tutorialsSource,
  title: 'Tutorials',
};

export function generateStaticParams() {
  return tutorialsSource.generateParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug = [] } = await params;
  return getDocsMetadata(section, slug);
}

export default async function TutorialsPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug = [] } = await params;
  return renderDocsPage(section, slug);
}
