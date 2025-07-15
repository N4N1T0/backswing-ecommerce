import { ModelA, ModelC, ModelD, ModelE } from '@/assets/models/index'
import ProductCard from '@/components/products/product-card'
import type { CartItem, GET_ORDER_BY_ID_Result, Product } from '@/types'
import { type ClassValue, clsx } from 'clsx'
import { pbkdf2Sync, randomBytes } from 'crypto'
import type { StaticImageData } from 'next/image'
import { twMerge } from 'tailwind-merge'

export const runtime = 'nodejs'

const SALT_LENGTH = 16 // Length of the salt
const ITERATIONS = 100000 // Number of PBKDF2 iterations
const KEY_LENGTH = 64 // Length of the derived key
const DIGEST = 'sha512' // Hash algorithm

/**
 * Generates a tailwind class string by merging the provided inputs using `clsx` and `twMerge`.
 *
 * @param {...ClassValue[]} inputs - The class values to be merged.
 * @return {string} The merged tailwind class string.
 */
export const cn = (...inputs: ClassValue[]): string => {
  // Merge the class values using `clsx` and `twMerge`.
  // This will ensure that the classes are properly spaced and deduplicated.
  return twMerge(clsx(inputs))
}

/**
 * Creates a debounced version of a function that delays its execution until after
 * a specified wait time has elapsed since the last time it was invoked.
 *
 * @param func - The function to debounce
 * @param wait - The number of milliseconds to delay
 * @returns A debounced version of the input function
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<T extends (..._args: any[]) => void>(
  func: T,
  wait: number
): (..._args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout | undefined

  return function (...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeoutId)
      func(...args)
    }

    clearTimeout(timeoutId)
    timeoutId = setTimeout(later, wait)
  }
}

/**
 * A utility function that formats a number as a Euro currency string.
 *
 * @param {number} number - The number to be formatted as Euro currency.
 * @return {string} The formatted Euro currency string.
 *
 * @example
 * eurilize(1000) // "€1,000.00"
 * eurilize(50.5) // "€50.50"
 * eurilize(12345.6789) // "€12,345.68"
 */
export function eurilize(number: number | null | string): string {
  if (number === null) return ''

  const formattedNumber = Number(number)

  return formattedNumber.toLocaleString('de-DE', {
    style: 'currency',
    currency: 'EUR'
  })
}

export function slugify(text: string | null): string {
  if (!text) return ''
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/**
 * Generates an array of labels that match the first crumb of a given pathname.
 *
 * @param {string} pathname - The pathname to be parsed.
 * @param {string[]} labels - The array of labels to filter.
 * @return {string[]} An array of labels that match the first crumb of the pathname.
 */
export const accordionPathname = (
  pathname: string,
  labels: string[]
): string[] => {
  // Split the pathname by '/' and remove any empty strings
  const crumbs = pathname.split('/').filter(Boolean)

  // Filter the labels array to only include labels that match the first crumb of the pathname
  return labels.filter((label) => label === capitalize(crumbs[0]))
}

/**
 * Parses the given pathname and returns an array of objects with the name and href of each crumb.
 *
 * @param {string} pathname - The pathname to be parsed.
 * @return {Array} An array of objects with the name and href of each crumb.
 */
export const pathnameCrumbs = (
  pathname: string
): Array<Record<string, string>> => {
  // Split the pathname by '/' and remove any empty strings
  const crumbs = pathname.split('/').filter(Boolean)

  // If there are no crumbs, return an empty array
  if (crumbs.length === 0) return []

  // Map each crumb to an object with the name and href
  return crumbs.map((crumb, index) => ({
    // The name of the crumb
    name: crumb,
    // The href of the crumb, built by joining all the crumbs up to and including this one
    href: `/${crumbs.slice(0, index + 1).join('/')}`
  }))
}

/**
 * Checks if a given date is within the last 7 days from the current date.
 *
 * @param {string} date - The date to be checked, in a format that can be parsed by the Date constructor.
 * @return {boolean} True if the date is within the last 7 days, false otherwise.
 */
export const checkNew = (date: string): boolean => {
  // Parse the given date
  const today = new Date() // Get the current date
  const createdDate = new Date(date) // Parse the given date

  // Calculate the difference in time between the two dates
  const diffTime = Math.abs(today.getTime() - createdDate.getTime())

  // Calculate the difference in days
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  // Check if the difference in days is less than 7
  return diffDays < 7
}

/**
 * Returns an image component based on the product name.
 *
 * The function works by splitting the product name into words and taking the last word.
 * Then it uses a switch statement to map the last word to the corresponding image component.
 *
 * @param {string} productName - The name of the product.
 * @return {StaticImageData} The image component for the product if it exists, null otherwise.
 */
export const getImageForModel = (productName: string): StaticImageData => {
  const modelName = productName.split(' ').shift()
  switch (modelName) {
    case 'FA':
      return ModelA
    case 'FE':
      return ModelE
    case 'FD':
      return ModelD
    case 'FC':
      return ModelC
    default:
      return ModelA
  }
}

/**
 * Formats a number as a currency string in euros.
 *
 * @param {number} number - The number to be formatted as a currency.
 * @return {string} The formatted currency string.
 */
export const useEuros = Intl.NumberFormat('es-ES', {
  style: 'currency',
  currency: 'EUR'
})

/**
 * Capitalizes the first letter of a given word and converts the rest of the letters to lowercase.
 *
 * @param {string} word - The word to be capitalized.
 * @return {string} The capitalized word.
 */
export const capitalize = (word: string): string => {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}

/**
 * Extracts the model name from a given product name.
 *
 * @param {string} productName - The name of the product.
 * @return {string | null} The model name if found, otherwise null.
 */
export const extractModelFromName = (productName: string): string | null => {
  const regex = /Model [A-Za-z]/ // Expresión regular para encontrar "Model" seguido de una letra
  const match = productName.match(regex)
  return match != null ? match[0] : null // Devuelve la coincidencia si se encuentra, de lo contrario, null
}

/**
 * Extracts a hexadecimal color code from a given product name.
 *
 * @param {string} productName - The name of the product.
 * @return {string} The hexadecimal color code found in the product name, or '#ffffff' if no match is found.
 */
export const extractHexColorFromName = (productName: string): string => {
  const regex = /#[0-9A-Fa-f]{6}\b/ // Expresión regular para encontrar un código de color hexadecimal de 6 dígitos
  const match = productName.match(regex)
  return match != null ? match[0] : '#ffffff' // Devuelve la coincidencia si se encuentra, de lo contrario, null
}

/**
 * Calculates the total price of a list of cart items.
 *
 * @param {CartItem[]} count - An array of cart items.
 * @return {number} The total price of all cart items.
 */
export const calculateTotal = (count: CartItem[]): number => {
  return count
    .map((item) => {
      const priceWithoutEuro = item.price
      if (priceWithoutEuro === null) return 0
      return priceWithoutEuro * item.quantity
    })
    .reduce((a, b) => a + b, 0)
}

/**
 * Removes an item from the cart based on its ID.
 *
 * @param {CartItem[]} cart - The current cart.
 * @param {string} itemToRemove - The ID of the item to remove.
 * @return {CartItem[] | []} - The updated cart with the item removed, or an empty array if the item was not found.
 */
export const removeFromCart = (
  cart: CartItem[],
  itemToRemove: string
): CartItem[] | [] => {
  return cart.filter((item) => item.id !== itemToRemove)
}

/**
 * Removes an item from the wishlist based on its ID.
 *
 * @param {Array<Product | ProductCard>} count - The current wishlist.
 * @param {string} id - The ID of the item to remove.
 * @return {Array<Product | ProductCard>} The updated wishlist with the item removed.
 */
export const removeFromWishlist = (
  count: Array<Product | ProductCard>,
  id: string
): Array<Product | ProductCard> => {
  return count.filter((item) => item.id !== id)
}

/**
 * Verify a plain text password against a hashed password.
 * @param {string} plainPassword - The plain text password to compare.
 * @param {string} storedPassword - The hashed password to compare against.
 * @returns {boolean} - True if the passwords match, false otherwise.
 */
export const verifyPassword = (
  plainPassword: string,
  storedPassword: string
): boolean => {
  const [salt, originalHash] = storedPassword.split(':')
  const hash = pbkdf2Sync(
    plainPassword,
    salt,
    ITERATIONS,
    KEY_LENGTH,
    DIGEST
  ).toString('hex')
  return hash === originalHash
}

/**
 * Returns either 0 or 1 randomly.
 *
 * @return {number} A random integer that is either 0 or 1.
 */
export const getRandomNumber = (): number => {
  return Math.floor(Math.random() * 2)
}

/**
 * Formats a date string into a localized Spanish date and time string.
 *
 * @param {string} dateString - The date string to format
 * @returns {string} The formatted date string in Spanish locale with date and time
 */
export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

/**
 * Maps a status code to its display text in Spanish.
 *
 * @param {string} status - The status code to convert
 * @returns {string} The human-readable status text in Spanish
 */
export const getStatusText = (status: string): string => {
  const statusMap = {
    pendiente: 'Pendiente',
    completado: 'Completado',
    cancelado: 'Cancelado',
    procesando: 'Procesando'
  }
  return statusMap[status as keyof typeof statusMap] || status
}

/**
 * Gets the appropriate Tailwind CSS color class for a given status.
 *
 * @param {string} status - The status to get the color for
 * @returns {string} The Tailwind CSS color class
 */
export const getStatusColor = (status: string): string => {
  const colorMap = {
    pendiente: 'text-yellow-600',
    completado: 'text-green-600',
    cancelado: 'text-red-600',
    procesando: 'text-blue-600'
  }
  return colorMap[status as keyof typeof colorMap] || 'text-gray-600'
}

/**
 * Calculates the subtotal price for an array of cart items.
 *
 * @param {CartItem[]} products - Array of cart items with quantity and price/offer
 * @returns {number} The calculated subtotal
 */
export const calculateSubtotal = (products: CartItem[]): number => {
  return products.reduce(
    (sum, product) =>
      sum + (product.offer || product.price || 0) * product.quantity,
    0
  )
}

/**
 * Calculates the discount amount based on a coupon and subtotal.
 *
 * @param {GET_ORDER_BY_ID_Result['discountCoupon']} coupon - The discount coupon object
 * @param {number} subtotal - The subtotal amount to calculate discount from
 * @returns {number} The calculated discount amount
 */
export const calculateDiscount = (
  coupon: GET_ORDER_BY_ID_Result['discountCoupon'],
  subtotal: number
): number => {
  if (!coupon || !coupon?.discount) return 0

  if (coupon.discount_type === 'percentage') {
    return (subtotal * (coupon.discount ? coupon.discount : 1)) / 100
  }
  return coupon.discount ? coupon.discount : 0
}

/**
 * Wraps a promise to handle errors in a functional way, returning a tuple with either [undefined, data] or [error]
 * @template T The type of the promise result
 * @param promise The promise to handle
 * @returns A tuple containing either [undefined, T] for success or [Error] for failure
 * @example
 * const [error, data] = await catchError(fetchData());
 * if (error) {
 *   // Handle error
 * } else {
 *   // Use data
 * }
 */
export const catchError = async <T>(
  promise: Promise<T>
): Promise<[undefined, T] | [Error]> => {
  return promise
    .then((data) => {
      return [undefined, data] as [undefined, T]
    })
    .catch((error) => {
      return [error]
    })
}

/**
 * Hash a plain text password using PBKDF2.
 * @param {string} plainPassword - The plain text password to hash.
 * @returns {string} - The salt and hashed password, concatenated as a single string.
 */
export const hashPassword = (plainPassword: string): string => {
  const salt = randomBytes(SALT_LENGTH).toString('hex')
  const hash = pbkdf2Sync(
    plainPassword,
    salt,
    ITERATIONS,
    KEY_LENGTH,
    DIGEST
  ).toString('hex')
  return `${salt}:${hash}`
}

/**
 * Calculates the age of an account based on its creation date and returns a formatted string in Spanish.
 *
 * @param {string} createdAt - The creation date of the account as a string
 * @returns {string} A formatted string representing the account age in days, months or years in Spanish
 *
 * @example
 * getAccountAge("2023-01-01") // "1 año"
 * getAccountAge("2023-12-01") // "2 meses"
 * getAccountAge("2024-02-01") // "15 días"
 */
export const getAccountAge = (createdAt: string): string => {
  const created = new Date(createdAt)
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - created.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  if (diffDays < 30) {
    return `${diffDays} días`
  } else if (diffDays < 365) {
    const months = Math.floor(diffDays / 30)
    return `${months} ${months === 1 ? 'mes' : 'meses'}`
  } else {
    const years = Math.floor(diffDays / 365)
    return `${years} ${years === 1 ? 'año' : 'años'}`
  }
}

/**
 * Calculates how long ago a date was and returns a formatted string in Spanish.
 *
 * @param {string} purchaseDate - The date to calculate time ago from, in any format parseable by Date constructor
 * @returns {string} A formatted string in Spanish representing how long ago the date was (e.g. "Ayer", "5 días atrás", "2 semanas atrás", "3 meses atrás")
 *
 * @example
 * getTimeAgo("2024-02-14") // "1 día atrás"
 * getTimeAgo("2024-01-01") // "2 meses atrás"
 * getTimeAgo("2024-02-13") // "Ayer"
 */
export const getTimeAgo = (purchaseDate: string): string => {
  const orderDate = new Date(purchaseDate)
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - orderDate.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  let timeAgo = ''
  if (diffDays === 1) {
    timeAgo = 'Ayer'
  } else if (diffDays < 7) {
    timeAgo = `${diffDays} días atrás`
  } else if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7)
    timeAgo = `${weeks} ${weeks === 1 ? 'semana' : 'semanas'} atrás`
  } else {
    const months = Math.floor(diffDays / 30)
    timeAgo = `${months} ${months === 1 ? 'mes' : 'meses'} atrás`
  }

  return timeAgo
}

/**
 * Gets the display title for legal pages based on the URL slug.
 *
 * @param {string} slug - The URL slug identifying the legal page
 * @returns {string} The human-readable title in Spanish for the legal page
 *
 * @example
 * getTitleLegal('politica-de-privacidad') // Returns 'Política de Privacidad'
 * getTitleLegal('unknown-page') // Returns 'Página Legal'
 */
export const getTitleLegal = (slug: string): string => {
  switch (slug) {
    case 'politica-de-privacidad':
      return 'Política de Privacidad'
    case 'devoluciones-y-cambios':
      return 'Devoluciones y Cambios'
    case 'envio-y-entrega':
      return 'Envío y Entrega'
    case 'terminos-y-condiciones':
      return 'Términos y Condiciones'
    case 'preguntas-frecuentes':
      return 'Preguntas Frecuentes'
    default:
      return 'Página Legal'
  }
}

/**
 * Generates a cryptographically strong random password.
 *
 * The generated password will:
 * - Be 16 characters long
 * - Include lowercase letters (a-z)
 * - Include uppercase letters (A-Z)
 * - Include numbers (0-9)
 * - Include special characters (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * @returns {string} A randomly generated strong password
 *
 * @example
 * const password = generateStrongPassword() // Returns something like "P@5sw0rd!K9#mX$q"
 */
export const generateStrongPassword = (): string => {
  const length = 16
  const charset =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?'
  let password = ''
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length)
    password += charset[randomIndex]
  }

  return password
}
