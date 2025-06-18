import { ModelA, ModelC, ModelD, ModelE } from '@/assets/models/index'
import ProductCard from '@/components/products/product-card'
import type { CartItem, Product } from '@/types'
import { type ClassValue, clsx } from 'clsx'
import { pbkdf2Sync } from 'crypto'
import type { StaticImageData } from 'next/image'
import { twMerge } from 'tailwind-merge'

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
export function eurilize(number: number | null): string {
  if (number === null) return ''
  return number.toLocaleString('de-DE', {
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
  return labels.filter((label) => label === useCapitalize(crumbs[0]))
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
  const modelName = productName.split(' ').pop()
  switch (modelName) {
    case 'A':
      return ModelA
    case 'E':
      return ModelE
    case 'D':
      return ModelD
    case 'C':
      return ModelC
    default:
      return ModelA
  }
}

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
export const useCapitalize = (word: string): string => {
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
  count: Array<Product | Product>,
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
