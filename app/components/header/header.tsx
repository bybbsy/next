import Link from 'next/link';

export function Header() {
  return (
    <header className='bg-gray-200 py-2 px-4'>
      <nav>
        <ul>
          <ul>
            <Link className='hover:bg-gray-500' href='/posts'>Posts</Link>
          </ul>
        </ul>
      </nav>
    </header>
  )
}
