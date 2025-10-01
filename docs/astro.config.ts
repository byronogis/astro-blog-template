import Friday from 'astro-friday'
import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
  integrations: [
    UnoCSS(),
    Friday({
      base: '.',
      collections: {
        blog: {
          glob: {
            pattern: '**/*.md',
            base: './src/contents/blog',
          },
        },
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
