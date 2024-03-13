import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Web Audio Modules 2",
  tagline: "Audio plugins for the modern web",
  favicon: "img/favicon.png",

  // Set the production url of your site here
  url: "https://www.webaudiomodules.com/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Boourns", // Usually your GitHub org/user name.
  projectName: "webaudiomodules.com", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./content/sidebar.ts",
          path: "content",
          routeBasePath: "docs",
        },
        blog: {
          path: "news",
          routeBasePath: "news",
          showReadingTime: false,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: "Web Audio Modules 2",
      logo: {
        alt: "Web Audio Modules Logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "documentationSidebar",
          position: "left",
          label: "Docs",
        },
        { to: "/news", label: "News", position: "left" },
        {
          href: "https://github.com/webaudiomodules",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "External Links",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/webaudiomodules",
            },
            {
              label: "Slack",
              href: "https://web-audio-slackin.herokuapp.com/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.okaidia,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
