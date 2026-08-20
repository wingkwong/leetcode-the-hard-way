import { Code } from 'lucide-react';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { formatPagePathname } from './seo';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'LeetCode The Hard Way',
    },
    links: [
      {
        text: 'Tutorials',
        url: formatPagePathname('/tutorials/basic-topics'),
        active: 'nested-url',
      },
      {
        text: 'Solutions',
        url: formatPagePathname('/solutions/0000-0099'),
        active: 'nested-url',
      },
      {
        text: 'Roadmap',
        url: formatPagePathname('/roadmap'),
        active: 'nested-url',
      },
      {
        text: 'Templates',
        url: formatPagePathname('/templates'),
        active: 'nested-url',
      },
      {
        type: 'icon',
        label: 'GitHub repository',
        text: 'GitHub',
        icon: <Code />,
        url: 'https://github.com/wingkwong/leetcode-the-hard-way',
      },
    ],
  };
}
