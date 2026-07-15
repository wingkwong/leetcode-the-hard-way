import type { ReactNode } from 'react';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '../../lib/layout.shared';
import { roadmapSource } from '../../lib/source';

export default function RoadmapLayout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout {...baseOptions()} tree={roadmapSource.getPageTree()}>
      {children}
    </DocsLayout>
  );
}
