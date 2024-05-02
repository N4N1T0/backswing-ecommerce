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

  export interface ColorPickerTypes {
    gender: 'mujer' | 'hombre' | 'ninos'
    product: string
    isProductCard?: boolean
  }

export interface WPPosts {
  posts: {
    nodes: Post[]
  }
}

export interface WPPost {
  post: Post
}

export interface Post {
     title: string
      content: string
      excerpt: string
      id: string
      date: string
      slug: string
      featuredImage: FeaturedImages
}

export interface FeaturedImages {
  node: {
    mediaItemUrl: string
    altText: string
  }
}
