// TODO Eliminar despues de subir todos los productos
export interface StaticProductsTypes {
    id: string
    name: string
    price: number
    description: string
    material: string
    image: string
    gender: 'mujer' | 'hombre' | 'ninos'
    new: boolean
    offer: {
      price: number
      onOffer: boolean
    }
    category: string
    quantity: number
  }

export interface WPPosts {
  posts: {
    nodes: WPPost[]
  }
}

export interface WPPost {
  post: {
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
}

export interface WPProduct {
    id: string
    image: {
      sourceUrl: string
    }
    name: string
    price: string
    date: string
    onSale: boolean
    content: string
    variations: Variations
    productCategories: Categories
    attributes: Attributes
    upsell: Related
}

export interface StaticWPProducts extends Omit<WPProduct, 'upsell' | 'content' | 'variations' | 'attributes'> {}

export interface CartItem {
    id: string
    talla: string
    model: Variations['nodes'][0]
    parsedPrice: string
    parsedName: string
    quantity: number
    description: string
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

export interface Collection {
  nodes: Array<{
  id: string
  name: string
  image: {
    sourceUrl: string
  }
  price: string
  productCategories: Categories
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

export interface ParsedStaticProduct extends Omit<ParsedConstent, 'description' | 'material' | 'variations' | 'colors' | 'related' > {}
