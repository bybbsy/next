'use client'
import { Post } from "@/app/posts/types/post";
import Link from "next/link";

type PostItemProps = {
  item: Post,
}

export default function PostItem({ item }: PostItemProps) {
  const handler = () => console.log(localStorage.getItem(''));

  return (
    <article className='flex flex-col px-3 py-3 w-96 h-15 border rounded border-gray-500 bg-gray-250' onClick={handler}>
      <p className='flex gap-2'>
        <span className=''>#{item.id}</span>
        <Link className='font-bold' href={'/posts/' + item.id}>
          {item.title}
        </Link>
      </p>
      <p>{item.body}</p>
    </article>
  )
}
