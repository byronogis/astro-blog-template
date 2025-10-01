import { getCollection } from 'astro:content'
import config from 'virtual:astro-friday-config'

/**
 * Get a list of content entries from all collections which are defined in the config.
 */
export function getPostList(
  options: Omit<GetPostListOptions, 'parameters'> = {},
) {
  const {
    filters = {},
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

  return Promise.all(tasks).then(lists => lists.flat())
}

interface GetPostListOptions {
  filters?: {
    tags?: string | string[]
    series?: string | string[]
  }
  sort?: 'desc' | 'asc' | false
}
