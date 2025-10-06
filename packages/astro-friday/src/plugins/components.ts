import type { ViteUserConfig } from 'astro'
import type { ResolvedConfig } from '../config'

export function vitePluginAstroFridayComponents(resolvedConfig: ResolvedConfig) {
  const virtualModuleId = 'virtual:astro-friday-components'
  const resolvedVirtualModuleId = `\0${virtualModuleId}`

  return {
    name: 'vite-plugin-astro-friday-components',
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        return /* js */`${Object.entries(resolvedConfig.components).map(([key, value]) => {
          return `import ${key} from ${JSON.stringify(value)}`
        }).filter(Boolean).join('\n')}

        export default {
          ${Object.keys(resolvedConfig.components).join(', ')}
        }
        `
      }
    },
  } satisfies NonNullable<ViteUserConfig['plugins']>[number]
}
