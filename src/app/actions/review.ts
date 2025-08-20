'use server'

import { reviewSchema, type ReviewFormData } from '@/lib/schemas/review'
import { sanityClientWrite } from '@/sanity/lib/client'
import { revalidatePath } from 'next/cache'

export async function createReviewAction(
  data: ReviewFormData,
  productDesignId: string
) {
  try {
    // Validate the data
    const validatedData = reviewSchema.parse(data)

    // Create the review document
    const reviewDocument = {
      _type: 'review',
      rating: validatedData.rating,
      title: validatedData.title,
      comment: validatedData.comment,
      productDesign: {
        _type: 'reference',
        _ref: productDesignId
      }
    }

    // Save to Sanity
    const result = await sanityClientWrite.create(reviewDocument)

    // Revalidate the product page to show updated reviews
    revalidatePath('/productos/[slug]', 'page')

    return {
      success: true,
      data: result,
      message: 'Reseña enviada exitosamente. Será revisada antes de publicarse.'
    }
  } catch (error) {
    console.error('Error creating review:', error)
    return {
      success: false,
      error: 'Error al enviar la reseña. Por favor, inténtalo de nuevo.',
      details: error instanceof Error ? error.message : 'Unknown error'
    }
  }
}
