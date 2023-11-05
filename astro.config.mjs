import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'
import pagefind from 'astro-pagefind'
import { site } from './src/setting'

// https://astro.build/config
export default defineConfig({
  base: site.basePath,
  site: site.href,
  integrations: [
    UnoCSS({
      injectReset: '@unocss/reset/tailwind.css',
    }),
    pagefind(),
  ],
  server: {
    host: true,
  },
})
