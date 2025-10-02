declare module 'astro:content' {
  type _CollectionEntry = import('../types/content').CollectionEntry

  export function getCollection(
    collection: string,
    filter?: (entry: _CollectionEntry) => boolean,
  ): Promise<_CollectionEntry[]>
}
