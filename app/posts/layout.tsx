export default function PostsLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex min-h-screen">
      {children}
    </main>
  )
}
