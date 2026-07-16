import type { ReactNode } from 'react';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '../../lib/layout.shared';
import { templatesSource } from '../../lib/source';

export default function TemplatesLayout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout {...baseOptions()} tree={templatesSource.getPageTree()}>
      {children}
    </DocsLayout>
  );
}
