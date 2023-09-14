import {Navigation} from '@/app/components/navigation/navigation';

export function Header() {
  const navLinks = [
    {href: '/', name: 'Main'},
    {href: '/posts', name: 'Posts'},
    {href: '/pictures', name: 'Pictures'},
    {href: '/not-found', name: 'Not-found'},
  ];

  return (
    <header className='bg-gray-200 py-2 px-4'>
      <Navigation
        navLinks={navLinks}
      />
    </header>
  )
}
