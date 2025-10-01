import type { ResolvedConfig } from './config'
import { z } from 'astro/zod'

export function getSchema(config: ResolvedConfig) {
  return z.object({
    title: z.string(),
    description: z.string().optional(),
    publishedTime: z.date().default(new Date('1970-01-01')),
    modifiedTime: z.date().optional(),
    author: z.string().default(config.author.name),
    series: z.union([z.string(), z.array(z.string())]).optional().default([]).transform(val => Array.isArray(val) ? val : [val]),
    tags: z.union([z.string(), z.array(z.string())]).optional().default([]).transform(val => Array.isArray(val) ? val : [val]),
  })
}

export type Schema = z.infer<ReturnType<typeof getSchema>>
