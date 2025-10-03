import type { ResolvedConfig } from './config'
import { z } from 'astro/zod'
import dayjs from 'dayjs'

export function getSchema(config: ResolvedConfig) {
  return z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string().optional(),
    created: z.date().default(new Date('1970-01-01')).transform(val => dayjs(val).format('YYYY-MM-DDTHH:mm:ssZ')),
    modified: z.date().optional().transform(val => val ? dayjs(val).format('YYYY-MM-DDTHH:mm:ssZ') : undefined),
    author: z.string().default(config.author.name), // .transform(val => `${val}${config.author.email ? ` <${config.author.email}>` : ''}`),
    series: z.union([z.string(), z.array(z.string())]).optional().default([]).transform(val => Array.isArray(val) ? val : [val]),
    tags: z.union([z.string(), z.array(z.string())]).optional().default([]).transform(val => Array.isArray(val) ? val : [val]),
    draft: z.boolean().default(false),
    lang: z.string().optional().default('en'),
  })
}

export type Schema = z.infer<ReturnType<typeof getSchema>>
