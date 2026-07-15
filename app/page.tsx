import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/layouts/docs/page';
import type { Root } from 'fumadocs-core/page-tree';
import type { Metadata } from 'next';
import { baseOptions } from '../lib/layout.shared';

export const metadata: Metadata = {
  title: 'Introduction | LeetCode The Hard Way',
  description:
    'A structured resource for learning data structures and algorithms through tutorials, templates, roadmaps, and LeetCode solution explanations.',
};

const introTree: Root = {
  name: 'LeetCode The Hard Way',
  children: [
    {
      type: 'page',
      name: 'Introduction',
      url: '/',
    },
    {
      type: 'separator',
      name: 'Documentation',
    },
    {
      type: 'page',
      name: 'Tutorials',
      url: '/tutorials/basic-topics',
    },
    {
      type: 'page',
      name: 'Solutions',
      url: '/solutions/0000-0099',
    },
    {
      type: 'page',
      name: 'Roadmap',
      url: '/roadmap',
    },
    {
      type: 'page',
      name: 'Templates',
      url: '/templates',
    },
  ],
};

const sections = [
  {
    title: 'Tutorials',
    description:
      'Learn data structures, algorithms, math, strings, graph theory, and other core topics.',
    href: '/tutorials/basic-topics',
  },
  {
    title: 'Solutions',
    description:
      'Browse detailed LeetCode solution explanations grouped by problem ID ranges.',
    href: '/solutions/0000-0099',
  },
  {
    title: 'Roadmap',
    description:
      'Follow curated problem sets for specific topics and study plans.',
    href: '/roadmap',
  },
  {
    title: 'Templates',
    description:
      'Use reusable implementation templates for common algorithm patterns.',
    href: '/templates',
  },
];

export default function HomePage() {
  return (
    <DocsLayout {...baseOptions()} tree={introTree}>
      <DocsPage>
        <DocsTitle>Introduction</DocsTitle>
        <DocsDescription>
          LeetCode The Hard Way is a structured resource for learning data
          structures and algorithms through tutorials, templates, roadmaps, and
          solution explanations.
        </DocsDescription>
        <DocsBody>
          <p>
            Start with the tutorials when you want to learn a concept, use the
            roadmap pages when you want a focused practice path, and refer to the
            solution catalog when you want complete explanations for individual
            problems.
          </p>

          <div className="generated-index-grid">
            {sections.map((section) => (
              <a
                className="generated-index-link"
                href={section.href}
                key={section.href}
              >
                <span>{section.title}</span>
                <small>{section.description}</small>
              </a>
            ))}
          </div>
        </DocsBody>
      </DocsPage>
    </DocsLayout>
  );
}
