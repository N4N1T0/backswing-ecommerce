import { auth } from '@/auth'

export default auth((req) => {
  const { pathname } = req.nextUrl
  const isLoggedIn = !(req.auth == null)

  if (pathname === '/perfil') {
    if (!isLoggedIn) {
      const url = req.url.replace(req.nextUrl.pathname, '/')
      return Response.redirect(url)
    }
  }
})

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
