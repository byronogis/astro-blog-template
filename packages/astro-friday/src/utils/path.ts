import path from 'node:path'
import config from 'virtual:astro-friday-config'

type PathType = 'home' | 'post' | 'tag' | 'series' | 'og'

export function getPath<T extends PathType>(
  type: T,
  params: string[] = [],
  options: {
    /**
     * If true, return the full URL including the base. Otherwise, return the path relative to the base.
     *
     * If a string is provided, it will be used as the base instead of the `window.location.origin`.
     */
    host?: boolean | string
  } = {},
) {
  const {
    host,
  } = options

  const _host = host === true ? window.location.origin : host

  const base = config.base
  const prefix = {
    home: '',
    post: 'post',
    tag: 'tag',
    series: 'series',
    og: 'og',
  }[type]

  const _path = path.join(base, prefix, ...params)
  return _host ? new URL(_path, _host).href : _path
}
