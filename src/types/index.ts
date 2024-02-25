export interface StaticProductsTypes {
    id: string
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
