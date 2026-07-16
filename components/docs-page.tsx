import fs from 'node:fs';
import path from 'node:path';
import { notFound } from 'next/navigation';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/layouts/docs/page';
import { getRelativeMDXComponents, type MDXComponent } from './mdx';
import {
  JsonLdScript,
  createPageMetadata,
  createTechArticleJsonLd,
} from '../lib/seo';

type Page = {
  data: {
    body: MDXComponent;
    description?: string;
    hide_table_of_contents?: boolean;
    title?: string;
    toc?: unknown;
  };
  slugs: string[];
  url: string;
};

type Source = {
  generateParams: () => { slug?: string[] }[];
  getPage: (slug: string[]) => Page | undefined;
  getPages: () => Page[];
};

type Section = {
  baseUrl: string;
  contentDir: string;
  renderTitle?: boolean;
  source: Source;
  title: string;
};

type MetaFile = {
  description?: string;
  pages?: string[];
  title?: string;
};

export function renderDocsPage(section: Section, slug: string[] = []) {
  const page = section.source.getPage(slug);

  if (!page) return renderGeneratedIndex(section, slug);

  const MDX = page.data.body;
  const showTitle = section.renderTitle !== false && Boolean(page.data.title);
  const seo = getDocsPageSeo(section, slug, page);

  return (
    <DocsPage
      full={page.data.hide_table_of_contents}
      toc={page.data.hide_table_of_contents ? undefined : page.data.toc as []}
    >
      <JsonLdScript
        data={createTechArticleJsonLd(seo)}
        id="docs-page-json-ld"
      />
      {showTitle && <DocsTitle>{page.data.title}</DocsTitle>}
      {showTitle && page.data.description && (
        <DocsDescription className="docs-description">
          {page.data.description}
        </DocsDescription>
      )}
      <DocsBody>
        <MDX components={getRelativeMDXComponents(section.source, page)} />
      </DocsBody>
    </DocsPage>
  );
}

export function getDocsMetadata(section: Section, slug: string[] = []) {
  return createPageMetadata(getDocsPageSeo(section, slug));
}

function renderGeneratedIndex(section: Section, slug: string[]) {
  if (!hasDescendant(section.source.getPages(), slug)) notFound();

  const meta = readMeta(section.contentDir, slug);
  const title = meta?.title ?? titleFromSlug(slug.at(-1) ?? section.title);
  const children = getChildren(section, slug, meta);
  const seo = getDocsPageSeo(section, slug);

  return (
    <DocsPage>
      <JsonLdScript
        data={createTechArticleJsonLd(seo)}
        id="docs-page-json-ld"
      />
      <DocsTitle>{title}</DocsTitle>
      {meta?.description && (
        <DocsDescription className="docs-description">
          {meta.description}
        </DocsDescription>
      )}
      <DocsBody>
        <div className="generated-index-grid">
          {children.map((child) => (
            <a className="generated-index-link" href={child.url} key={child.url}>
              <span>{child.title}</span>
              {child.description && <small>{child.description}</small>}
            </a>
          ))}
        </div>
      </DocsBody>
    </DocsPage>
  );
}

function getDocsPageSeo(section: Section, slug: string[], page?: Page) {
  const currentPage = page ?? section.source.getPage(slug);
  const meta = currentPage ? null : readMeta(section.contentDir, slug);
  const title =
    currentPage?.data.title ??
    meta?.title ??
    titleFromSlug(slug.at(-1) ?? section.title);
  const description = currentPage?.data.description ?? meta?.description;

  return {
    title,
    description,
    pathname: getPathname(section.baseUrl, slug),
  };
}

function getChildren(section: Section, slug: string[], meta?: MetaFile | null) {
  const pages = section.source.getPages();
  const prefix = slug.join('/');
  const ordered = meta?.pages ?? [];
  const items = new Map<
    string,
    {
      description?: string;
      title: string;
      url: string;
    }
  >();

  for (const page of pages) {
    if (!startsWithSlug(page.slugs, slug) || page.slugs.length <= slug.length) {
      continue;
    }

    const next = page.slugs[slug.length];
    const childSlug = [...slug, next];
    const key = next;
    const exactPage =
      page.slugs.length === childSlug.length ? page : section.source.getPage(childSlug);
    const childMeta = readMeta(section.contentDir, childSlug);

    if (!items.has(key)) {
      items.set(key, {
        title: exactPage?.data.title ?? childMeta?.title ?? titleFromSlug(next),
        description: exactPage?.data.description ?? childMeta?.description,
        url: [section.baseUrl, prefix, next].filter(Boolean).join('/'),
      });
    }
  }

  return [...items.entries()]
    .sort(([left], [right]) => {
      const leftIndex = ordered.indexOf(left);
      const rightIndex = ordered.indexOf(right);

      if (leftIndex !== -1 || rightIndex !== -1) {
        return (leftIndex === -1 ? Number.MAX_SAFE_INTEGER : leftIndex) -
          (rightIndex === -1 ? Number.MAX_SAFE_INTEGER : rightIndex);
      }

      return left.localeCompare(right);
    })
    .map(([, item]) => item);
}

function hasDescendant(pages: Page[], slug: string[]) {
  if (slug.length === 0) return true;
  return pages.some((page) => startsWithSlug(page.slugs, slug));
}

function startsWithSlug(candidate: string[], slug: string[]) {
  return slug.every((part, index) => candidate[index] === part);
}

function getPathname(baseUrl: string, slug: string[]) {
  return [baseUrl, ...slug].filter(Boolean).join('/');
}

function readMeta(contentDir: string, slug: string[]): MetaFile | null {
  const file = path.join(process.cwd(), contentDir, ...slug, 'meta.json');

  if (!fs.existsSync(file)) return null;

  return JSON.parse(fs.readFileSync(file, 'utf8')) as MetaFile;
}

function titleFromSlug(value: string) {
  return value
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}
