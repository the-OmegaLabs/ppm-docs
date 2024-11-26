import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Plusto Package Manager",
  description: "A sleek, lightweight hybrid software package manager.",
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
    ]
  }
})
