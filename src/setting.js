export const site = {
  author: 'Anonymous',
  avatar: '/avatar.jpg', // url or path (relative to /public) of false to disable
  email: 'foo@bar.baz',
  title: 'Astro Starter',
  description: 'Astro Starter Description',
  navigation: [
    { id: 'home', title: 'Home', path: '/', icon: 'home' },
    { id: 'post', title: 'Post', path: '/post/', icon: 'post' },
    { id: 'tag', title: 'Tag', path: '/tag/', icon: 'tag' },
    { id: 'about', title: 'About', path: '/about/', icon: 'info' },
  ],
  iconMap: {
    home: 'i-ic:baseline-home',
    post: 'i-ic:baseline-article',
    tag: 'i-ic:baseline-label',
    info: 'i-ic:baseline-info',
    toc: 'i-ic:baseline-format-list-bulleted',
    menu: 'i-ic:baseline-menu',
  },
  href: 'https://astro.ucatch.me/', // include basePath
  basePath: '/',
  dateFormate: 'YYYY-MM-DD',
  timeFormate: 'HH:mm',
  locales: ['zh', 'en'],
  preferredLocale: 'zh',
}
