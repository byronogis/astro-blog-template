import { getCollection } from 'astro:content'
import dayjs from 'dayjs'
import config from 'virtual:astro-friday-config'

/**
 * Get a list of content entries from all collections which are defined in the config.
 */
export function getPostList(
  options: Omit<GetPostListOptions, 'parameters'> = {},
) {
  const {
    filters = {},
    sort = 'created-desc',
  } = options

  const tags = [filters.tags || []].flat()
  const series = [filters.series || []].flat()

  const tasks = Object.keys(config.collections).map(name => getCollection(name, (entry) => {
    const {
      data,
    } = entry

    /**
     * Filter by tags
     */
    if (tags.length && tags.every(tag => !data.tags.includes(tag))) {
      return false
    }

    /**
     * Filter by series
     */
    if (series.length && series.every(series_ => !data.series.includes(series_))) {
      return false
    }

    return true
  }))

  return Promise.all(tasks)
    .then(lists => lists.flat())
    .then(list => list.sort((a, b) => {
      if (sort === 'created-asc') {
        return dayjs(a.data.created).isAfter(dayjs(b.data.created)) ? 1 : -1
      }
      else if (sort === 'created-desc') {
        return dayjs(a.data.created).isBefore(dayjs(b.data.created)) ? 1 : -1
      }
      return 0
    }))
}

interface GetPostListOptions {
  filters?: {
    tags?: string | string[]
    series?: string | string[]
  }
  /**
   * Sort order for the posts.
   *
   * By default, posts are sorted by created date in descending order (newest first).
   *
   * - 'created-desc': Sort by created date in descending order (newest first).
   * - 'created-asc': Sort by created date in ascending order (oldest first).
   *
   * @default 'created-desc'
   */
  sort?: 'created-desc' | 'created-asc'
}
