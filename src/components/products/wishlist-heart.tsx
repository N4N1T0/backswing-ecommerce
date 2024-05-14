'use client'

import { removeFromWishlist } from '@/lib/utils'
import useWishlist from '@/stores/wishlist-store'
import { type WPProduct } from '@/types'
import { Heart } from 'lucide-react'

const WishlistHeart = ({ product }: { product: WPProduct }) => {
  const [count, setCount] = useWishlist()
  const isWishlisted = count.some(obj => obj.id === product.id)

  const handleWishlist = (isWishlisted: boolean, id: string, product: WPProduct) => {
    if (isWishlisted) {
      setCount(prev => removeFromWishlist(prev, id))
    } else {
      setCount(prev => [...prev, product])
    }
  }

  return (
    <Heart
      size={20}
      fill={isWishlisted ? 'red' : 'white'}
      onClick={() => { handleWishlist(isWishlisted, product.id, product) }}
      className='cursor-pointer hover:text-gray-400 text-gray-950 transition-colors duration-200 ease-out shrink-0 self-start' />
  )
}

export default WishlistHeart
