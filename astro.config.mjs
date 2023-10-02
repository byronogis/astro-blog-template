import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'
import { site } from './src/setting'

// https://astro.build/config
export default defineConfig({
  base: site.basePath,
  integrations: [
    UnoCSS({
      injectReset: '@unocss/reset/tailwind.css',
    }),
  ],
  server: {
    host: true,
  },
})
