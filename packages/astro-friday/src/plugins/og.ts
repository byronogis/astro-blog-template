import type { ViteUserConfig } from 'astro'
import type { ResolvedConfig } from '../config'

export function vitePluginAstroFridayOG(resolvedConfig: ResolvedConfig) {
  const virtualModuleId = 'virtual:astro-friday-og'
  const resolvedVirtualModuleId = `\0${virtualModuleId}`

  return {
    name: 'vite-plugin-astro-friday-og',
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        return /* js */`export { ImageResponse } from ${JSON.stringify(resolvedConfig.imports['@vercel/og'])}
        `
      }
    },
  } satisfies NonNullable<ViteUserConfig['plugins']>[number]
}
