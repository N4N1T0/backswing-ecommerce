import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { type StaticProductsTypes } from '@/types'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const pathnameCrumbs = (pathname: string) => {
  const crumbs = pathname.split('/').filter(Boolean)
  if (crumbs.length === 0) return []
  return crumbs.map((crumb, index) => ({
    name: crumb,
    href: '/' + crumbs.slice(0, index + 1).join('/')
  }))
}

export const useEuros = Intl.NumberFormat('es-ES', {
  style: 'currency',
  currency: 'EUR'
})

export const useCapitalize = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}

export const removeFromCart = (cart: StaticProductsTypes[], itemToRemove: string) => {
    return cart.filter(item => item.id !== itemToRemove)
}

export const getRandomProductsCollection = (staticsProducts: StaticProductsTypes[], colection: string, numberOfProducts: number): StaticProductsTypes[] => {
  const filteredProducts = staticsProducts.filter(product => product.gender === colection)
  const shuffledProducts = filteredProducts.sort(() => Math.random() - 0.5)
  const randomProducts = shuffledProducts.slice(0, numberOfProducts)
  return randomProducts
}

export const getRandomProductsFeatured = (staticsProducts: StaticProductsTypes[], numberOfProducts: number): StaticProductsTypes[] => {
  const filteredProducts = staticsProducts.filter(product => product.offer.onOffer)
  const shuffledProducts = filteredProducts.sort(() => Math.random() - 0.5)
  const randomProducts = shuffledProducts.slice(0, numberOfProducts)
  return randomProducts
}

export const getRandomProductsNew = (staticsProducts: StaticProductsTypes[], numberOfProducts: number): StaticProductsTypes[] => {
  const filteredProducts = staticsProducts.filter(product => product.new)
  const shuffledProducts = filteredProducts.sort(() => Math.random() - 0.5)
  const randomProducts = shuffledProducts.slice(0, numberOfProducts)
  return randomProducts
}

export const getSingleProduct = (staticsProducts: StaticProductsTypes[], ProductId: string): StaticProductsTypes => {
  return staticsProducts.find(product => product.id === ProductId)!
}
