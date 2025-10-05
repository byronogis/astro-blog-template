import type { ViteUserConfig } from 'astro'
import type { ResolvedConfig } from '../config'

export function vitePluginAstroFridayImports(resolvedConfig: ResolvedConfig) {
  const virtualModuleId = 'virtual:astro-friday-imports'
  const resolvedVirtualModuleId = `\0${virtualModuleId}`

  return {
    name: 'vite-plugin-astro-friday-imports',
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        return /* js */`
          import { ImageResponse } from ${JSON.stringify(resolvedConfig.imports['@vercel/og'])}

          export default {
            ['@vercel/og']: { ImageResponse },
          }
        `
      }
    },
  } satisfies NonNullable<ViteUserConfig['plugins']>[number]
}
