import { defineConfig } from "vitepress";

import Unocss from "unocss/vite";

import {
  GitChangelog,
  GitChangelogMarkdownSection,
} from "@nolebase/vitepress-plugin-git-changelog/vite";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Plusto Package Manager",
  description: "A sleek, lightweight hybrid software package manager.",
  head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: "Plusto Package Manager",
    nav: [
    ],

    sidebar: [
      {
        text: 'Beginning',
        items: [
          { text: 'Welcome', link: '/welcome' },
          { text: 'Getting Started', link: '/getting-started' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Stevesuk0/ppm' }
    ],
    outline: [1, 4],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 Stevesuk0'
    }
  },
  assetsDir: "assets",
  head: [["link", { rel: "icon", type: "image/png", href: "/logo.png" }]],
  rewrites: {},
  vite: {
    optimizeDeps: {
      include: [
        // @rive-app/canvas is a CJS/UMD module, so it needs to be included here
        // for Vite to properly bundle it.
        "@nolebase/vitepress-plugin-enhanced-readabilities > @nolebase/ui > @rive-app/canvas",
      ],
      exclude: ["@nolebase/vitepress-plugin-enhanced-readabilities/client"],
    },
    ssr: {
      noExternal: [
        "@nolebase/vitepress-plugin-enhanced-readabilities",
        "@nolebase/vitepress-plugin-highlight-targeted-heading",
      ],
    },
    plugins: [
      GitChangelog({
        repoURL: () => "https://github.com/Stevesuk0/ppm-docs",
      }),
      GitChangelogMarkdownSection(),
      Unocss(),
    ],
  },
});
