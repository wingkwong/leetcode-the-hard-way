import { PAGE_SIZE, companyPageHref } from '../lib/problem-pagination';
import snapshot from './company-problems.json';

export type CompanyProblem = {
  id: number | null;
  title: string;
  titleSlug: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  frequency: number;
  topics: string[];
};

type Company = {
  slug: string;
  name: string;
  problems: CompanyProblem[];
};

export const companies = (snapshot as Company[])
  .filter(({ problems }) => problems.length > 0)
  .map((company) => ({
    ...company,
    name: company.name.charAt(0).toUpperCase() + company.name.slice(1),
  }));

export const companyDirectory = companies
  .map(({ slug, name, problems }) => ({ slug, name, count: problems.length }))
  .sort((a, b) => a.name.localeCompare(b.name, 'en'));

export type CompanySummary = (typeof companyDirectory)[number];

export const companyPages = companies.flatMap((company) =>
  Array.from(
    { length: Math.ceil(company.problems.length / PAGE_SIZE) },
    (_, index) => ({
      company,
      page: index + 1,
      href: companyPageHref(company.slug, index + 1),
    }),
  ),
);
