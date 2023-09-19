import { Post } from '@/app/components/post/types/post'
import { filterFetchedData } from '@/app/utils/filterFetchData'
import { shortenString } from '@/app/utils/shortenString'
import { NextResponse } from 'next/server'

export async function GET (request: Request) {

  const reqUrl = new URL(request.url)
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data: Post[] = await res.json()
  const filtered = filterFetchedData(data, 'title', reqUrl.searchParams)
  const result = filtered.map(item => ({
    ...item,
    body: shortenString(item.body, 15)
  }))
  return NextResponse.json(result)
}
