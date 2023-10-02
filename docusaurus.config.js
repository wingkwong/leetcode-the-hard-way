// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LeetCode The Hard Way',
  tagline: 'From Absolute Beginner to Quitter',
  url: 'http://leetcodethehardway.com/',
  baseUrl: '/',
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
            label: '📚 Tutorials',
            to: '/tutorials/category/basic-topics',
            activeBaseRegex: `/tutorials/`,
          },
          {
            label: '📖 Solutions',
            to: '/solutions/category/0000---0099',
            activeBaseRegex: `/solutions/`,
          },
          // {
          //   label: '🏷️ Tags',
          //   to: '/solutions/tags/',
          //   activeBaseRegex: `/solutions/tags/`,
          // },
          {
            label: '🏛️ Roadmap',
            to: '/roadmap/',
            activeBaseRegex: `/roadmap/`,
          },
          {
            label: '🖥️ Templates',
            to: '/templates/',
            activeBaseRegex: `/templates/`,
          },
          // {to: '/blog', label: 'Blog', position: 'left'},

          // ========  old ============

          // {
          //   href: 'https://github.com/wingkwong/leetcode-the-hard-way',
          //   position: 'right',
          //   className: 'header-github-link',
          //   'aria-label': 'GitHub repository',
          // },

          // {
          //   href: 'https://discord.com/invite/Nqm4jJcyBf',
          //   position: 'right',
          //   className: 'navbar-icon',
          //   'aria-label': 'Discord channel',
          //   html: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path></svg>`,
          // },
          // {
          //   href: 'https://www.youtube.com/@leetcodethehardway?sub_confirmation=1',
          //   position: 'right',
          //   className: 'navbar-icon',
          //   'aria-label': 'YouTube channel',
          //   html: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
          //           <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
          //         </svg>`,
          // },

          //  ============ new ==========

          {
            type: 'dropdown',
            label: '🔗 Links',
            position: 'right',
            items: [
              // {
              //   href: 'https://github.com/wingkwong/leetcode-the-hard-way',
              //   className: 'navbar-icon header-github-link',
              //   'aria-label': 'GitHub repository',
              // },
              // {
              //   href: 'https://discord.com/invite/Nqm4jJcyBf',
              //   className: 'navbar-icon',
              //   'aria-label': 'Discord channel',
              //   html: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path></svg>`,
              // },

              // {
              //   href: 'https://www.youtube.com/@leetcodethehardway?sub_confirmation=1',
              //   className: 'navbar-icon',
              //   'aria-label': 'YouTube channel',
              //   html: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              //           <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
              //         </svg>`,
              // },
              {
                label: '🏷️ solutions Tags',
                to: '/solutions/tags/',
                activeBaseRegex: `/solutions/tags/`,
              },
              {
                to: 'https://github.com/sponsors/wingkwong',
                html: '<iframe src="https://github.com/sponsors/wingkwong/button" title="Sponsor Ajay-Dhangar" height="32" width="120px" style="border: 0; border-radius: 6px;"></iframe>',
              },

            ]
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [

          {
            title: 'Resources',
            items: [
              {
                label: 'Tutorials',
                to: '/tutorials/category/basic-topics/',
              },
              {
                label: 'Solutions',
                to: '/solutions/category/0000---0099/',
              },
              {
                label: 'Roadmap',
                to: '/roadmap',
              },
              {
                label: 'Templates',
                to: '/templates',
              },
            ],
          },

          {
            title: 'General',
            items: [
              {
                label: 'Tags',
                href: '/solutions/tags',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/wingkwong/leetcode-the-hard-way',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/Nqm4jJcyBf',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@leetcodethehardway?sub_confirmation=1',
              },
              {
                label: 'Contact',
                href: 'mailto:leetcodethehardway@gmail.com',
              }
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'Contributing',
                href: 'https://github.com/wingkwong/leetcode-the-hard-way/blob/main/CONTRIBUTING.md',
              }

            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} LeetCode The Hard Way. Built with Docusaurus.`,
      },
      announcementBar: {
        id: 'announcementBar-2', // Increment on change
        content: `⭐️ Master the technical interview without endless grinding with <a href="https://shareasale.com/r.cfm?b=1896233&u=3650658&m=114505&urllink=&afftrack=">AlgoMonster</a> ⭐️`,
        isCloseable: false,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['csharp', 'java', 'kotlin', 'rust']
      },
      // https://docusaurus.io/docs/search#using-algolia-docsearch
      algolia: {
        appId: 'TSP4XHNA9P',
        apiKey: '13aa27443cab36b7f20f3a59617607a6',
        indexName: 'leetcode-the-hard-way',
        contextualSearch: false
      },
      docs: {
        sidebar: {
          hideable: true,
        },
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
        id: 'roadmap',
        path: 'roadmap',
        routeBasePath: 'roadmap',
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