import { Post } from '../components/post/types/post';
import PostItem from '../components/post/post';
import { Search } from '../components/search/search';

export function generateMetadata() {
  return {
    title: 'Posts',
    description: 'Posts page for https://jsonplaceholder.typicode.com/posts'
  }
}

export default async function Page({ searchParams }: { searchParams: URLSearchParams }) {
  const url = 'http://localhost:3000/api/posts' + '?' + new URLSearchParams(searchParams);
  const posts: Post[] = await fetch(url)
    .then(data => data.json())

  return (
    <div className="px-4 py-2 w-full">
      <section className='w-full flex justify-center my-2'>
        <Search field='title' />
      </section>
      <section className="flex gap-2 flex-wrap justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        {posts && posts.map(item =>
          <PostItem
            item={item}
            key={item.id}
          />)}
      </section>
    </div>
  )
}
