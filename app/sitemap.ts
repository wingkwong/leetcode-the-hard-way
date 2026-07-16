import type { MetadataRoute } from 'next';
import {
  roadmapSource,
  solutionsSource,
  templatesSource,
  tutorialsSource,
} from '../lib/source';
import { absoluteUrl } from '../lib/seo';

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
  source: Source;
}[];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = new Set<string>(['/']);

  for (const section of docsSections) {
    for (const page of section.source.getPages()) {
      paths.add(page.url);

      for (let depth = 0; depth < page.slugs.length; depth++) {
        paths.add(getPathname(section.baseUrl, page.slugs.slice(0, depth)));
      }
    }
  }

  return [...paths].sort().map((pathname) => ({
    url: absoluteUrl(pathname),
  }));
}

function getPathname(baseUrl: string, slug: string[]) {
  return [baseUrl, ...slug].filter(Boolean).join('/');
}
