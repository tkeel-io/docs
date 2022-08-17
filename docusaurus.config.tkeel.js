const simplePlantUML = require("@akebifiky/remark-simple-plantuml");
const config = {
  title: 'tKeel',
  tagline: 'tKeel are cool',
  url: 'https://docs.tkeel.io',
  baseUrl: '/',
  favicon: 'images/tkeel-logo-mark.svg',
  organizationName: 'tkeel-io',
  projectName: 'docs',
  deploymentBranch: 'gh-pages',

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: 'https://github.com/tkeel-io/docs/tree/main/',
          showLastUpdateTime: true,
          remarkPlugins: [simplePlantUML],
        },
        theme: {
          customCss: require.resolve('./src/styles/tkeel.scss'),
        },
      },
    ]
  ],

  themeConfig: {
    navbar: {
      logo: {
        alt: 'tKeel',
        src: 'images/tkeel-logo-type-dark.svg',
        width: 149,
        height: 28,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'startSidebar',
          position: 'left',
          label: '快速开始',
        },
        {
          type: 'docSidebar',
          sidebarId: 'introSidebar',
          position: 'left',
          label: '熟悉tKeel',
        },
        {
          type: 'docSidebar',
          sidebarId: 'developSidebar',
          position: 'left',
          label: '开发文档',
        },
        {
          type: 'docSidebar',
          sidebarId: 'apiSidebar',
          position: 'left',
          label: 'API',
        }
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
              href: 'https://github.com/tkeel-io/tkeel',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} tKeel. Built with Docusaurus.`,
    },
  },

  scripts: [
    {
      src: 'https://hm.baidu.com/hm.js?fd45d3e0a66aec212c9e87dcf4b45160',
      async: true,
    },
  ],
};

module.exports = config;
