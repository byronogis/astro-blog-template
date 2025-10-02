import type { APIRoute } from 'astro'
import type { CollectionEntry } from '../../types/content'
import { ImageResponse } from '@vercel/og'
import { getPostList } from '../../utils/content/post'

interface Props {
  entry: CollectionEntry
}

export async function getStaticPaths() {
  const entryList = await getPostList()

  return entryList.map(entry => ({
    params: {
      collection: entry.collection,
      slug: entry.id,
    },
    props: {
      entry,
    },
  }))
}

export const GET: APIRoute<Props> = async function GET({ props }) {
  const { entry } = props

  const html = {
    type: 'div',
    props: {
      children: [
        {
          type: 'span',
          props: {
            children: entry.data.title,
            tw: 'text-6xl font-bold',
          },
        },
        {
          span: 'span',
          props: {
            children: entry.data.author,
            tw: 'mt-4 text-3xl opacity-60',
          },
        },
      ],
      tw: 'w-full h-full flex flex-col gap-2 items-start justify-center p-20 bg-#f7f8e8',
    },
  }

  return new ImageResponse(html, {
    width: 1200,
    height: 630,
  })
}
