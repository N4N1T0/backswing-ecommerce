// Next.Auth Imports
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import Google from 'next-auth/providers/google'
import { verifyPassword } from './lib/utils'
import { sanityClientWrite } from './sanity/lib/client'
import { GET_USER_FOR_AUTH } from './sanity/queries'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          required: true,
          autocomplete: 'email',
          srcLang: 'es'
        },
        password: {
          label: 'Contraseña',
          type: 'password',
          required: true,
          autocomplete: 'current-password',
          srcLang: 'es'
        }
      },
      authorize: async (credentials) => {
        const { email, password } = credentials

        const user = await sanityClientWrite.fetch(GET_USER_FOR_AUTH, { email })

        if (!user || !user?.password) {
          throw new Error('El usuario no se ha encontrado.')
        }

        const isVerified = verifyPassword(password as string, user?.password)

        if (!isVerified) {
          throw new Error('Las credenciales no son correctas.')
        }

        return {
          email: user.email,
          image: user.avatar?.url,
          name: `${user.firstName} ${user.lastName}`,
          id: user.id
        }
      }
    }),
    Google({
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code'
        }
      }
    })
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        if (account?.provider !== 'google') {
          return true
        }

        // Fetch existing user from Sanity
        const searchedUser = await sanityClientWrite.fetch(GET_USER_FOR_AUTH, {
          email: user.email
        })

        if (searchedUser) {
          return true
        }

        let image
        if (user.image || profile?.picture) {
          const imageUrl = user.image || profile?.picture

          // Fetch the image from the URL
          const response = await fetch(imageUrl)
          const imageBlob = await response.blob()

          if (!response.ok) {
            console.error(`Failed to fetch image: ${response.statusText}`)
          } else {
            image = await sanityClientWrite.assets.upload('image', imageBlob, {
              filename: `${user?.id}.jpg`
            })
          }
        }

        // Create a new user in Sanity
        await sanityClientWrite.createIfNotExists({
          _type: 'costumer',
          _id: `customer-${user?.id}`,
          email: profile?.email || user.email || '',
          _createdAt: new Date().toISOString(),
          _updatedAt: new Date().toISOString(),
          userName: profile?.name || user?.name || '',
          firstName: profile?.given_name || user?.name?.split(' ')[0] || '',
          lastName: profile?.family_name || user?.name?.split(' ')[1] || '',
          avatarUrl: image
            ? {
                _type: 'image',
                asset: {
                  _ref: image._id,
                  _type: 'reference'
                }
              }
            : null
        })

        return true
      } catch (error) {
        console.error('Error during sign-in process:', error)
        return false
      }
    },
    async jwt({ token, user, account, profile }) {
      if (account?.provider === 'google') {
        const searchedUser = await sanityClientWrite.fetch(GET_USER_FOR_AUTH, {
          email: profile?.email
        })

        if (user) {
          token.id = searchedUser?.id
        }
        return token
      } else {
        if (user) {
          token.id = user.id
        }
        return token
      }
    },
    session({ session, token }) {
      session.user.id = token.id as string
      return session
    }
  },
  trustHost: true,
  secret: process.env.AUTH_SECRET
})
