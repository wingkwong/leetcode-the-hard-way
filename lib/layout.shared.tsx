import { Code } from 'lucide-react';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'LeetCode The Hard Way',
    },
    links: [
      {
        text: 'Tutorials',
        url: '/tutorials/basic-topics',
        active: 'nested-url',
      },
      {
        text: 'Solutions',
        url: '/solutions/0000-0099',
        active: 'nested-url',
      },
      {
        text: 'Roadmap',
        url: '/roadmap',
        active: 'nested-url',
      },
      {
        text: 'Templates',
        url: '/templates',
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
