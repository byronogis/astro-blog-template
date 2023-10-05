---
layout: '../layouts/Post.astro'
title: README of this template
publishedTime: 2023-10-05
tags: ["astro"]
---

# Astro Blog Template

This is a template for [Astro](https://astro.build) blog.

**This template is still in progress，you can see [Demo in here](https://astro.ucatch.me)**

## Highlights

- use [astro](https://astro.build) to build static site
- [pnpm](https://pnpm.io) as package manager
- seo friendly
- light & dark mode
- responsive design, mobile first, 768px | 1024px | 1280px breakpoints
- [unocss](https://github.com/unocss/unocss) for css, also [icon](https://unocss.dev/presets/icons) convenient

## Usage

- generate repo from this template

- change to your information in 'src/setting'

- put your post in 'src/content/blog'

## Update with template

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

### set upstream to template

```bash
git push -u origin-template/main template
```

### pull template

```bash
# switch to template branch first
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
