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
            to: '/solutions/category/0000---0099',
            activeBaseRegex: `/solutions/`,
          },
          {
            label: 'Collections',
            to: '/collections/',
            activeBaseRegex: `/collections/`,
          },
          {
            label: 'Templates',
            to: '/templates/',
            activeBaseRegex: `/templates/`,
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/wingkwong/leetcode-the-hard-way',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
          {
            href: 'https://discord.gg/YeYWJ7g3',
            position: 'right',
            className: 'navbar-icon',
            'aria-label': 'Discord channel',
            html: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path></svg>`,
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
                href: '/tutorials/category/basic-topics/',
              },
              {
                label: 'Solutions',
                href: '/solutions/category/0000---0099/',
              },
              {
                label: 'Collections',
                href: '/collections',
              },
              {
                label: 'Templates',
                href: '/templates',
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
              {
                label: 'Discord',
                href: 'https://discord.gg/YeYWJ7g3',
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
        appId: 'TSP4XHNA9P',
        apiKey: '13aa27443cab36b7f20f3a59617607a6',
        indexName: 'leetcode-the-hard-way',
        contextualSearch: false
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
            'https://github.com/wingkwong/leetcode-the-hard-way/tree/main/',
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
            'https://github.com/wingkwong/leetcode-the-hard-way/tree/main/',
        }, 
      ],
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'collections',
          path: 'collections',
          routeBasePath: 'collections',
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [math],
          rehypePlugins: [katex],
          // showLastUpdateTime: true,
          // showLastUpdateAuthor: true,
          editUrl:
            'https://github.com/wingkwong/leetcode-the-hard-way/tree/main/',
        }, 
      ],

      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'templates',
          path: 'templates',
          routeBasePath: 'templates',
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [math],
          rehypePlugins: [katex],
          // showLastUpdateTime: true,
          // showLastUpdateAuthor: true,
          editUrl:
            'https://github.com/wingkwong/leetcode-the-hard-way/tree/main/',
        }, 
      ],
  ],
  
};

module.exports = config;
