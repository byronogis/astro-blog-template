import { defineCollection, z } from 'astro:content'
import { site } from '~/setting'

const blogCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.object({
      alt: z.string(),
      url: z.string().startsWith('/') // use of /public
        .or(z.string().startsWith('http')) // use of external image
        .or(image().transform(val => val.src)) // use of relative image and support for astro alias
        .catch(() => '/placeholder-cover.jpg'),
    }).default({ url: '/placeholder-cover.jpg', alt: 'placeholder-cover' }),
    publishedTime: z.date().default(new Date('1970-01-01')),
    modifiedTime: z.date().default(new Date('1970-01-01')),
    author: z.string().default(site.author),
    section: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
})

export const collections = {
  blog: blogCollection,
}
