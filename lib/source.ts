import {
  roadmap,
  solutions,
  templates,
  tutorials,
} from 'collections/server';
import { loader } from 'fumadocs-core/source';
import type { StaticSource, VirtualFile } from 'fumadocs-core/source';

const isProduction = process.env.NODE_ENV === 'production';

function createDocsSource<Source extends StaticSource>(
  collection: {
    toFumadocsSource: () => Source;
  },
  baseUrl: string,
) {
  const source = collection.toFumadocsSource();

  return loader({
    baseUrl,
    source: isProduction
      ? {
          ...source,
          files: source.files.filter((file) => !isDraftPage(file)),
        } as Source
      : source,
  });
}

function isDraftPage(file: VirtualFile) {
  if (file.type !== 'page') return false;

  const draft = (file.data as { draft?: boolean | string }).draft;
  return draft === true || draft === 'true';
}

export const tutorialsSource = createDocsSource(tutorials, '/tutorials');

export const solutionsSource = createDocsSource(solutions, '/solutions');

export const roadmapSource = createDocsSource(roadmap, '/roadmap');

export const templatesSource = createDocsSource(templates, '/templates');

export const allSources = [
  tutorialsSource,
  solutionsSource,
  roadmapSource,
  templatesSource,
];
