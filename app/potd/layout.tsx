import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '../../lib/layout.shared';

export default function PotdLayout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      {...baseOptions()}
      tree={{ name: 'Problem of the Day', children: [] }}
    >
      {children}
    </DocsLayout>
  );
}
