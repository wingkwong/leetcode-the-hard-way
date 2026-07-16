import { getDocsMetadata, renderDocsPage } from '../../../components/docs-page';
import { templatesSource } from '../../../lib/source';

const section = {
  baseUrl: '/templates',
  contentDir: 'templates',
  source: templatesSource,
  title: 'Templates',
};

export function generateStaticParams() {
  return templatesSource.generateParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug = [] } = await params;
  return getDocsMetadata(section, slug);
}

export default async function TemplatesPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug = [] } = await params;
  return renderDocsPage(section, slug);
}
