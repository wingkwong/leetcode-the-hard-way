import {
  roadmap,
  solutions,
  templates,
  tutorials,
} from 'collections/server';
import { loader } from 'fumadocs-core/source';

export const tutorialsSource = loader({
  baseUrl: '/tutorials',
  source: tutorials.toFumadocsSource(),
});

export const solutionsSource = loader({
  baseUrl: '/solutions',
  source: solutions.toFumadocsSource(),
});

export const roadmapSource = loader({
  baseUrl: '/roadmap',
  source: roadmap.toFumadocsSource(),
});

export const templatesSource = loader({
  baseUrl: '/templates',
  source: templates.toFumadocsSource(),
});

export const allSources = [
  tutorialsSource,
  solutionsSource,
  roadmapSource,
  templatesSource,
];
