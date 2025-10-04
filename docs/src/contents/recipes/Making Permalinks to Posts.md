---
title: Making Permalinks to Posts
created: 2025-10-04
description: "A guide to setting up permalinks with Astro Friday."
---

If you want to use permalink for your posts, like `post/xxx`, **no matter which collection it belongs to and whether there are be nested in subfolders**, you can following steps below:

1. set `post.pathStyle` to `id`

```ts
// astro.config.ts
import friday from 'astro-friday'
import { defineConfig } from 'astro/config'

export default defineConfig({
  // ...
  integrations: [
    friday({
      // ...
      post: {
        pathStyle: 'id',
      },
    }),
  ],
})
```

2. add `slug` property to frontmatter of your posts

```md
---
title: "My Post"
created: 2025-10-04
description: "A guide to setting up permalinks with Astro Friday."
slug: "permalink-my-post"
---

Content...
```

Now, your post can be accessed via `post/permalink-my-post`.

More info about [slug](https://docs.astro.build/en/guides/content-collections/#defining-custom-ids).
