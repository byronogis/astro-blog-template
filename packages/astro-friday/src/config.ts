import type { AstroConfig } from 'astro'
import type { Props as SEO } from 'astro-seo'
import type { glob } from 'astro/loaders'
import type { SetRequiredDeep } from 'type-fest'
import type { NavItem } from './types'
import path from 'node:path'
import { defu } from 'defu'

type GlobOptions = Parameters<typeof glob>[0]

export function getDefaultConfig(config: Config = {}): Config {
  const base = config.base ?? '/'

  return {
    title: 'Friday',
    description: 'A content-focused Astro integration with tag and series support.',
    base,
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
    navigations: {
      'post': { label: 'Post', link: path.join(base, 'post'), icon: 'i-lucide:scroll-text', order: 100 },
      'tag': { label: 'Tag', link: path.join(base, 'tag'), icon: 'i-lucide:tag', order: 200 },
      'series': { label: 'Series', link: path.join(base, 'series'), icon: 'i-lucide:square-library', order: 300 },
      'theme-toggle': { label: 'Theme', link: 'javascript:;', order: 1000 },
    },
    inject404: true,
  }
}

export function resolveConfig(userConfig: Config, astroConfig: AstroConfig): ResolvedConfig {
  const base = userConfig.base ?? '/'
  const baseFull = path.join('/', astroConfig.base, base)

  const mergedConfig = defu(
    {
      base,
      baseFull,
    },
    userConfig,
    getDefaultConfig({
      ...userConfig,
      base: baseFull,
    }),
  ) as ResolvedConfig

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
  navigations?: Partial<Record<'post' | 'tag' | 'series' | 'theme-toggle', Partial<NavItem>>> | {
    [key: string]: NavItem
  }
  /**
   * SEO configuration for `astro-seo` integration
   *
   * @see https://github.com/jonasmerlin/astro-seo?tab=readme-ov-file#supported-props
   */
  seo?: SEO
  /**
   * Inject a 404 page when one page is not found.
   *
   * @default true
   */
  inject404?: boolean
  logo?: {
    url?: string
  }
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
  | `navigations.${string}`
> & {
  /**
   * The full base path, including Astro's base.
   */
  baseFull: string
}
