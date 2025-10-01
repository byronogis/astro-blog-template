import path from 'node:path'
import config from 'virtual:astro-friday-config'

export function getPath<T extends 'post' | 'tag' | 'series'>(
  type: T,
  params: {
    post: string[]
    tag: string[]
    series: string[]
  }[T] = [],
) {
  const base = config.base
  const prefix = {
    post: 'post',
    tag: 'tag',
    series: 'series',
  }[type]

  return path.join(base, prefix, ...params)
}
