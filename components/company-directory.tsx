'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import type { CompanySummary } from '../data/companies';

type Props = { companies: CompanySummary[] };

export function CompanyDirectory({
  companies,
  sidebar = false,
}: Props & { sidebar?: boolean }) {
  const [query, setQuery] = useState('');
  const pathname = usePathname().replace(/\/$/, '');
  if (sidebar && pathname === '/companies') return null;
  const matches = companies.filter(({ name }) =>
    name.toLowerCase().includes(query.trim().toLowerCase()),
  );
  const label = sidebar ? 'Find a company' : 'Search companies';
  return (
    <div className={sidebar ? 'company-sidebar' : 'company-directory'}>
      {sidebar && (
        <Link className="company-sidebar-title" href="/companies/">
          <ArrowLeft size={16} aria-hidden="true" />
          All Companies
        </Link>
      )}
      <input
        className="ratings-search"
        type="search"
        aria-label={label}
        placeholder={label}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul className="company-list">
        {matches.map(({ slug, name, count }) => {
          const href = `/companies/${slug}/`;
          return (
            <li key={slug}>
              <Link
                href={href}
                prefetch={false}
                aria-current={
                  pathname === href.slice(0, -1) ? 'page' : undefined
                }
              >
                <span>{name}</span>
                {!sidebar && (
                  <small>
                    {count} {count === 1 ? 'problem' : 'problems'}
                  </small>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
      {matches.length === 0 && <p role="status">No companies found.</p>}
    </div>
  );
}

export function ChangeCompany({
  companies,
  selected,
}: Props & { selected: string }) {
  const router = useRouter();
  return (
    <label className="company-mobile-switch">
      Change company
      <select
        className="ratings-search"
        value={selected}
        onChange={(e) => router.push(`/companies/${e.target.value}/`)}
      >
        {companies.map(({ slug, name }) => (
          <option key={slug} value={slug}>
            {name}
          </option>
        ))}
      </select>
    </label>
  );
}
