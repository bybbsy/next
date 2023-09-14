import Link from "next/link";



export default function NotFound({}) {
  return (
    <div className="">
      <span>Page not found!</span>
    <p>
      <Link href='/'>Main page</Link>
    </p>
    </div>
  )
}
