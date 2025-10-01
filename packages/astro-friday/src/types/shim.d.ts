declare module 'astro:content' {
  interface _CollectionEntry {
    id: string
    body?: string
    collection: string
    data: import('../collection').Schema
    rendered?: import('../collection').RenderedContent
    filePath?: string
  }

  export function getCollection(
    collection: string,
    filter?: (entry: _CollectionEntry) => boolean,
  ): Promise<_CollectionEntry[]>
}
