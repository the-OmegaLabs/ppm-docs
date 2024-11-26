import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Plusto Package Manager",
  description: "A sleek, lightweight hybrid software package manager.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: false,
    nav: [
    ],

    sidebar: [
      {
        text: 'Beginning',
        items: [
          { text: 'Getting Started', link: '/markdown-examples' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Stevesuk0/ppm' }
    ]
  }
})
