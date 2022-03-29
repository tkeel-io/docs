// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        items: [
          { to: '/getting_started/guide', label: '新手引导', position: 'left' },
          { to: '/api/Core/tag', label: 'API', position: 'left' },
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
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  i18n: {
    defaultLocale: 'zh-cn',
    locales: ['zh-cn'],
  },

  plugins: ['docusaurus-plugin-sass'],
};

module.exports = config;
