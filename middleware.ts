import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: '/pictures/:path*'
}

export function middleware (request: NextRequest) {
  const cookie = request.cookies.get('next-cookie')

  if (cookie?.value === '1') {
    return NextResponse.next()
  }

  const redirectUrl = new URL('/unauthorized', request.url)
  return NextResponse.redirect(redirectUrl)
}
