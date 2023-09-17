import PictureItem from "../components/picture/picture";
import { Picture } from "../components/picture/types/types"

export default async function Page() {
  const pics: Picture[] = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
    .then((response) => response.json());

  return (
    <section className="px-2 grid gap-2 grid-cols-[repeat(auto-fit,minmax(400px,auto))]">
      {pics && pics.map(item => <PictureItem item={item} key={item.id} />)}
    </section>
  )
}
