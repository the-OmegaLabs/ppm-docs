import type { DefaultTheme, HeadConfig } from 'vitepress'

export const getLocaleConfig = (lang: string) => {
  const repoLink = 'https://github.com/Stevesuk0/ppm'
  const title = 'Plusto Package Manager'

  const head: HeadConfig[] = [
    ['meta', { property: 'og:title', content: title }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#914796' }],
  ]



  const themeConfig: DefaultTheme.Config = {
    logo: '/favicon.svg',
    socialLinks: [
      {
        icon: 'github',
        link: repoLink,
      },
    ],
    footer: {
      message: 'Plusto Package Manager',
      copyright:
        'MIT License © 2024',
    },
    editLink: {
      pattern: `${repoLink}/edit/main/docs/:path`,
      text: '在 GitHub 上编辑此页',
    },
  }

  if (lang === 'cn') {
    Object.assign(themeConfig, {
      outline: {
        label: '页面导航',
      },
      lastUpdatedText: '最后更新于',
      darkModeSwitchLabel: '外观',
      sidebarMenuLabel: '目录',
      returnToTopLabel: '返回顶部',
      langMenuLabel: '选择语言',
      docFooter: {
        prev: '上一页',
        next: '下一页',
      },
    } satisfies DefaultTheme.Config)
  }


}
