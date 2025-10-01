import { getPostList } from './post'

/**
 * Get a list of tags from all content entries.
 */
export async function getTagList() {
  const postList = await getPostList()

  const tagSet = postList.reduce((acc, cur) => {
    const {
      tags = [],
    } = cur.data

    tags.forEach(i => acc.add(i))

    return acc
  }, new Set<string>())

  return Array.from(tagSet)
}
