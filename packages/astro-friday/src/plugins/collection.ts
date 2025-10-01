import type { ViteUserConfig } from 'astro'
import type { ResolvedConfig } from '../config'

export function vitePluginAstroFridayCollection(_resolvedConfig: ResolvedConfig) {
  const virtualModuleId = 'virtual:astro-friday-collection'
  const resolvedVirtualModuleId = `\0${virtualModuleId}`

  return {
    name: 'vite-plugin-astro-friday-collection',
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        return /* js */`
          import { defineCollection, z } from 'astro:content'
          import { glob } from 'astro/loaders'
          import { getSchema } from 'astro-friday'
          import config from 'virtual:astro-friday-config'

          export default function collection() {
            return Object.entries(config.collections).reduce((acc, [name, collection]) => {
              acc[name] = defineCollection({
                loader: glob(collection.glob),
                schema: getSchema(config),
              })
              return acc
            }, {})
          }
        `
      }
    },
  } satisfies NonNullable<ViteUserConfig['plugins']>[number]
}
