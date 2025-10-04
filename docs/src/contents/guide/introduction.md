---
title: Introduction
created: 2025-10-04
tags: ["astro"]
author: Byron
series:
  - guide
---

# Astro Friday

[![npm version](https://img.shields.io/npm/v/astro-friday)](https://npmjs.com/package/astro-friday)
[![npm downloads](https://img.shields.io/npm/dm/astro-friday)](https://npm.chart.dev/astro-friday)
[![bundle size](https://img.shields.io/bundlephobia/minzip/astro-friday)](https://bundlephobia.com/package/astro-friday)
[![codecov](https://img.shields.io/codecov/c/gh/byronogis/astro-friday)](https://codecov.io/gh/byronogis/astro-friday)
[![license](https://img.shields.io/github/license/byronogis/astro-friday)](https://github.com/byronogis/astro-friday/blob/main/LICENSE)
[![JSDocs][jsdocs-src]][jsdocs-href]

A content-focused [Astro](https://astro.build) integration with tag and series support.

You can find source code in [here](https://github.com/byronogis/astro-friday).

## Highlights

- concise config and easy to use, just install and set your content collections
- seo friendly by [astro-seo](https://github.com/jonasmerlin/astro-seo)
- light & dark mode by [astro-color-scheme](https://github.com/surjithctly/astro-color-scheme)
- responsive design, mobile and desktop friendly
- [unocss](https://github.com/unocss/unocss) for css, also [icon](https://unocss.dev/presets/icons) convenient

## Usage

- install `astro-friday` package

```bash
npm install astro-friday
# or
pnpm add astro-friday
# or
yarn add astro-friday
```

- add `astro-friday` integration in your `astro.config.*`

```ts
import friday from 'astro-friday'
import { defineConfig } from 'astro/config'

export default defineConfig({
  integrations: [
    friday({
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
})
```

- import collections in `src/content.config.ts` file

```ts
import collection from 'virtual:astro-friday-collection'

export const collections = collection()
```

That's it! You can start your dev server and see the result.

More settings can be found in [here](./configuration).

## Roadmap

- [ ] sitemap
- [ ] robots.txt
- [ ] search
- [ ] toc
- [ ] keywords frontmatter field and seo binding
- etc.

## Credits

- Page Style is inspired by [antfu.me](https://antfu.me).

---

[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-1fa669
[jsdocs-href]: https://www.jsdocs.io/package/astro-friday
