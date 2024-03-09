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
  }

export interface CartItem extends StaticProductsTypes {
  quantity: number
}

  export interface ColorPickerTypes {
    gender: 'mujer' | 'hombre' | 'ninos'
    product: string
    isProductCard?: boolean
  }
