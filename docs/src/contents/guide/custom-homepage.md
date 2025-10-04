---
title: Custom Homepage
tags:
  - astro
  - markdown
  - guide
  - astro-friday
series:
  - guide
created: 2025-10-04
description: A guide to creating a custom homepage with Astro Friday.

---

Homepage will refer to posts list by default.

To create a custom homepage, follow these steps:

1. Dusable the default homepage

In your friday configuration in `astro.config.*`, set `pages.home` to `false`:

```ts
export default defineConfig({
  integrations: [
    Friday({
      // other options...
      pages: {
        home: false,
      },
    }),
  ],
})
```

2. Add a index page in `src/pages/index.astro`

Maybe you want to use layout from friday, you can do like this:

```astro
---
import DefaultLayout from 'astro-friday/layouts/Default.astro'
---

<DefaultLayout>
  {/* Your custom homepage content here */}
</DefaultLayout>
```
