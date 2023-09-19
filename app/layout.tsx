import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/app/components/header/header';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next.js Application',
  description: 'React, Typescript',
  keywords: 'React, Typescript, Next.js, Web-development, Frontend',
  authors: [{
    name: 'Bybbsy',
    url: 'https://github.com/bybbsy'
  }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
