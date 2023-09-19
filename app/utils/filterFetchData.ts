import { SearchParams } from '../posts/types/searchParams'

export function filterFetchedData (
  data: any[],
  field: string,
  searchParams: URLSearchParams
) {
  return data.filter(item =>
    searchParams.has(field) ? item?.[field].includes(searchParams.get(field)) : true
  )
}
