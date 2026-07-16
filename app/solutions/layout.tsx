import type { ReactNode } from 'react';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '../../lib/layout.shared';
import { solutionsSource } from '../../lib/source';

export default function SolutionsLayout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout {...baseOptions()} tree={solutionsSource.getPageTree()}>
      {children}
    </DocsLayout>
  );
}
