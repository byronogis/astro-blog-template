import Friday from 'astro-friday'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://byronogis.github.io/',
  base: '/astro-friday',
  integrations: [
    Friday({
      title: 'Astro Friday',
      author: {
        name: 'Byron',
        email: 'byronogis@outlook.com',
      },
      collections: {
        guide: {
          glob: {
            pattern: '**/*.md',
            base: './src/contents/guide',
          },
        },
      },
      navigations: {
        post: { label: 'Guide' },
        github: { label: 'Github', icon: 'i-lucide:github', external: true, link: 'https://github.com/byronogis', type: 'icon', order: 900 },
      },
      pages: {
        home: false,
      },
      art: {
        dots: { weight: 2 },
        plum: { weight: 1 },
      },
    }),
  ],
  server: {
    host: true,
  },
  build: {
    format: 'file',
  },
})
