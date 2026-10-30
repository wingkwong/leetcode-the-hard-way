import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/layouts/docs/page';
import type { Metadata } from 'next';
import ratingData from '../../data/rating.json';
import { RatingsTable, type RatingEntry } from '../../components/ratings-table';
import { SponsorsTableOfContent } from '../../components/sponsors-table-of-content';
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
    <DocsPage tableOfContent={{ component: <SponsorsTableOfContent /> }}>
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
