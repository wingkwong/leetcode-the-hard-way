import { solutionsSource } from './source';
import { formatPagePathname } from './seo';

export function getSolutionTagSlug(tag: string) {
  return tag
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function getSolutionTagUrl(tag: string) {
  return `/solutions/tags/${getSolutionTagSlug(tag)}/`;
}

export function getSolutionTagGroups() {
  const groups = new Map<
    string,
    { name: string; pages: { title: string; url: string }[] }
  >();

  for (const page of solutionsSource.getPages()) {
    const seen = new Set<string>();
    for (const tag of page.data.tags ?? []) {
      const slug = getSolutionTagSlug(tag);
      if (seen.has(slug)) continue;
      seen.add(slug);
      const group = groups.get(slug) ?? {
        name: tag.replace(/\s+/g, ' '),
        pages: [],
      };
      group.pages.push({
        title: page.data.title ?? page.slugs.at(-1) ?? 'Solution',
        url: formatPagePathname(page.url),
      });
      groups.set(slug, group);
    }
  }

  return [...groups.values()]
    .sort((left, right) => left.name.localeCompare(right.name))
    .map(({ name, pages }) => [name, pages] as const);
}
