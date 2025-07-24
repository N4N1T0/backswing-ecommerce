'use client'

import useWishlist from '@/stores/wishlist-store'
import { Heart } from 'lucide-react'
import ProductCard from '../products/product-card'

export default function Wishlist() {
  const [wishlistItems] = useWishlist()

  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-center'>
        <h2 className='text-xl font-semibold text-black'>Mi Lista de Deseos</h2>
        <p className='text-gray-600'>{wishlistItems.length} artículos</p>
      </div>

      {wishlistItems.length === 0 ? (
        <div className='text-center py-12 border border-gray-200 bg-white'>
          <Heart className='h-12 w-12 text-gray-400 mx-auto mb-4' />
          <h3 className='text-lg font-medium text-black mb-2'>
            Tu lista de deseos está vacía
          </h3>
          <p className='text-gray-600'>
            Guarda artículos que te gusten para comprarlos después
          </p>
        </div>
      ) : (
        <div className='grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-8 md:gap-y-10'>
          {wishlistItems.map((item, index) => (
            <ProductCard
              key={item.id}
              product={item}
              route='nuevo'
              priority={index}
            />
          ))}
        </div>
      )}
    </div>
  )
}
