import { NextRequest, NextResponse } from 'next/server'
import { AUTHENTICATED, LOGGED_IN } from '@/utilities/authConstants'
import { decrypt } from '@/utilities/encryption'

export default async function middleware(request: NextRequest) {
  
  // Protect routes for authenticated users
  
  if (request.nextUrl.pathname.startsWith('/system')) {
    if (decrypt(request.cookies.get(AUTHENTICATED)?.value) !== LOGGED_IN) {
      return NextResponse.redirect(new URL('/', request.url))
    }
    return NextResponse.next()
  } else if (request.nextUrl.pathname.startsWith('/')) {
    if (request.cookies.get(AUTHENTICATED) && decrypt(request.cookies.get(AUTHENTICATED)?.value) === LOGGED_IN) {
      return NextResponse.redirect(new URL('/system/home', request.url))
    }
    return NextResponse.next()
  }
}

export const config = {
  matcher: [
    '/system/:path*',
    '/'
  ]
}
