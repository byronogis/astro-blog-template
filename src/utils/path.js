import { site } from '~/setting'

export function getPath(id, path = '', params) {
  const reg = /^\/+|\/+$/g // remove all splash at the start and end of the string

  const siteBase = site.basePath.replace(reg, '')
  const idBase = (site.navigation.find(i => i.id === id)?.path ?? '').replace(reg, '')
  path = path.replace(reg, '')

  return ['', ...[siteBase, idBase, path].filter(Boolean)].join('/') + (params ? `?${new URLSearchParams(params).toString()}` : '')
}

export function goPath(id, path = '', params) {
  window.location.href = getPath(id, path, params)
}
