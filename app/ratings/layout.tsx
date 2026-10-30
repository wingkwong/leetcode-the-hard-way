import type { Root } from 'fumadocs-core/page-tree';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '../../lib/layout.shared';
import { formatPagePathname } from '../../lib/seo';

const ratingsTree: Root = {
  name: 'Ratings',
  children: [
    {
      type: 'page',
      name: 'Ratings',
      url: formatPagePathname('/ratings'),
    },
  ],
};

export default function RatingsLayout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout {...baseOptions()} tree={ratingsTree}>
      {children}
    </DocsLayout>
  );
}