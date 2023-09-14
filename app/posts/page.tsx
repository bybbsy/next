import Link from 'next/link';
import { Post } from './types/post';
import { shortenString } from '@/app/utils/shortenString';

export default async function Page() {
  const posts: Post[] = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data: Post[]) =>
      data.map(
        item => ({
          ...item,
          body: shortenString(item.body, 15),
        })));

  return (
    <div className="px-4 py-2">
      <section className="flex gap-2 flex-wrap w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        {posts && posts.map(item => (
          <article className='flex flex-col px-3 py-3 w-96 h-15 border rounded border-gray-500 bg-gray-250'>
            <p className='flex gap-2'>
              <span className=''>#{item.id}</span>
              <Link className='font-bold' href={'/posts/' + item.id}>
                {item.title}
              </Link>
            </p>
            <p>{item.body}</p>
          </article>
        ))}
      </section>
    </div>
  )
}
