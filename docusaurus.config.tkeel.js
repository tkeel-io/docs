// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const tKeelGitHub = 'https://github.com/tkeel-io/tkeel';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'tKeel',
  tagline: 'tKeel are cool',
  url: 'https://docs.tkeel.io',
  favicon: 'images/tkeel-logo-mark.svg',
  organizationName: 'tkeel-io',
  projectName: 'docs',
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
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/styles/tkeel.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'tKeel',
          src: 'images/tkeel-logo-type-dark.svg',
          width: 149,
          height: 28,
        },
        items: [
          {
            href: tKeelGitHub,
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      /* footer: {
        links: [
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
      }, */
    }),

  scripts: [
    {
      src: 'https://hm.baidu.com/hm.js?fd45d3e0a66aec212c9e87dcf4b45160',
      async: true,
    },
  ],
};

module.exports = config;
