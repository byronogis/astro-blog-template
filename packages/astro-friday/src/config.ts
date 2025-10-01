import type { AstroConfig } from 'astro'
import type { glob } from 'astro/loaders'
import type { SetRequiredDeep } from 'type-fest'
import path from 'node:path'
import { defu } from 'defu'

type GlobOptions = Parameters<typeof glob>[0]

export const defaultConfig: Config = {
  title: 'Friday',
  base: '.',
  author: {
    name: 'Anonymous',
  },
  collections: {},
}

export function resolveConfig(userConfig: Config, astroConfig: AstroConfig): ResolvedConfig {
  const mergedConfig = defu(userConfig, defaultConfig) as ResolvedConfig

  const {
    base: astroBase,
  } = astroConfig

  mergedConfig.base = path.join('/', astroBase, mergedConfig.base)

  return mergedConfig
}

export function defineConfig(config: Config) {
  return config
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
  collections?: Record<string, {
    glob: GlobOptions
  }>
}

export type ResolvedConfig = SetRequiredDeep<
  Config,
  | 'title'
  | 'base'
  | 'author'
  | 'author.name'
  | 'collections'
>
