import { roadmap, solutions, templates, tutorials } from 'collections/server';
import { loader } from 'fumadocs-core/source';
import type { StaticSource, VirtualFile } from 'fumadocs-core/source';

const isProduction = process.env.NODE_ENV === 'production';

function createDocsSource<Source extends StaticSource>(
  collection: {
    toFumadocsSource: () => Source;
  },
  baseUrl: string,
  formatSlug?: (slug: string[]) => string[],
) {
  const source = collection.toFumadocsSource();

  return loader({
    baseUrl,
    url: (slugs) =>
      [baseUrl, ...formatSlugOrDefault(formatSlug, slugs)]
        .filter(Boolean)
        .join('/'),
    source: isProduction
      ? ({
          ...source,
          files: source.files.filter((file) => !isDraftPage(file)),
        } as Source)
      : source,
  });
}

function isDraftPage(file: VirtualFile) {
  if (file.type !== 'page') return false;

  const draft = (file.data as { draft?: boolean | string }).draft;
  return draft === true || draft === 'true';
}

export const tutorialsSource = createDocsSource(tutorials, '/tutorials');

export const solutionsSource = createDocsSource(
  solutions,
  '/solutions',
  formatSolutionSlug,
);

export const roadmapSource = createDocsSource(roadmap, '/roadmap');

export const templatesSource = createDocsSource(templates, '/templates');

export const allSources = [
  tutorialsSource,
  solutionsSource,
  roadmapSource,
  templatesSource,
];

function formatSlugOrDefault(
  formatSlug: ((slug: string[]) => string[]) | undefined,
  slug: string[],
) {
  return formatSlug?.(slug) ?? slug;
}

function formatSolutionSlug(slug: string[]) {
  if (slug.length < 2) return slug;

  const publicSlug = [...slug];
  publicSlug[publicSlug.length - 1] =
    publicSlug.at(-1)?.replace(/^\d{4}-/, '') ?? '';
  return publicSlug;
}
