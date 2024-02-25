'use client'

import useWishlist from '@/stores/wishlist-store'
import { type StaticProductsTypes } from '@/types'
import { Heart } from 'lucide-react'

const WishlistHeart = ({ product }: { product: StaticProductsTypes }) => {
  const [count, setCount] = useWishlist()
  const isWishlisted = count.some(obj => obj.id === product.id)
  return (
    <Heart size={20} fill={isWishlisted ? 'red' : 'white'} onClick={() => { setCount(prev => [...prev, product]) }} className='cursor-pointer hover:text-gray-400 text-gray-950 transition-colors duration-200 ease-out shrink-0 self-start' />
  )
}

export default WishlistHeart
