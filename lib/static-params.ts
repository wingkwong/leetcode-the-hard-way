type StaticParam = {
  slug?: string[];
};

export function generateDocsStaticParams(
  params: StaticParam[],
  formatSlug?: (slug: string[]) => string[],
) {
  const results: StaticParam[] = [];
  const seen = new Set<string>();

  for (const param of params) {
    addSlugWithAncestors(param.slug ?? []);

    if (formatSlug) {
      addSlugWithAncestors(formatSlug(param.slug ?? []));
    }
  }

  return results;

  function addSlugWithAncestors(slug: string[]) {
    for (let depth = 0; depth <= slug.length; depth++) {
      const current = slug.slice(0, depth);
      const key = current.join('/');

      if (seen.has(key)) continue;

      seen.add(key);
      results.push({ slug: current });
    }
  }
}
