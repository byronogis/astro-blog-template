import path from 'node:path'
import config from 'virtual:astro-friday-config'

type PathType = 'home' | 'post' | 'tag' | 'series'

export function getPath<T extends PathType>(
  type: T,
  params: string[] = [],
) {
  const base = config.base
  const prefix = {
    home: '',
    post: 'post',
    tag: 'tag',
    series: 'series',
  }[type]

  return path.join(base, prefix, ...params)
}
