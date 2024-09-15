import { NextRequest, MiddlewareConfig, NextResponse } from 'next/server'
import { slug } from './lib/slug'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/blog/post')) {
    const splittedPath = request.nextUrl.pathname
      .split('/')
      .filter(s => s !== '')

    if (splittedPath.length === 3) {
      return NextResponse.rewrite(
        new URL(`/blog/post/${slug(splittedPath[2])}`, request.url)
      )
    }
  }

  return NextResponse.next()
}

export const config: MiddlewareConfig = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'
  ]
}
