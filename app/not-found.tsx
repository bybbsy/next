import { ErrorItem } from "./components/error/error";

export function generateMetadata() {
  return {
    title: '404',
    description: 'Page not found (404)'
  }
}

export default function NotFound() {
  return (
    <ErrorItem
      message="Page not found!"
    />
  )
}
