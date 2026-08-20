import type { MetadataRoute } from 'next';
import {
  roadmapSource,
  solutionsSource,
  templatesSource,
  tutorialsSource,
} from '../lib/source';
import { absoluteUrl, formatPagePathname } from '../lib/seo';

export const dynamic = 'force-static';

type Page = {
  slugs: string[];
  url: string;
};

type Source = {
  getPages: () => Page[];
};

const docsSections = [
  {
    baseUrl: '/tutorials',
    source: tutorialsSource,
  },
  {
    baseUrl: '/solutions',
    formatSlug: formatSolutionSlug,
    source: solutionsSource,
  },
  {
    baseUrl: '/roadmap',
    source: roadmapSource,
  },
  {
    baseUrl: '/templates',
    source: templatesSource,
  },
] satisfies {
  baseUrl: string;
  formatSlug?: (slug: string[]) => string[];
  source: Source;
}[];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = new Set<string>(['/']);

  for (const section of docsSections) {
    for (const page of section.source.getPages()) {
      paths.add(getPathname(section.baseUrl, formatSlug(section, page.slugs)));

      for (let depth = 0; depth < page.slugs.length; depth++) {
        paths.add(
          getPathname(
            section.baseUrl,
            formatSlug(section, page.slugs.slice(0, depth)),
          ),
        );
      }
    }
  }

  return [...paths].sort().map((pathname) => ({
    url: absoluteUrl(pathname),
  }));
}

function getPathname(baseUrl: string, slug: string[]) {
  return formatPagePathname([baseUrl, ...slug].filter(Boolean).join('/'));
}

function formatSlug(
  section: {
    formatSlug?: (slug: string[]) => string[];
  },
  slug: string[],
) {
  return section.formatSlug?.(slug) ?? slug;
}

function formatSolutionSlug(slug: string[]) {
  if (slug.length < 2) return slug;

  const publicSlug = [...slug];
  publicSlug[publicSlug.length - 1] =
    publicSlug.at(-1)?.replace(/^\d{4}-/, '') ?? '';
  return publicSlug;
}
