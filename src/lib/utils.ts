import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { type CartItem, type StaticProductsTypes } from '@/types'
import { staticsProducts } from '@/contants/static-products'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const accordionPathname = (pathname: string, labels: string[]) => {
  const crumbs = pathname.split('/').filter(Boolean)
  return labels.filter(label => label === useCapitalize(crumbs[0]))
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

export const urlizeNames = (name: string) => {
  return name.toLowerCase().split(' ').join('-')
}

export const desUrlizeNames = (name: string) => {
  return name.split('-').join(' ')
}

export const useCapitalize = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}

export const removeFromCart = (cart: CartItem[], itemToRemove: string): CartItem[] | [] => {
    return cart.filter(item => item.id !== itemToRemove)
}

export const getRandomProductsCollection = (colection: string, numberOfProducts: number): StaticProductsTypes[] => {
  const filteredProducts = staticsProducts.filter(product => product.gender === colection) as StaticProductsTypes[]
  const shuffledProducts = filteredProducts.sort(() => Math.random() - 0.5)
  const randomProducts = shuffledProducts.slice(0, numberOfProducts)
  return randomProducts
}

// TODO Make a function that returns the prodcuts for categories

export const getRandomProductsFeatured = (numberOfProducts: number): StaticProductsTypes[] => {
  const filteredProducts = staticsProducts.filter(product => product.offer.onOffer) as StaticProductsTypes[]
  const shuffledProducts = filteredProducts.sort(() => Math.random() - 0.5)
  const randomProducts = shuffledProducts.slice(0, numberOfProducts)
  return randomProducts
}

export const getRandomProductsNew = (numberOfProducts: number): StaticProductsTypes[] => {
  const filteredProducts = staticsProducts.filter(product => product.new) as StaticProductsTypes[]
  const shuffledProducts = filteredProducts.sort(() => Math.random() - 0.5)
  const randomProducts = shuffledProducts.slice(0, numberOfProducts)
  return randomProducts
}

export const getSingleProduct = (name: string): StaticProductsTypes => {
  return staticsProducts.find(product => product.name.toLowerCase() === desUrlizeNames(name))! as StaticProductsTypes
}
