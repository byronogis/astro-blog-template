---
layout: './src/layouts/Post.astro'
title: README of this template
publishedTime: 2023-10-05
tags: ["astro"]
author: Byron
---

# Astro Blog Template

This is a template for [Astro](https://astro.build) blog.
You can find source code in [here](https://github.com/byronogis/astro-blog-template).

**This template is still in progress，you can see [Demo in here](https://astro.ucatch.me)**

## Highlights

- use [astro](https://astro.build) to build static site
- [pnpm](https://pnpm.io) as package manager
- seo friendly by [astro-seo](https://github.com/jonasmerlin/astro-seo)
- sitemap by [astro-sitemap](https://github.com/alextim/astro-lib/tree/main/packages/astro-sitemap)
- robots.txt by [astro-robots-txt](https://github.com/alextim/astro-lib/tree/main/packages/astro-robots-txt)
- light & dark mode by [astro-color-scheme](https://github.com/surjithctly/astro-color-scheme)
- responsive design, mobile first, 768px | 1024px | 1280px breakpoints
- [unocss](https://github.com/unocss/unocss) for css, also [icon](https://unocss.dev/presets/icons) convenient
- i18n support by [astro-i18next](https://github.com/yassinedoghri/astro-i18next), you can switch language in footer after you add more language
- local search by [astro-pagefind](https://github.com/shishkin/astro-pagefind)
- toc friendly when ever you device is mobile or desktop
- **series** support, you can add series in frontmatter of post with `string[]` or `string`

## Usage

- generate repo from this template

- change to your information in 'src/setting'

- put your post in 'src/content/blog'

## Update with template when first time

### add template origin repo as upstream

```bash
git remote add origin-template git@github.com:byronogis/astro-blog-template.git
```

### fetch template

```bash
git fetch origin-template
```

### create a orphan template branch

```bash
git switch --orphan template
```

### pull first

```bash
git pull origin-template main
```

### set upstream to template

```bash
git branch -u origin-template/main template
```

### merge template to main

```bash
git switch main
git merge template --allow-unrelated-histories --squash
# maybe you need to fix conflict
git add .
git commit -m "merge template"
```

## Update with template when you have used this template

### Switch to template branch

```bash
git switch template
```

### pull

```bash
git pull
```

### merge template to main

```bash
git switch main
git merge template --allow-unrelated-histories --squash
# maybe you need to fix conflict
git add .
git commit -m "merge template"
```

## About fix conflict

In general, you just need to fix the conflict in 'src/setting'.
And other files, you can just use the template version.
