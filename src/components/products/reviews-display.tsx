'use client'

import { formatDate } from '@/lib/utils'
import { sanityClientRead } from '@/sanity/lib/client'
import { GET_REVIEWS_BY_PRODUCT_DESIGN } from '@/sanity/queries'
import { GET_REVIEWS_BY_PRODUCT_DESIGNResult } from '@/sanity/types'
import { Star } from 'lucide-react'
import { useEffect, useState } from 'react'

interface ReviewsDisplayProps {
  productDesignId: string
}

export default function ReviewsDisplay({
  productDesignId
}: ReviewsDisplayProps) {
  // STATE
  const [reviews, setReviews] = useState<GET_REVIEWS_BY_PRODUCT_DESIGNResult>(
    []
  )
  const [loading, setLoading] = useState(true)
  const [averageRating, setAverageRating] = useState(0)

  // EFFECTS
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const fetchedReviews = await sanityClientRead.fetch(
          GET_REVIEWS_BY_PRODUCT_DESIGN,
          { productDesignId }
        )
        setReviews(fetchedReviews)

        // Calculate average rating
        if (fetchedReviews.length > 0) {
          const total = fetchedReviews.reduce(
            (sum: number, review) => sum + review.rating,
            0
          )
          setAverageRating(total / fetchedReviews.length)
        }
      } catch (error) {
        console.error('Error fetching reviews:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchReviews()
  }, [productDesignId])

  // RENDER
  const renderStars = (rating: number, size: 'sm' | 'md' = 'sm') => {
    const starSize = size === 'sm' ? 'w-4 h-4' : 'w-5 h-5'

    return (
      <div className='flex items-center gap-1'>
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${starSize} ${
              star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    )
  }

  if (loading) {
    return (
      <div className='w-full p-6 bg-white border-2 border-gray-300'>
        <div className='animate-pulse space-y-6'>
          <div className='h-8 bg-gray-200 rounded w-1/3' />
          {[1, 2, 3].map((i) => (
            <div key={i} className='space-y-3 p-4 border border-gray-200'>
              <div className='flex items-center gap-4'>
                <div className='h-5 bg-gray-200 rounded w-24' />
                <div className='h-4 bg-gray-200 rounded w-32' />
              </div>
              <div className='h-4 bg-gray-200 rounded w-3/4' />
              <div className='h-16 bg-gray-200 rounded' />
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (reviews.length === 0) {
    return null
  }

  return (
    <div className='w-full p-6 bg-white border-2 border-gray-300'>
      <div className='space-y-6'>
        <div className='border-b border-gray-200 pb-6'>
          <h3 className='text-xl font-bold text-black mb-4'>
            Reseñas de clientes
          </h3>
          <div className='flex items-center gap-4'>
            <div className='flex items-center gap-2'>
              {renderStars(Math.round(averageRating), 'md')}
              <span className='text-lg font-semibold text-black'>
                {averageRating.toFixed(1)}
              </span>
            </div>
            <span className='text-gray-600 text-sm'>
              Basado en {reviews.length}{' '}
              {reviews.length === 1 ? 'reseña' : 'reseñas'}
            </span>
          </div>
        </div>

        <div className='space-y-6'>
          {reviews.map((review) => (
            <div
              key={review.id}
              className='border-b border-gray-100 pb-6 last:border-b-0'
            >
              <div className='space-y-3'>
                <div className='flex items-start justify-between'>
                  <div className='space-y-2'>
                    <div className='flex items-center gap-3'>
                      {renderStars(review.rating)}
                    </div>
                    <h4 className='font-medium text-black'>{review.title}</h4>
                  </div>
                  <span className='text-xs text-gray-500'>
                    {formatDate(review._createdAt)}
                  </span>
                </div>

                <p className='text-gray-700 text-sm leading-relaxed'>
                  {review.comment}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
