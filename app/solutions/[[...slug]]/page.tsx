import { getDocsMetadata, renderDocsPage } from '../../../components/docs-page';
import { solutionsSource } from '../../../lib/source';

const section = {
  baseUrl: '/solutions',
  contentDir: 'solutions',
  renderTitle: false,
  source: solutionsSource,
  title: 'Solutions',
};

export function generateStaticParams() {
  return solutionsSource.generateParams();
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
