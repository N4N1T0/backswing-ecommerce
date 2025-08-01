import {
  tallasCamisetas,
  tallasSudaderas,
  tallasSudaderasNiños
} from '@/contants'
import {
  Address,
  Costumer,
  GET_DESIGNS_BY_SLUGResult,
  GET_PRODUCTS_BY_CATEGORYResult,
  Order
} from '@/sanity/types'
import { SanityDocument } from 'next-sanity'
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

export interface SupportInfoProps {
  email?: string
  phone?: string
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

export interface OrderTotalsProps {
  orderSummary: Order
  discountPercentage: number
}

export interface OrderSummaryProps {
  handleCouponApplied: (_discount: number, _couponCode?: string) => void
  discountPercentage: number
  disabled?: boolean
}

export interface SignInFormProps {
  onSuccess?: () => void
  onSwitchToTab?: (_tab: string) => void
}

export interface ForgotPasswordFormProps {
  onSwitchToTab?: (_tab: string) => void
}

export interface SignUpFormProps {
  onSuccess?: () => void
  onSwitchToTab?: (_tab: string) => void
}

export interface ShippingAddressProps {
  address: Partial<Address>
  onAddressChange: (_address: Partial<Address>) => void
  differentShipping: boolean
  setDifferentShipping: (_value: boolean) => void
}

export interface ContactInformationProps {
  customer: Partial<Costumer> | null
  onCustomerChange: (_customer: Partial<Costumer>) => void
}

export interface BillingAddressProps {
  address: Partial<Address>
  onAddressChange: (_address: Partial<Address>) => void
}

export type OrderSummaryType = {
  products: CartItem[]
  subtotal: number
  shipping: number
  discount: number
  total: number
  iva: number
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

export type SearchParamsPostType = Promise<{
  post: string
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

export type SearchParamsLegalType = Promise<{
  slug: string
}>

export interface Error {
  digest?: string
  message: string
}

export type BlogPost = Promise<{
  post: string
}>

export interface OrderByWebhook {
  orderNumber: string
  totalAmount: string
  purchaseDate: string
  products: Array<SanityDocument<Record<string, unknown>>>
  gateway: string
  user: {
    IdDocument: string
    _id: string
    billingAddress: {
      _key?: string
      address1: string
      address2: string
      city: string
      postcode: string
      state: string
      phone: string
    }
    companyName: string
    email: string
    firstName: string
    lastName: string
    password: null
  }
  iva: string
  shippingAddress: Address
  discountCoupon: {
    code: string
    discount: number
    discount_type: 'percentage' | 'fixed'
  } | null
}

export interface GET_ORDER_BY_ID_Result {
  discountCoupon: {
    code: string | null
    discount: number | null
    discount_type: 'fixed' | 'percentage' | null
    id: string
  } | null
  gateway: string
  id: string
  status: string
  totalAmount: string
  paymentMethod: string
  purchaseDate: string
  shippingAddress: {
    _key?: string
    address1: string
    address2: string
    city: string
    postcode: string
    phone: string
    state: string
  }
  user: {
    IdDocument: string
    _id: string
    billingAddress: {
      _key?: string
      address1: string
      address2: string
      city: string
      postcode: string
      state: string
      phone: string
    }
    companyName: string
    email: string
    firstName: string
    lastName: string
    password: null
  }
}
