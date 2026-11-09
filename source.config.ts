import { defineConfig, defineDocs } from 'fumadocs-mdx/config';
import { remarkAdmonition } from 'fumadocs-core/mdx-plugins/remark-admonition';
import { metaSchema, pageSchema } from 'fumadocs-core/source/schema';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import { z } from 'zod';
import { remarkMdxComponentsInMd } from './lib/remark-mdx-components-in-md';

const booleanLike = z.preprocess((value) => {
  if (value === 'true') return true;
  if (value === 'false') return false;
  return value;
}, z.boolean().optional());

const docsOptions = {
  // Share article chunks between routes instead of eagerly loading every body.
  async: true,
  schema: pageSchema.extend({
    draft: booleanLike,
    title: z.string().optional(),
    hide_table_of_contents: z.boolean().optional(),
    keywords: z.array(z.string()).optional(),
    rating: z.union([z.number(), z.string().trim().min(1)]).optional(),
    tags: z.array(z.string().trim().min(1)).optional(),
    sidebar_position: z.number().optional(),
  }),
};

const metaOptions = {
  schema: metaSchema.extend({
    description: z.string().optional(),
  }),
};

function normalizeSolutionTitle(title: string) {
  return title
    .replace(/^LeetCode\s+/i, '')
    .replace(/\s*[–—]\s*/g, ' - ')
    .replace(/\s+/g, ' ')
    .trim();
}

function inferSolutionTitle(source: string) {
  const heading = /^# (\d+)(?:[ \t]*[-.])[ \t]+(.+)$/m.exec(source);
  if (!heading) return undefined;

  const name = heading[2]
    .trim()
    .replace(/\s+\((easy|medium|hard)\)$/i, '');

  return `${heading[1]} - ${name}`;
}

export const tutorials = defineDocs({
  dir: 'tutorials',
  docs: docsOptions,
  meta: metaOptions,
});

export const solutions = defineDocs({
  dir: 'solutions',
  docs: {
    ...docsOptions,
    schema: ({ source }) =>
      docsOptions.schema.transform((data) => {
        const title = data.title
          ? normalizeSolutionTitle(data.title)
          : inferSolutionTitle(source);

        return title ? { ...data, title } : data;
      }),
  },
  meta: metaOptions,
});

export const roadmap = defineDocs({
  dir: 'roadmap',
  docs: docsOptions,
  meta: metaOptions,
});

export const templates = defineDocs({
  dir: 'templates',
  docs: docsOptions,
  meta: metaOptions,
});

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkMath, remarkAdmonition, remarkMdxComponentsInMd],
    rehypePlugins: (plugins) => [rehypeKatex, ...plugins],
    remarkImageOptions: false,
    // Webpack precompiles every article. Token-level highlighting makes the
    // generated modules much larger, so keep local previews lightweight.
    rehypeCodeOptions:
      process.env.NODE_ENV === 'development' &&
      process.env.DEV_SYNTAX_HIGHLIGHT !== '1'
        ? false
        : {
            themes: {
              light: 'github-light',
              dark: 'github-dark',
            },
            fallbackLanguage: 'plaintext',
          },
  },
});
