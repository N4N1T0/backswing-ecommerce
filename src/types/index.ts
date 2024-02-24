export interface StaticProductsTypes {
    id: number
    name: string
    price: number
    description: string
    material: string
    image: string
    gender: string
    new: boolean
    offer: {
      price: number
      onOffer: boolean
    }
  }
