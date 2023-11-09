import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'
import pagefind from 'astro-pagefind'
import robotsTxt from 'astro-robots-txt'
import sitemap from 'astro-sitemap'
import astroI18next from 'astro-i18next'
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
    astroI18next(),
  ],
  server: {
    host: true,
  },
  build: {
    format: 'file',
  },
})
