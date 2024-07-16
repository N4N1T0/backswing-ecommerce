'use server'

// Auth Imports
import { signIn, signOut } from '@/auth'
import { AuthError } from 'next-auth'

/**
 * Function to handle the login process.
 * It uses the Google OAuth provider to sign in the user.
 *
 * @returns {Promise<void>} - A promise that resolves when the user is successfully signed in.
 */
export const login = async (): Promise<void> => {
	// Call the signIn function from the @/auth module with the 'google' provider.
	// This will initiate the Google OAuth flow and redirect the user to the Google login page.
	await signIn('google')
}

/**
 * Function to handle the logout process.
 * It uses the signOut function from the @/auth module to sign out the user.
 *
 * @returns {Promise<void>} - A promise that resolves when the user is successfully signed out.
 */
export const logout = async (): Promise<void> => {
	// Call the signOut function from the @/auth module.
	// This will initiate the logout process and clear the user's session.
	await signOut()
}

export const signInWithCredentials = async (
	currentState: { message: string; status: string } | undefined,
	formData: FormData,
) => {
	try {
		await signIn('credentials', formData)
		return {
			status: 'success',
			message:
				'Credenciales correctas, puedes cerrar la ventana y empezar a comprar',
		}
	} catch (error) {
		if (error instanceof AuthError) {
			return {
				status: 'error',
				message: 'Email o contraseña incorrectos',
			}
		}
	}
}
