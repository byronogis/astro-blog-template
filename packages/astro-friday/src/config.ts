import type { AstroConfig } from 'astro'
import type { glob } from 'astro/loaders'
import type { SetRequiredDeep } from 'type-fest'
import type { NavItem } from './types'
import path from 'node:path'
import { defu } from 'defu'

type GlobOptions = Parameters<typeof glob>[0]

export const defaultConfig: Config = {
  title: 'Friday',
  base: '.',
  author: {
    name: 'Anonymous',
  },
  copyright: {
    copyrightYears: `${new Date().getFullYear()}`,
    license: {
      type: 'CC BY-NC-SA 4.0',
      url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
    },
  },
  collections: {},
  navigations: [
    { label: 'Blog', link: '/post', icon: 'i-lucide:scroll-text' },
    { label: 'Tag', link: '/tag', icon: 'i-lucide:tag' },
    { label: 'Series', link: '/series', icon: 'i-lucide:square-library' },
  ],
}

export function resolveConfig(userConfig: Config, astroConfig: AstroConfig): ResolvedConfig {
  const mergedConfig = defu(userConfig, defaultConfig) as ResolvedConfig

  const {
    base: astroBase,
  } = astroConfig

  mergedConfig.base = path.join('/', astroBase, mergedConfig.base)

  return mergedConfig
}

export interface Config {
  title?: string
  description?: string
  base?: string
  author?: {
    name: string
    email?: string
    url?: string
    avatar?: string
  }
  copyright?: {
    copyrightYears?: string
    license?: {
      type: string
      url: string
    }
  }
  collections?: Record<string, {
    glob: GlobOptions
  }>
  navigations?: NavItem[]
}

export type ResolvedConfig = SetRequiredDeep<
  Config,
  | 'title'
  | 'base'
  | 'author'
  | 'author.name'
  | 'copyright'
  | 'copyright.copyrightYears'
  | 'copyright.license'
  | 'collections'
  | 'navigations'
>
