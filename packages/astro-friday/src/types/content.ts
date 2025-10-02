/**
 * Due to the limitation of `astro:content` types in integration packages,
 * we need to define some types locally.
 */

export interface CollectionEntry {
  id: string
  body?: string
  collection: string
  data: import('../collection').Schema
  rendered?: import('astro:content').RenderedContent
  filePath?: string
}
