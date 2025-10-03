/// <reference path="./types/shim.d.ts" />
/// <reference path="./types/virtual.d.ts" />

import type { AstroIntegration } from 'astro'
import type { Config } from './config'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { resolveConfig } from './config'
import { unocss } from './integrations/unocss'
import { vitePluginAstroFridayCollection } from './plugins/collection'
import { vitePluginAstroFridayConfig } from './plugins/config'
import { vitePluginAstroFridayUnoCSSExtract } from './plugins/css'

const _dirname = path.dirname(fileURLToPath(import.meta.url))

export function integration(userConfig: Config = {}): AstroIntegration {
  return {
    name: 'astro-friday',
    hooks: {
      'astro:config:setup': ({
        command,
        config,
        updateConfig,
        injectRoute,
        addWatchFile,
      }) => {
        const resolvedConfig = resolveConfig(userConfig, config)

        if (command === 'dev') {
          addWatchFile(path.resolve(_dirname, './collection.ts'))
          addWatchFile(path.resolve(_dirname, './config.ts'))
          addWatchFile(path.resolve(_dirname, './integration.ts'))
          addWatchFile(path.resolve(_dirname, './integrations/unocss/uno.config.ts'))
        }

        updateConfig({
          integrations: [
            ...unocss(config),
          ],
          vite: {
            plugins: [
              vitePluginAstroFridayConfig(resolvedConfig),
              vitePluginAstroFridayCollection(resolvedConfig),
              vitePluginAstroFridayUnoCSSExtract(resolvedConfig),
            ],
          },
        })

        injectRoute({
          pattern: path.join(resolvedConfig.base, `.`),
          entrypoint: `astro-friday/routes/index.astro`,
        })

        injectRoute({
          pattern: path.join(resolvedConfig.base, `post`),
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

        injectRoute({
          pattern: path.join(resolvedConfig.base, `og/[collection]/[...slug]`),
          entrypoint: `astro-friday/routes/og/[...slug].ts`,
        })
      },
    },
  }
}
