import { notFound } from 'next/navigation';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/layouts/docs/page';
import { SponsorsTableOfContent } from '../../../../components/sponsors-table-of-content';
import { createPageMetadata } from '../../../../lib/seo';
import {
  getSolutionTagGroups,
  getSolutionTagSlug,
  getSolutionTagUrl,
} from '../../../../lib/solution-tags';

type PageProps = { params: Promise<{ tag: string }> };

export function generateStaticParams() {
  return getSolutionTagGroups().map(([tag]) => ({
    tag: getSolutionTagSlug(tag),
  }));
}

function getTagGroup(tag: string) {
  const group = getSolutionTagGroups().find(
    ([name]) => getSolutionTagSlug(name) === tag,
  );
  if (!group) notFound();
  return group;
}

export async function generateMetadata({ params }: PageProps) {
  const [tag] = getTagGroup((await params).tag);
  return createPageMetadata({
    title: `${tag} Solutions`,
    description: `Explore LeetCode solutions tagged ${tag}, with explanations and code implementations.`,
    pathname: getSolutionTagUrl(tag),
    type: 'website',
  });
}

export default async function SolutionTagPage({ params }: PageProps) {
  const [tag, pages] = getTagGroup((await params).tag);

  return (
    <DocsPage tableOfContent={{ component: <SponsorsTableOfContent /> }}>
      <DocsTitle>{tag}</DocsTitle>
      <DocsDescription>
        {pages.length} {pages.length === 1 ? 'solution' : 'solutions'}
      </DocsDescription>
      <DocsBody>
        <p>
          <a href="/solutions/tags/">All topics</a>
        </p>
        <ul>
          {pages.map((page) => (
            <li key={page.url}>
              <a href={page.url}>{page.title}</a>
            </li>
          ))}
        </ul>
      </DocsBody>
    </DocsPage>
  );
}
