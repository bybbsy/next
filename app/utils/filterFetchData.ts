import { SearchParams } from '../posts/types/searchParams'

export function filterFetchedData (
  data: any[],
  field: string,
  searchParams: SearchParams
) {
  return data.filter(item =>
    searchParams[field] ? item?.[field].includes(searchParams[field]) : true
  )
}
