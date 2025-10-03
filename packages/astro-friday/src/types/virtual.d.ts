declare module 'virtual:astro-friday-collection' {
  const Collection: import('astro/content/config').CollectionConfig
  export default function (): Record<string, Collection>
}

declare module 'virtual:astro-friday-config' {
  const config: import('../config').ResolvedConfig
  export default config
}

declare module 'virtual:astro-friday-unocss-extract' {
  const css: string[]
  export default css
}
