import { localizePath } from 'astro-i18next'
import { site } from '~/setting'

export function getPath(id, path = '', params) {
  const query = params ? `?${new URLSearchParams(params).toString()}` : ''

  const reg = /^\/+|\/+$/g // remove all splash at the start and end of the string

  if (id === 'home') {
    return localizePath(`/${query}`)
  }

  const idBase = (site.navigation.find(i => i.id === id)?.path ?? '').replace(reg, '')
  path = path.replace(reg, '')

  return localizePath(`/${idBase}/${path}${query}`)
}

export function goPath(id, path = '', params) {
  window.location.href = getPath(id, path, params)
}
