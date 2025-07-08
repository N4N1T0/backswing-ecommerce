'use server'

import { signIn, signOut } from '@/auth'
import NewClientEmail from '@/emails/new-client'
import PasswordResetEmail from '@/emails/password-reset'
import { resendClient } from '@/lib/clients/resend'
import { loginSchema, signUpSchema, type LoginSchema, type SignUpSchema } from '@/lib/schemas/login'
import { catchError, hashPassword } from '@/lib/utils'
import { sanityClientWrite } from '@/sanity/lib/client'
import { GET_USER_FOR_AUTH } from '@/sanity/queries'
import { Costumer } from '@/sanity/types'
import { uuid } from '@sanity/uuid'
import { createCipheriv, createDecipheriv, randomBytes } from 'crypto'
import { AuthError } from 'next-auth'
import { revalidatePath } from 'next/cache'

const TOKEN_SECRET = process.env.PASSWORD_RESET_SECRET?.toString()

export async function signInAction(values: LoginSchema) {
  const validatedFields = loginSchema.safeParse(values)

  if (!validatedFields.success) {
    return {
      success: false,
      error: 'Datos inválidos'
    }
  }

  const { email, password } = validatedFields.data

  const [error] = await catchError(
    signIn('credentials', {
      email,
      password,
      redirect: false
    })
  )

  if (error) {
    return { success: false, error: 'Credenciales incorrectas' }
  }

  return {
    success: true
  }
}

export async function signUpAction(values: SignUpSchema) {
  const { success, error, data } = signUpSchema.safeParse(values)

  if (!success && error) {
    return {
      success: false,
      message: error.errors[0].message
    }
  }

  const { name, email, password } = data

  try {
    const existingUser = await sanityClientWrite.fetch(GET_USER_FOR_AUTH, {
      email
    })

    if (existingUser && !existingUser.isGuest) {
      return {
        success: false,
        message:
          'Ya tienes una cuenta con nosotros, puedes iniciar sesión en la pagina principal!'
      }
    }

    const id = uuid()
    const hashedPassword = hashPassword(password)

    if (existingUser && existingUser.isGuest) {
      await sanityClientWrite
        .patch(existingUser.id)
        .set({
          isGuest: false,
          password: hashedPassword,
          _updatedAt: new Date().toISOString(),
          avatarUrl: {
            _type: 'image',
            asset: {
              _ref: 'image-b1625ce0eeed9972dc9a045bfdff747ced3b649d-96x96-webp',
              _type: 'reference'
            }
          }
        })
        .commit()
    } else {
      await sanityClientWrite.create<Costumer>({
        _type: 'costumer',
        _id: `customer-${id}`,
        email: email,
        password: hashedPassword,
        _createdAt: new Date().toISOString(),
        _updatedAt: new Date().toISOString(),
        _rev: id,
        avatarUrl: {
          _type: 'image',
          asset: {
            _ref: 'image-b1625ce0eeed9972dc9a045bfdff747ced3b649d-96x96-webp',
            _type: 'reference'
          }
        }
      })
    }

    await resendClient.emails.send({
      from: 'usario-nuevo@backswingpadel.com',
      bcc: 'backswing.es@gmail.com',
      to: [email],
      subject: 'Nuevo Usuario',
      react: NewClientEmail({
        email: email,
        firstName: name
      })
    })

    await signIn('credentials', {
      email: email,
      password: password,
      redirect: false
    })

    revalidatePath('/', 'layout')
    return {
      success: true
    }
  } catch (error) {
    console.log('🚀 ~ signUpAction ~ error:', error)
    if (error instanceof AuthError) {
      return {
        success: false,
        message: error.cause?.err?.message
      }
    }
    return {
      success: false,
      message: 'Ocurrió un error durante el inicio de sesión'
    }
  }
}

export async function forgotPasswordAction(formData: FormData) {
  const email = formData.get('email') as string
  const token = await generatePasswordResetToken(email)

  const response = await resendClient.emails.send({
    from: 'recupera-password@backswingpadel.com',
    to: [email],
    subject: 'Recupera tu contraseña',
    react: PasswordResetEmail({
      email,
      token
    })
  })

  if (response.error) {
    return { success: false, error: 'Hubo un problema con el servidor' }
  }

  return {
    success: true
  }
}

// TODO
export async function signInWithGoogleAction() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Mock Google OAuth logic
  // In a real app, you would:
  // 1. Redirect to Google OAuth
  // 2. Handle callback
  // 3. Get user info from Google
  // 4. Create or update user in database
  // 5. Create session

  console.log('Google sign in initiated')

  return {
    success: true,
    user: {
      id: 'google-user-123',
      name: 'Google User',
      email: 'googleuser@gmail.com'
    }
  }
}

export async function generatePasswordResetToken(email: string) {
  const payload = {
    email,
    expires: Date.now() + 60 * 60 * 1000
  }

  const iv = randomBytes(16)
  const cipher = createCipheriv('aes-256-cbc', Buffer.from(TOKEN_SECRET!), iv)

  const encrypted = Buffer.concat([
    cipher.update(JSON.stringify(payload), 'utf8'),
    cipher.final()
  ])

  const token = iv.toString('hex') + ':' + encrypted.toString('hex')

  return encodeURIComponent(token)
}

export async function verifyPasswordResetToken(token: string, email: string) {
  try {
    const decodedToken = decodeURIComponent(token)
    const [ivHex, encryptedHex] = decodedToken.split(':')

    if (!ivHex || !encryptedHex) {
      throw new Error('Formato de token inválido')
    }

    const iv = Buffer.from(ivHex, 'hex')
    const encrypted = Buffer.from(encryptedHex, 'hex')

    const decipher = createDecipheriv(
      'aes-256-cbc',
      Buffer.from(TOKEN_SECRET!),
      iv
    )
    const decrypted = Buffer.concat([
      decipher.update(encrypted),
      decipher.final()
    ])

    const payload = JSON.parse(decrypted.toString('utf8'))

    if (payload.email !== email) {
      return {
        valid: false,
        error: 'Token inválido para este correo electrónico'
      }
    }

    if (Date.now() > payload.expires) {
      return {
        valid: false,
        error: 'El enlace de restablecimiento ha expirado'
      }
    }

    return { valid: true }
  } catch (error) {
    console.error('🚀 ~ verifyPasswordResetToken ~ error:', error)
    return { valid: false, error: 'Token inválido o corrupto' }
  }
}

export async function resetPasswordAction(formData: FormData) {
  const email = formData.get('email') as string
  const newPassword = formData.get('newPassword') as string

  const user = await sanityClientWrite.fetch(
    GET_USER_FOR_AUTH,
    { email },
    { cache: 'no-cache' }
  )
  console.log('🚀 ~ resetPasswordAction ~ user:', user)

  if (!user) {
    return { success: false, error: 'Usuario no encontrado' }
  }

  const hashedPassword = hashPassword(newPassword)

  await sanityClientWrite
    .patch(user.id)
    .set({
      password: hashedPassword
    })
    .commit()

  return { success: true, message: 'Password has been successfully updated' }
}

export async function signOutAction() {
  await signOut()
}
