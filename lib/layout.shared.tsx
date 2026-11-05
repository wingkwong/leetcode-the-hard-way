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
        url: formatPagePathname('/tutorials'),
        active: 'nested-url',
      },
      {
        text: 'Solutions',
        url: formatPagePathname('/solutions'),
        active: 'nested-url',
      },
      {
        text: 'Ratings',
        url: formatPagePathname('/ratings'),
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
      {
        type: 'icon',
        label: 'LeetCode The Hard Way on X',
        text: 'X',
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
          </svg>
        ),
        url: 'https://x.com/LeetCodeTHW',
        external: true,
      },
    ],
  };
}
