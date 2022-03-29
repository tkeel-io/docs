// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'QingCloud 物联网平台',
  tagline: '',
  url: 'https://docs.tkeel.io',
  favicon: 'images/qingcloud-logo-mark.svg',
  organizationName: '',
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
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/styles/qingcloud.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        style: 'dark',
        title: 'QingCloud 物联网平台',
      },
    }),
};

module.exports = config;
