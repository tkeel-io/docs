// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const tKeelGitHub = 'https://github.com/tkeel-io/tkeel';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'tKeel',
  tagline: 'tKeel are cool',
  url: 'https://docs.tkeel.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'images/logo.svg',
  organizationName: 'tkeel-io', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: 'https://github.com/tkeel-io/docs/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/styles/custom.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'tKeel',
        logo: {
          alt: 'tKeel',
          src: 'images/logo.svg',
        },
        items: [
          { to: '/getting_started/guide', label: '新手引导', position: 'left' },
          { to: '/api/Core/tag', label: 'API', position: 'left' },
          {
            href: tKeelGitHub,
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
            title: '文档',
            items: [
              {
                label: '什么是 tKeel',
                to: '/',
              },
              {
                label: '概念',
                to: '/internal_concepts/platform',
              },
              {
                label: '新手引导',
                to: '/getting_started/guide',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'GitHub',
                href: tKeelGitHub,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} tKeel. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-cn'],
  },

  scripts: [
    {
      src: 'https://hm.baidu.com/hm.js?fd45d3e0a66aec212c9e87dcf4b45160',
      async: true,
    },
  ],

  plugins: ['docusaurus-plugin-sass'],
};

module.exports = config;
