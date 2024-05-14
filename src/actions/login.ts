'use server'

import { signIn, signOut } from '@/auth'

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
