import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/layouts/docs/page';
import { createPageMetadata } from '../../../lib/seo';
import {
  getSolutionTagGroups,
  getSolutionTagUrl,
} from '../../../lib/solution-tags';

export const metadata = createPageMetadata({
  title: 'Solution Topics',
  description:
    'Browse LeetCode solutions by their algorithm and data structure topics.',
  pathname: '/solutions/tags/',
  type: 'website',
});

export default function SolutionTagsPage() {
  return (
    <DocsPage>
      <DocsTitle>Solution Topics</DocsTitle>
      <DocsDescription>
        Browse solutions by algorithm or data structure.
      </DocsDescription>
      <DocsBody>
        <div className="generated-index-grid">
          {getSolutionTagGroups().map(([tag, pages]) => (
            <a
              className="generated-index-link"
              href={getSolutionTagUrl(tag)}
              key={tag}
            >
              <span>{tag}</span>
              <small>
                {pages.length} {pages.length === 1 ? 'solution' : 'solutions'}
              </small>
            </a>
          ))}
        </div>
      </DocsBody>
    </DocsPage>
  );
}
