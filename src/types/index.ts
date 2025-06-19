import {
  tallasCamisetas,
  tallasSudaderas,
  tallasSudaderasNiños
} from '@/contants'
import {
  GET_DESIGNS_BY_SLUGResult,
  GET_PRODUCTS_BY_CATEGORYResult
} from '@/sanity/types'
import type { StaticImageData } from 'next/image'

export interface WPPost {
  title: string
  content: string
  excerpt: string
  id: string
  date: string
  slug: string
  featuredImage: {
    node: {
      mediaItemUrl: string
      altText: string
    }
  }
}

export type Product = GET_DESIGNS_BY_SLUGResult
export type ProductCard = GET_PRODUCTS_BY_CATEGORYResult['designs'][number]
export type Colors = ProductCard['colors'] | Product['format'][number]['colors']
export type Formats = Product['format']
export type Sizes = (
  | typeof tallasCamisetas
  | typeof tallasSudaderas
  | typeof tallasSudaderasNiños
)[number]

export interface StaticWPProducts
  extends Omit<Product, 'upsell' | 'content' | 'variations' | 'attributes'> {
  title: string
}

export interface CartItem {
  id: string
  talla: string
  format: Omit<Product['format'][number], 'colors'> & { color: Colors[number] }
  price: number | null
  offer: number | null
  title: string | null
  quantity: number
  excerpt: string | null
}

export interface Variations {
  nodes: Array<{
    image: {
      sourceUrl: string
    }
    name: string
  }>
}

export interface Categories {
  nodes: Array<{
    name: string
  }>
}

export interface Attributes {
  nodes: Array<{
    options: string[]
  }>
}

export interface Related {
  nodes: Array<{
    name: string
    id: string
    variations: Variations
  }>
}

export interface User {
  nodes: Costumer[]
}

export interface Costumer {
  email: string
  id: string
  username: string
}

export interface ParsedConstent {
  description: string
  material: string
  parsedName: string
  variations: Variations
  isNew: boolean
  parsedPrice: string
  category: string | undefined
  gender: string | undefined
  colors: string[]
  image: {
    sourceUrl: string
  }
  id: string
  onSale: boolean
  related: Related | null
}

export interface ParsedStaticProduct
  extends Omit<
    ParsedConstent,
    'description' | 'material' | 'variations' | 'colors' | 'related'
  > {
  title: string
}

export interface PersonalizationProducts {
  value: string
  image: StaticImageData
  colors: string[] | null
}

export interface OramaHit {
  id: string
  score: number
  document: Product
}

export type SearchParamsProductType = Promise<{
  type: 'camisetas' | 'sudaderas'
}>

export type SearchParamsProductIDType = Promise<{
  product: string
}>

export type SearchParamsProfileType = Promise<{
  id: string
}>

export type SearchParamsSearchType = Promise<{
  q: string
}>

export interface Error {
  digest?: string
  message: string
}

export type BlogPost = Promise<{
  post: string
}>
