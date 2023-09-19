import PictureItem from "../components/picture/picture";
import { Picture } from "../components/picture/types/picture"
import { Search } from "../components/search/search";
import { SearchParams } from "../posts/types/searchParams";
import { filterFetchedData } from "../utils/filterFetchData";

export default async function Page({searchParams}: {searchParams: SearchParams}) {
  const filterField = 'title';

  const pics: Picture[] = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
    .then((response) => response.json())
    .then(data => filterFetchedData(data, filterField, searchParams))

  return (
    <div className="px-4 py-2 w-full">
      <section className='w-full flex justify-center my-2'>
        <Search field={filterField} />
      </section>
      <section className="px-2 grid gap-2 grid-cols-[repeat(auto-fit,minmax(400px,auto))]">
        {pics && pics.map(item => <PictureItem item={item} key={item.id} />)}
      </section>
    </div>

  )
}
