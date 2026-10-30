import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/layouts/docs/page';
import type { Metadata } from 'next';
import ratingData from '../../data/rating.json';
import { RatingsTable, type RatingEntry } from '../../components/ratings-table';
import { SponsorsMarquee } from '../../components/sponsors-marquee';
import { createPageMetadata } from '../../lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Ratings',
  description:
    'Browse LeetCode problem ratings with search, sorting, and pagination.',
  pathname: '/ratings',
  type: 'website',
});

export default function RatingsPage() {
  const ratings = ratingData as RatingEntry[];

  return (
    <DocsPage
      tableOfContent={{
        component: (
          <div className="sticky top-(--fd-docs-row-1) h-[calc(var(--fd-docs-height)-var(--fd-docs-row-1))] flex flex-col [grid-area:toc] w-(--fd-toc-width) pt-12 pe-4 pb-2 xl:layout:[--fd-toc-width:268px] max-xl:hidden">
            <SponsorsMarquee />
          </div>
        ),
      }}
    >
      <DocsTitle>Ratings</DocsTitle>
      <DocsDescription className="docs-description">
        Search by problem ID or title, sort the columns, and page through the
        ratings.
      </DocsDescription>
      <DocsBody>
        <RatingsTable ratings={ratings} />
      </DocsBody>
    </DocsPage>
  );
}
