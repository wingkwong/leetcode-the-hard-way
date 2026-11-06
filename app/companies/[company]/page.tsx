import {
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/layouts/docs/page';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChangeCompany } from '../../../components/company-directory';
import { CompanyProblems } from '../../../components/company-problems';
import { companies, companyDirectory } from '../../../data/companies';
import { createPageMetadata } from '../../../lib/seo';

type Props = { params: Promise<{ company: string }> };

export function generateStaticParams() {
  return companies.map(({ slug }) => ({ company: slug }));
}

function getCompany(slug: string) {
  return companies.find((entry) => entry.slug === slug) ?? notFound();
}

export async function generateMetadata({ params }: Props) {
  const { slug, name } = getCompany((await params).company);
  return createPageMetadata({
    title: `${name} Problems`,
    pathname: `/companies/${slug}`,
    type: 'website',
    description: `Browse all-time ${name} problems by difficulty, frequency, and topic.`,
  });
}

export default async function CompanyPage({ params }: Props) {
  const { name, slug, problems } = getCompany((await params).company);
  return (
    <DocsPage breadcrumb={{ enabled: false }}>
      <nav aria-label="Breadcrumb" className="company-breadcrumb">
        <Link href="/companies/">Companies</Link> / {name}
      </nav>
      <DocsTitle>{name}</DocsTitle>
      <DocsDescription>
        {problems.length} {problems.length === 1 ? 'problem' : 'problems'}
      </DocsDescription>
      <ChangeCompany companies={companyDirectory} selected={slug} />
      <CompanyProblems key={slug} problems={problems} />
    </DocsPage>
  );
}
