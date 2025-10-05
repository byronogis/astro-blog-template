---
title: Custom OG Middleware Handler
created: 2025-10-04

---

Friday internally uses [`@vercel/og`](https://vercel.com/docs/og-image-generation) as the OG image generation tool.

When you need to deploy to environments other than Node.js, for better compatibility, it's recommended to use the corresponding runtime's OG generation middleware.

Taking **Cloudflare** Worker as an example, you can do this (for how to [deploy Astro to Cloudflare](https://docs.astro.build/en/guides/deploy/cloudflare/), we won't elaborate here):

```bash
npm i @cloudflare/pages-plugin-vercel-og
```

```ts
// astro.config.ts
import friday from 'astro-friday'
import { defineConfig } from 'astro/config'

export default defineConfig({
  integrations: [
    friday({
      // ...
      imports: {
        '@vercel/og': '@cloudflare/pages-plugin-vercel-og/api',
      },
    }),
  ],
})
```
