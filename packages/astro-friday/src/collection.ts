import type { ResolvedConfig } from './config'
import { z } from 'astro/zod'

export function getSchema(config: ResolvedConfig) {
  return z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string().optional(),
    created: z.date().default(new Date('1970-01-01')),
    modified: z.date().optional(),
    author: z.string().default(config.author.name),
    series: z.union([z.string(), z.array(z.string())]).optional().default([]).transform(val => Array.isArray(val) ? val : [val]),
    tags: z.union([z.string(), z.array(z.string())]).optional().default([]).transform(val => Array.isArray(val) ? val : [val]),
    draft: z.boolean().default(false),
    lang: z.string().optional().default('en'),
  })
}

export type Schema = z.infer<ReturnType<typeof getSchema>>
