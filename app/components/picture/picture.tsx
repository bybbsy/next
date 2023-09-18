import Image from "next/image";
import { Picture } from "./types/types";

type PictureItemProps = {
  item: Picture,
}

export default function PictureItem({ item }: PictureItemProps) {
  return (
    <Image
      src={item.url}
      alt={item.title}
      width={500}
      height={500}
      title={item.title}
      quality={85}
    />
  )
}
