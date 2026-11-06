import {
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/layouts/docs/page';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChangeCompany } from '../../../components/company-directory';
import { CompanyProblems } from '../../../components/company-problems';
import { companyPages, companyDirectory } from '../../../data/companies';
import { createPageMetadata } from '../../../lib/seo';

type Props = { params: Promise<{ slug: string[] }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return companyPages.map(({ href }) => ({
    slug: href.slice('/companies/'.length, -1).split('/'),
  }));
}

function getCompanyPage(slug: string[]) {
  const href = `/companies/${slug.join('/')}/`;
  return companyPages.find((entry) => entry.href === href) ?? notFound();
}

export async function generateMetadata({ params }: Props) {
  const {
    company: { name },
    page,
    href,
  } = getCompanyPage((await params).slug);
  return createPageMetadata({
    title: page === 1 ? `${name} Problems` : `${name} Problems – Page ${page}`,
    pathname: href,
    type: 'website',
    description: `Browse all-time ${name} problems by difficulty, frequency, and topic.`,
  });
}

export default async function CompanyPage({ params }: Props) {
  const {
    company: { name, slug, problems },
    page,
  } = getCompanyPage((await params).slug);
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
      <CompanyProblems
        key={`${slug}/${page}`}
        companySlug={slug}
        routePage={page}
        problems={problems}
      />
    </DocsPage>
  );
}
