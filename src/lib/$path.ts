export const pagesPath = {
  "about": {
    $url: (url?: { hash?: string }) => ({ pathname: '/about' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath

export const staticPath = {
  favicon_ico: '/favicon.ico',
  img: {
    helpful_jpg: '/img/helpful.jpg',
    hero_jpg: '/img/hero.jpg',
    logo_svg: '/img/logo.svg',
    news01_jpg: '/img/news01.jpg',
    news02_jpg: '/img/news02.jpg',
    news03_jpg: '/img/news03.jpg',
    news04_jpg: '/img/news04.jpg',
    news05_jpg: '/img/news05.jpg',
    news06_jpg: '/img/news06.jpg',
    service_jpg: '/img/service.jpg',
    tool_jpg: '/img/tool.jpg'
  }
} as const

export type StaticPath = typeof staticPath
