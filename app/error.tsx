'use client'
import { ErrorItem } from "./components/error/error";

export default function Error({ error }: { error: Error }) {
  return (
    <ErrorItem
      message={`${error.name} ${error.message}` || 'Something went wrong'}
      extraInfo={error.stack || ''}
    />
  )
}
