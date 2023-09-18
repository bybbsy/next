import Image from "next/image";
import { Picture } from "./types/types";

type PictureItemProps = {
  item: Picture,
}

export default function PictureItem({ item }: PictureItemProps) {
  return (
    <picture>
      <Image
        src={item.url}
        alt={item.title}
        width={500}
        height={500}
        title={item.title}
        quality={85}
        className='rounded-md'
      />
      <p className="text-center italic text-sm">{item.title}</p>
    </picture>
  )
}
