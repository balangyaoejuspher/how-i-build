import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'How I Build',
  tagline: 'System Architecture & Real-World Engineering Standards',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://balangyaoejuspher.github.io',
  baseUrl: '/how-i-build/',

  organizationName: 'balangyaoejuspher',
  projectName: 'how-i-build',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          routeBasePath: '/',
          showReadingTime: true,
          postsPerPage: 'ALL',
          blogSidebarCount: 5,
          blogSidebarTitle: 'Recent posts',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/balangyaoejuspher/how-i-build/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'How I Build',
      logo: {
        alt: 'How I Build Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/start-here', label: 'Start Here', position: 'left'},
        {to: '/', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/balangyaoejuspher/how-i-build',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Content',
          items: [
            {
              label: 'Blog',
              to: '/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/balangyaoejuspher/how-i-build',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} How I Build.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
