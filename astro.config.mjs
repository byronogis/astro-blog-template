import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'
import pagefind from 'astro-pagefind'
import robotsTxt from 'astro-robots-txt'
import sitemap from 'astro-sitemap'
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
    robotsTxt(),
    sitemap(),
  ],
  server: {
    host: true,
  },
  build: {
    format: 'file',
  },
})
