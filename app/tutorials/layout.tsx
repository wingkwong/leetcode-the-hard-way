import type { ReactNode } from 'react';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '../../lib/layout.shared';
import { tutorialsSource } from '../../lib/source';

export default function TutorialsLayout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout {...baseOptions()} tree={tutorialsSource.getPageTree()}>
      {children}
    </DocsLayout>
  );
}
