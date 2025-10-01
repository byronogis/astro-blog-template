import { getPostList } from './post'

/**
 * Get a list of series from all content entries.
 */
export async function getSeriesList() {
  const postList = await getPostList()

  const seriesSet = postList.reduce((acc, cur) => {
    const {
      series = [],
    } = cur.data

    series.forEach(i => acc.add(i))

    return acc
  }, new Set<string>())

  return Array.from(seriesSet)
}
