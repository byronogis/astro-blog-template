export const site = {
  author: 'Anonymous',
  email: 'foo@bar.baz',
  title: 'Astro Starter',
  description: 'Astro Starter Description',
  navigation: [
    { id: 'home', title: 'Home', path: '/', icon: 'home' },
    { id: 'post', title: 'Post', path: '/post/', icon: 'post' },
    { id: 'tag', title: 'Tag', path: '/tag/', icon: 'tag' },
    { id: 'about', title: 'About', path: '/about/', icon: 'info' },
  ].map(i => ({ ...i, path: import.meta.env.BASE_URL.replace(/\/+$/, '') + i.path })),
  iconMap: {
    home: 'i-ic:baseline-home',
    post: 'i-ic:baseline-article',
    tag: 'i-ic:baseline-label',
    info: 'i-ic:baseline-info',
    toc: 'i-ic:baseline-format-list-bulleted',
    menu: 'i-ic:baseline-menu',
  },
}
