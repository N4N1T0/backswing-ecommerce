'use client'

import { removeFromWishlist } from '@/lib/utils'
import useWishlist from '@/stores/wishlist-store'
import type { WPProduct } from '@/types'
import { Heart } from 'lucide-react'

const WishlistHeart = ({ product }: { product: WPProduct }) => {
  // State hook to access and update the wishlist items
  const [count, setCount] = useWishlist()
  // Check if the product is already in the wishlist
  const isWishlisted = count.some((obj) => obj.id === product.id)

  /**
   * Function to handle adding or removing a product from the wishlist
   * @param {boolean} isWishlisted - Indicates whether the product is already in the wishlist
   * @param {string} id - The ID of the product
   * @param {WPProduct} product - The product object
   */
  const handleWishlist = (
    isWishlisted: boolean,
    id: string,
    product: WPProduct
  ) => {
    if (isWishlisted) {
      // Remove the product from the wishlist
      setCount((prev) => removeFromWishlist(prev, id))
    } else {
      // Add the product to the wishlist
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
