module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Routve',
      description: 'Routve is an advanced Svelte 3 router'
    },
    '/tr/': {
      lang: 'tr-TR',
      title: 'Routve',
      description: 'Routve gelişmiş bir Svelte 3 yönlendiricisidir'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['meta', { name: 'theme-color', content: '#FF3E00' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],
  themeConfig: {
    repo: 'routve/routve',
    smoothScroll: true,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        ariaLabel: 'Select language',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: require('./nav/en'),
        sidebar: {
          '/guide/': getGuideSidebar("Guide", "Advanced")
        }
      },
      '/tr/': {
        label: 'Türkçe',
        selectText: 'Dil',
        ariaLabel: 'Dil Seçimi',
        editLinkText: 'Bu sayfayı Github\'da düzenle',
        lastUpdated: 'Son Güncelleme'
      }
    }
  },
}

function getGuideSidebar (groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        'getting-started'
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: []
    }
  ]
}
