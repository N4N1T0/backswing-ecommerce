// Next.Auth Imports
import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [Google],
	callbacks: {
		session({ session, token }) {
			if (token.sub != null && session.user != null) {
				session.user.id = token.sub
			}
			return session
		},
	},
})
