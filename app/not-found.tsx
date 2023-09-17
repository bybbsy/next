import Link from "next/link";

export function generateMetadata() {
  return {
    title: 'Page not found',
    description: 'Page not found'
  }
}

export default function NotFound() {
  return (
    <div className="">
      <span>Page not found!</span>
      <p>
        <Link href='/'>Main page</Link>
      </p>
    </div>
  )
}
