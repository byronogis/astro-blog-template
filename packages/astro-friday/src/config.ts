import type { AstroConfig, InjectedRoute } from 'astro'
import type { Props as SEO } from 'astro-seo'
import type { glob } from 'astro/loaders'
import type { SetRequiredDeep } from 'type-fest'
import type { ArtConfig, NavItem } from './types'
import path from 'node:path'
import { defu } from 'defu'

type GlobOptions = Parameters<typeof glob>[0]

export function getDefaultConfig(config: Config & {
  baseFull?: string
} = {}): Config {
  const base = config.base ?? '/'
  const baseFull = config.baseFull ?? base

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
    post: {
      pathStyle: 'collection/id',
    },
    collections: {},
    navigations: {
      'post': { label: 'Post', link: path.join(baseFull, 'post'), icon: 'i-lucide:scroll-text', order: 100 },
      'tag': { label: 'Tag', link: path.join(baseFull, 'tag'), icon: 'i-lucide:tag', order: 200 },
      'series': { label: 'Series', link: path.join(baseFull, 'series'), icon: 'i-lucide:square-library', order: 300 },
      'theme-toggle': { label: 'Theme', link: 'javascript:;', order: 1000 },
    },
    pages: {
      404: {
        pattern: path.join(base, `404`),
        entrypoint: 'astro-friday/routes/404.astro',
      },
      home: {
        pattern: path.join(base, ``),
        entrypoint: `astro-friday/routes/collection/index.astro`,
      },
    },
    art: {
      dots: { weight: 1 },
      plum: { weight: 1 },
    },
    imports: {
      '@vercel/og': '@vercel/og',
    },
    /**
     * Default components mapping, can be overridden by user config
     *
     * @example
     * ```ts
     * components: {
     *   NavbarBrand: 'src/components/YourBrand.astro',
     * }
     * ```
     */
    components: {
      NavbarBrand: 'astro-friday/components/Opt/NavbarBrand.astro',
    },
  }
}

export function resolveConfig(userConfig: Config, astroConfig: AstroConfig, isDev: boolean): ResolvedConfig {
  const base = userConfig.base ?? '/'
  const baseFull = path.join('/', astroConfig.base, base)

  const defaultConfig = getDefaultConfig({
    ...userConfig,
    base,
    baseFull,
  })

  // use default config for development to avoid issues with Vercel OG package
  isDev && delete userConfig.imports?.['@vercel/og']

  const mergedConfig = defu(
    {
      base,
      baseFull,
    },
    userConfig,
    defaultConfig,
  ) as ResolvedConfig

  return mergedConfig
}

export interface Config {
  title?: string
  description?: string
  base?: string
  author?: {
    name?: string
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
  post?: {
    /**
     * Path style for post routes
     *
     * - `collection/id`: `/post/collection/id`, e.g. `/post/blog/my-first-post`
     * - `id`: `/post/id`, e.g. `/post/my-first-post`
     *
     * @default 'collection/id'
     */
    pathStyle?: 'collection/id' | 'id'
  }
  collections?: Record<string, {
    label?: string
    glob: GlobOptions
  }>
  navigations?: Partial<Record<'post' | 'tag' | 'series' | 'theme-toggle', Partial<NavItem>>> | {
    [key: string]: NavItem
  }
  pages?: Partial<Record<'home' | '404', InjectedRoute | false>>
  /**
   * SEO configuration for `astro-seo` integration
   *
   * @see https://github.com/jonasmerlin/astro-seo?tab=readme-ov-file#supported-props
   */
  seo?: SEO
  logo?: {
    url?: string
  }
  art?: Partial<Record<'dots' | 'plum', Partial<ArtConfig>>>
  imports?: {
    /**
     * @default '@vercel/og'
     */
    '@vercel/og'?: string
  }
  components?: {
    NavbarBrand?: string
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
  | 'post'
  | 'post.pathStyle'
  | 'collections'
  | 'navigations'
  | `navigations.${string}`
  | 'pages'
  | 'pages.404'
  | 'pages.home'
  | 'art'
  | 'art.dots'
  | 'art.plum'
  | 'art.dots.weight'
  | 'art.plum.weight'
  | 'imports'
  | 'imports.@vercel/og'
  | 'components'
  | 'components.NavbarBrand'
> & {
  /**
   * The full base path, including Astro's base.
   */
  baseFull: string
}
