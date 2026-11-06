import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { CompanyDirectory } from '../../components/company-directory';
import { companyDirectory } from '../../data/companies';
import { baseOptions } from '../../lib/layout.shared';
import './companies.css';

export default function CompaniesLayout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      {...baseOptions()}
      tree={{ name: 'Companies', children: [] }}
      sidebar={{
        banner: <CompanyDirectory sidebar companies={companyDirectory} />,
      }}
    >
      {children}
    </DocsLayout>
  );
}
