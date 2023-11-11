import { getCollection } from 'astro:content'

export async function getPostEntries(content: 'blog', options?: { sort: boolean }) {
  const optionsMerged = {
    sort: false,
    ...options,
  }

  const entries = await getCollection(content)

  if (optionsMerged.sort) {
    entries.sort((a, b) => {
      const aTime = new Date(a.data.modifiedTime ?? a.data.publishedTime).getTime()
      const bTime = new Date(b.data.modifiedTime ?? b.data.publishedTime).getTime()
      return bTime - aTime
    })
  }

  return entries
}

export function getPostTagsMap(postEntries): Record<string, any[]> {
  return postEntries.reduce((tags, entry) => {
    const entryTags = entry.data.tags
    if (!entryTags)
      return tags

    entryTags.forEach((tag: string) => {
      if (!tags[tag]) {
        tags[tag] = []
      }

      tags[tag].push(entry)
    })

    return tags
  }, {} as Record<string, any[]>)
}

export function getPostSeriesMap(postEntries, options?: { include: string | string[] | undefined }): Record<string, any[]> {
  const optionsMerged = {
    include: undefined,
    ...options,
  }

  return postEntries.reduce((series, entry) => {
    const seriesName = entry.data.series
    if (!seriesName)
      return series

    const setSeries = (name) => {
      if (optionsMerged.include && !optionsMerged.include.includes(name)) {
        return
      }

      if (!series[name]) {
        series[name] = []
      }

      series[name].push(entry)
    }

    if (Array.isArray(seriesName)) { // array<string> or string
      seriesName.forEach(setSeries)
    }
    else {
      setSeries(seriesName)
    }

    return series
  }, {} as Record<string, any[]>)
}
