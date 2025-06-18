'use client'

import { removeFromWishlist } from '@/lib/utils'
import useWishlist from '@/stores/wishlist-store'
import type { ProductCard } from '@/types'
import { Heart } from 'lucide-react'

const WishlistHeart = ({ product }: { product: ProductCard }) => {
  const [count, setCount] = useWishlist()
  const isWishlisted = count.some((obj) => obj.id === product.id)

  const handleWishlist = (
    isWishlisted: boolean,
    id: string,
    product: ProductCard
  ) => {
    if (isWishlisted) {
      setCount((prev) => {
        const filtered = removeFromWishlist(prev, id)
        return filtered as typeof prev
      })
    } else {
      setCount((prev) => [...prev, product])
    }
  }

  return (
    <Heart
      size={20}
      fill={isWishlisted ? 'red' : 'white'}
      onClick={() => {
        handleWishlist(isWishlisted, product.id, product)
      }}
      className='cursor-pointer hover:text-gray-400 text-gray-950 transition-colors duration-200 ease-out shrink-0 self-start'
    />
  )
}

export default WishlistHeart
