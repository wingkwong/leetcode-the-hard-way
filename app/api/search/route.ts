import { createSearchAPI } from 'fumadocs-core/search/server';
import type { AdvancedIndex } from 'fumadocs-core/search/server';
import { allSources } from '../../../lib/source';
import { formatPagePathname } from '../../../lib/seo';

export const dynamic = 'force-static';

export const { staticGET: GET } = createSearchAPI('advanced', {
  language: 'english',
  indexes: async () => {
    const indexes: AdvancedIndex[] = [];

    // Avoid loading every article concurrently when building the search index.
    for (const source of allSources) {
      for (const page of source.getPages()) {
        const { structuredData } = await page.data.load();
        indexes.push({
          title: page.data.title ?? titleFromUrl(page.url),
          description: page.data.description,
          url: formatPagePathname(page.url),
          id: formatPagePathname(page.url),
          structuredData,
        });
      }
    }

    return indexes;
  },
});

function titleFromUrl(url: string) {
  const slug = url.split('/').filter(Boolean).at(-1) ?? 'LeetCode The Hard Way';

  return slug
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}
