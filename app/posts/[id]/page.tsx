import { Post } from '@/app/components/post/types/types';
import { PostComment } from '../types/comment';

export default async function PostById({ params }: { params: { id: number } }) {
  const post: Post = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    .then((response) => response.json())

  const comments: PostComment[] = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`)
    .then((response) => response.json())

  return (
    <div className="flex flex-col px-4 py-5">
      <article>
        <p className='text-xl'>#{post.id}</p>
        <h1 className='font-bold text-lg'>{post.title}</h1>
        <p>{post.body}</p>
      </article>
      <section>
        <div className='mt-10'>
          <p className='font-bold'>Comments</p>
        </div>
        <ul>
          {comments.map((item) => (
            <li className='my-5 pl-2 border-l border-gray-400'>
              <p className='text-sm'>{item.email}</p>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
