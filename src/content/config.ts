import { defineCollection, z } from 'astro:content'

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }).optional(),
    publishedTime: z.date().optional(),
    modifiedTime: z.date().optional(),
    author: z.string().optional(),
    section: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
})

export const collections = {
  blog: blogCollection,
}
