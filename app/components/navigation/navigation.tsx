import { NavLinkItem } from "../types/navigationLink";
import Link from 'next/link';

export function Navigation({ navLinks }: { navLinks: NavLinkItem[] }) {
  return (
    <nav>
      <ul className='flex'>
        {navLinks.map(link => (
          <li className='px-4'>
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
