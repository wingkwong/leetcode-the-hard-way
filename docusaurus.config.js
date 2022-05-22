// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LeetCode The Hard Way',
  tagline: 'From Absolute Beginner to Quitter',
  url: 'https://wingkwong.github.io',
  baseUrl: '/leetcode-the-hard-way/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  organizationName: 'wingkwong',
  projectName: 'leetcode-the-hard-way',
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          path: './docs',
          lastVersion: 'current',
          onlyIncludeVersions: ['current'],
          remarkPlugins: [math],
          rehypePlugins: [katex],
          // showLastUpdateTime: true,
          // showLastUpdateAuthor: true,
          editUrl:
            'https://github.com/wingkwong/leetcode-the-hard-way',
        },
        // blog: {
        //   showReadingTime: true,
        //   editUrl:
        //     'https://github.com/wingkwong/leetcode-the-hard-way',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-NY80BVQV8L',
        }, 
        googleAnalytics: {
          trackingID: 'UA-119822493-4',
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'LeetCode The Hard Way',
        // logo: {
        //   alt: 'LeetCode The Hard Way',
        //   src: 'img/logo.svg',
        // },
        items: [
          {
            label: 'Tutorials',
            to: '/tutorials/category/basic-topics',
            activeBaseRegex: `/tutorials/`,
          },
          {
            label: 'Solutions',
            to: '/solutions',
            activeBaseRegex: `/solutions/`,
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/wingkwong/leetcode-the-hard-way',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'General',
            items: [
              {
                label: 'Tutorials',
                href: '/tutorials/',
              },
              {
                label: 'Solutions',
                href: '/solutions/',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/wingkwong/leetcode-the-hard-way',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} LeetCode The Hard Way. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      // https://docusaurus.io/docs/search#using-algolia-docsearch
      algolia: {
        appId: '3476Z84HTB',
        apiKey: '55a35f603f206084ba60cc05f22d30a2',
        indexName: 'leetcodethehardway',
      },
    }),

    plugins: [
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'solutions',
          path: 'solutions',
          routeBasePath: 'solutions',
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [math],
          rehypePlugins: [katex],
          // showLastUpdateTime: true,
          // showLastUpdateAuthor: true,
          editUrl:
            'https://github.com/wingkwong/leetcode-the-hard-way',
        }, 
      ],
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'tutorials',
          path: 'tutorials',
          routeBasePath: 'tutorials',
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [math],
          rehypePlugins: [katex],
          // showLastUpdateTime: true,
          // showLastUpdateAuthor: true,
          editUrl:
            'https://github.com/wingkwong/leetcode-the-hard-way',
        }, 
      ],
  ],
  
};

module.exports = config;
