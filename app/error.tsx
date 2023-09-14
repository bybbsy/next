'use client'

import Link from "next/link";

export default function Error({ error, reset }: {error: Error, reset: () => void}) {
 return (
  <div>
    <span>Something went wrong</span>
    <p>
      <Link href='/'>Main page</Link>
    </p>
  </div>
 )
}
