// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TTLxGOVEE Documentation',
  tagline: 'Documentation for govee.tinkertechlab.com',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://goveedocs.tinkertechlab.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'TinkerTechLab', // Usually your GitHub org/user name.
  projectName: 'TTLxGOVEE Docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/TinkerTechLab/TTLxGOVEE-Documentation',
        },
        blog: false,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo-bg.png',
      navbar: {
        title: 'TTLxGOVEE',
        logo: {
          alt: 'TinkerTechLab Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://goveedocs.tinkertechlab.com/docs/support',
            position: 'left',
            label: 'Get Support',
          },
          {
            href: 'https://github.com/TinkerTechLab/TTLxGOVEE-Documentation',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Popular Links',
            items: [
              {
                label: 'Homepage',
                to: 'https://govee.tinkertechlab.com',
              },
              {
                label: 'Control Panel',
                to: 'https://govee.tinkertechlab.com/dash',
              },
              {
                label: 'Documentation',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/gbmjfFe79x',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/tinkertechlab',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Suggest Edits',
                href: 'https://github.com/TinkerTechLab/TTLxGOVEE-Documentation',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TinkerTechLab`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
