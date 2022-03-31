const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const config = {
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },

    navbar: {
      items: [
        {
          href: 'https://github.com/tkeel-io/tkeel',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },

    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },

  i18n: {
    defaultLocale: 'zh-cn',
    locales: ['zh-cn'],
  },

  plugins: ['docusaurus-plugin-sass'],
};

module.exports = config;
