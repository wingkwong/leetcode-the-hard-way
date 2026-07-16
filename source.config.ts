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
  schema: pageSchema.extend({
    draft: booleanLike,
    title: z.string().optional(),
    hide_table_of_contents: z.boolean().optional(),
    keywords: z.array(z.string()).optional(),
    sidebar_position: z.number().optional(),
  }),
};

const metaOptions = {
  schema: metaSchema.extend({
    description: z.string().optional(),
  }),
};

export const tutorials = defineDocs({
  dir: 'tutorials',
  docs: docsOptions,
  meta: metaOptions,
});

export const solutions = defineDocs({
  dir: 'solutions',
  docs: docsOptions,
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
    rehypeCodeOptions: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      fallbackLanguage: 'plaintext',
    },
  },
});
