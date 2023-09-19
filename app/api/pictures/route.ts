import { Picture } from '@/app/components/picture/types/picture'
import { filterFetchedData } from '@/app/utils/filterFetchData'
import { NextResponse } from 'next/server'

export async function GET (request: Request) {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/photos'
  )
  const reqUrl = new URL(request.url)

  const data: Picture[] = await res.json()
  const filtered = filterFetchedData(data, 'title', reqUrl.searchParams)
  return NextResponse.json(filtered)
}
