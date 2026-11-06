import {
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/layouts/docs/page';
import { CompanyDirectory } from '../../components/company-directory';
import { companyDirectory } from '../../data/companies';
import { createPageMetadata } from '../../lib/seo';

export const metadata = createPageMetadata({
  title: 'Problems (By Company)',
  pathname: '/companies',
  type: 'website',
  description: 'Browse LeetCode problem lists by company.',
});

export default function CompaniesPage() {
  return (
    <DocsPage>
      <DocsTitle>Problems (By Company)</DocsTitle>
      <DocsDescription>
        Browse all-time problem lists for {companyDirectory.length} companies. <br/>
        Last updated: <time dateTime="2026-10-20">October 20, 2026</time>.
      </DocsDescription>
      <CompanyDirectory companies={companyDirectory} />
    </DocsPage>
  );
}
