// Next.Auth Imports
import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'
import { loginCostumer } from './lib/queries'

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [
		Google,
		Credentials({
			credentials: {
				email: {},
				password: {},
			},
			authorize: async (credentials) => {
				let user = null

				user = await loginCostumer(
					credentials.email as string,
					credentials.password as string,
				)

				if (!user) {
					throw new Error('User not found.')
				}

				return user
			},
		}),
	],
	callbacks: {
		session({ session, token }) {
			if (token.sub != null && session.user != null) {
				session.user.id = token.sub
			}
			return session
		},
	},
})
