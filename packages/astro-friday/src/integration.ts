/// <reference path="./types/shim.d.ts" />
/// <reference path="./types/virtual.d.ts" />

import type { AstroIntegration } from 'astro'
import type { Config } from './config'
import path from 'node:path'
import { resolveConfig } from './config'
import { vitePluginAstroFridayCollection } from './plugins/collection'
import { vitePluginAstroFridayConfig } from './plugins/config'

export function integration(userConfig: Config = {}): AstroIntegration {
  return {
    name: 'astro-friday',
    hooks: {
      'astro:config:setup': ({
        config,
        updateConfig,
        injectRoute,
      }) => {
        const resolvedConfig = resolveConfig(userConfig, config)

        console.warn('Friday setup hook', { userConfig, resolvedConfig } /* config */)

        updateConfig({
          vite: {
            plugins: [
              vitePluginAstroFridayConfig(resolvedConfig),
              vitePluginAstroFridayCollection(resolvedConfig),
            ],
          },
        })

        injectRoute({
          pattern: path.join(resolvedConfig.base, `post/[collection]`),
          entrypoint: `astro-friday/routes/post/index.astro`,
        })

        injectRoute({
          pattern: path.join(resolvedConfig.base, `post/[collection]/[...slug]`),
          entrypoint: `astro-friday/routes/post/[...slug].astro`,
        })

        injectRoute({
          pattern: path.join(resolvedConfig.base, `tag`),
          entrypoint: `astro-friday/routes/tag/index.astro`,
        })

        injectRoute({
          pattern: path.join(resolvedConfig.base, `tag/[...slug]`),
          entrypoint: `astro-friday/routes/tag/[...slug].astro`,
        })

        injectRoute({
          pattern: path.join(resolvedConfig.base, `series`),
          entrypoint: `astro-friday/routes/series/index.astro`,
        })

        injectRoute({
          pattern: path.join(resolvedConfig.base, `series/[...slug]`),
          entrypoint: `astro-friday/routes/series/[...slug].astro`,
        })
      },
    },
  }
}
