'use server'

import { signIn } from '@/auth'
import NewClientEmail from '@/emails/new-client'
import { resendClient } from '@/lib/clients/resend'
import { catchError, hashPassword } from '@/lib/utils'
import { sanityClientWrite } from '@/sanity/lib/client'
import { GET_USER_FOR_AUTH } from '@/sanity/queries'
import { Costumer } from '@/sanity/types'
import { uuid } from '@sanity/uuid'
import crypto from 'crypto'
import { AuthError } from 'next-auth'

// Secret for token generation - in production, use environment variable
const TOKEN_SECRET =
  process.env.PASSWORD_RESET_SECRET ||
  'your-super-secret-key-change-in-production'

// Mock user database - replace with your actual database
const mockUsers = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123' // In real app, this would be hashed
  }
]

export async function signInAction(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const [error] = await catchError(
    signIn('credentials', {
      email,
      password
    })
  )

  if (error) {
    return { success: false, error: 'Credenciales incorrectas' }
  }

  return {
    success: true
  }
}

export async function signUpAction(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const password = formData.get('password') as string

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
      from: 'usario-nuevo@termogar.es',
      bcc: 'amperez05@gmail.com',
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

    return {
      success: true,
      message: 'Registro Completo, Redirigiendo a la'
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

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Mock password reset logic
  // In a real app, you would:
  // 1. Check if user exists in database
  // 2. Generate a secure reset token
  // 3. Save token with expiration to database
  // 4. Send email with reset link
  // 5. Return success message (don't reveal if email exists)

  const user = mockUsers.find((u) => u.email === email)

  if (!user) {
    return { success: false, error: 'No account found with this email address' }
  }

  console.log('Password reset requested for:', email)

  return {
    success: true,
    message:
      'If an account with that email exists, we have sent password reset instructions.'
  }
}

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
  // Create a payload with email and expiration (1 hour from now)
  const payload = {
    email,
    expires: Date.now() + 60 * 60 * 1000 // 1 hour
  }

  // Convert payload to string and encrypt
  const payloadString = JSON.stringify(payload)
  const cipher = crypto.createCipheriv(
    'aes-256-cbc',
    TOKEN_SECRET,
    TOKEN_SECRET
  )
  let encrypted = cipher.update(payloadString, 'utf8', 'hex')
  encrypted += cipher.final('hex')

  // URL encode the token
  return encodeURIComponent(encrypted)
}

export async function verifyPasswordResetToken(token: string, email: string) {
  try {
    // URL decode the token
    const decodedToken = decodeURIComponent(token)

    // Decrypt the token
    const decipher = crypto.createDecipheriv(
      'aes-256-cbc',
      TOKEN_SECRET,
      TOKEN_SECRET
    )
    let decrypted = decipher.update(decodedToken, 'hex', 'utf8')
    decrypted += decipher.final('utf8')

    // Parse the payload
    const payload = JSON.parse(decrypted)

    // Verify email matches
    if (payload.email !== email) {
      return { valid: false, error: 'Invalid token for this email' }
    }

    // Check if token has expired
    if (Date.now() > payload.expires) {
      return { valid: false, error: 'Reset link has expired' }
    }

    return { valid: true }
  } catch (error) {
    console.log('🚀 ~ verifyPasswordResetToken ~ error:', error)
    return { valid: false, error: 'Invalid or corrupted token' }
  }
}

export async function resetPasswordAction(formData: FormData) {
  const email = formData.get('email') as string
  const token = formData.get('token') as string
  const newPassword = formData.get('newPassword') as string
  const confirmPassword = formData.get('confirmPassword') as string

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Verify token first
  const tokenVerification = await verifyPasswordResetToken(token, email)
  if (!tokenVerification.valid) {
    return { success: false, error: tokenVerification.error }
  }

  // Validate passwords
  if (newPassword !== confirmPassword) {
    return { success: false, error: 'Passwords do not match' }
  }

  if (newPassword.length < 6) {
    return { success: false, error: 'Password must be at least 6 characters' }
  }

  // Find user and update password
  const userIndex = mockUsers.findIndex((u) => u.email === email)
  if (userIndex === -1) {
    return { success: false, error: 'User not found' }
  }

  // In a real app, you would:
  // 1. Hash the new password with bcrypt
  // 2. Update the password in the database
  // 3. Invalidate all existing sessions
  // 4. Send confirmation email

  mockUsers[userIndex].password = newPassword // In real app, this would be hashed

  console.log('Password updated for:', email)

  return { success: true, message: 'Password has been successfully updated' }
}
