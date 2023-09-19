import Link from "next/link"
import { ErrorItemProps } from "./types/errorItemProps"

export function ErrorItem({ message, extraInfo }: ErrorItemProps) {
  return (
    <div className="flex flex-col items-center py-2">
      <h1 className="text-5xl font-bold">{message}</h1>
      {extraInfo && <span className="mt-10 text-xl">{extraInfo}</span>}
      <p className="mt-10">
        <Link href='/' className="text-xl underline underline-offset-8 text-gray-600 hover:text-gray-500">Go to main page</Link>
      </p>
    </div>
  )
}
