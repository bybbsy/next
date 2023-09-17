import Image from "next/image";
import { Picture } from "./types/types";

type PictureProps = {
  item: Picture,
}

export default function PictureItem({ item }: PictureProps) {
  return (
    <Image
    style={{ position: 'relative', height: '400px' }}
      src={ item.url}
      alt={item.title}
      width={500}
      height={500}
      title={item.title}
      quality={85}
      />
  )
}
