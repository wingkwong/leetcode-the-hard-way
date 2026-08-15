import { getDocsMetadata, renderDocsPage } from '../../../components/docs-page';
import { roadmapSource } from '../../../lib/source';
import { generateDocsStaticParams } from '../../../lib/static-params';

const section = {
  baseUrl: '/roadmap',
  contentDir: 'roadmap',
  source: roadmapSource,
  title: 'Roadmap',
};

export function generateStaticParams() {
  return generateDocsStaticParams(roadmapSource.generateParams());
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug = [] } = await params;
  return getDocsMetadata(section, slug);
}

export default async function RoadmapPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug = [] } = await params;
  return renderDocsPage(section, slug);
}
