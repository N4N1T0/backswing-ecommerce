'use client'

import { createReviewAction } from '@/app/actions/review'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ReviewFormData, reviewSchema } from '@/lib/schemas/review'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2, Star } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

interface ReviewFormProps {
  productDesignId: string
}

export default function ReviewForm({ productDesignId }: ReviewFormProps) {
  const form = useForm<ReviewFormData>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      rating: 5,
      title: '',
      comment: ''
    }
  })

  const {
    handleSubmit,
    watch,
    formState: { isSubmitting }
  } = form
  const watchedRating = watch('rating')

  const onSubmit = async (data: ReviewFormData) => {
    try {
      const result = await createReviewAction(data, productDesignId)

      if (result.success) {
        toast.success(result.message)
        form.reset()
      } else {
        toast.error(result.error)
      }
    } catch (error) {
      console.error('Error submitting review:', error)
      toast.error('Error al enviar la reseña. Por favor, inténtalo de nuevo.')
    }
  }

  const renderStarRating = () => {
    return (
      <div className='flex items-center gap-1'>
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type='button'
            onClick={() => form.setValue('rating', star)}
            className={`p-1 transition-colors hover:scale-110 ${
              star <= watchedRating
                ? 'text-yellow-400'
                : 'text-gray-300 hover:text-yellow-200'
            }`}
          >
            <Star
              className='size-6'
              fill={star <= watchedRating ? 'currentColor' : 'none'}
            />
          </button>
        ))}
        <span className='text-sm text-gray-600 font-medium ml-2'>
          {watchedRating} de 5 estrellas
        </span>
      </div>
    )
  }

  return (
    <div className='w-full mx-auto p-6 bg-white border-2 border-gray-300'>
      <div className='space-y-6'>
        <div className='text-center'>
          <h2 className='text-2xl font-bold text-black mb-2'>
            Escribir una reseña
          </h2>
          <p className='text-gray-600 text-sm'>
            Comparte tu experiencia con otros compradores
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
            <FormField
              control={form.control}
              name='rating'
              render={() => (
                <FormItem>
                  <FormLabel className='text-black font-medium text-sm'>
                    Calificación
                  </FormLabel>
                  <FormControl>{renderStarRating()}</FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='title'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-black font-medium text-sm'>
                    Título de tu reseña
                  </FormLabel>
                  <FormControl>
                    <Input
                      className='border-2 border-gray-300 focus:border-black rounded-none h-12'
                      placeholder='Resumen de tu experiencia'
                      disabled={isSubmitting}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='comment'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-black font-medium text-sm'>
                    Tu reseña
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      className='border-2 border-gray-300 focus:border-black rounded-none min-h-32'
                      placeholder='Describe tu experiencia con este producto...'
                      disabled={isSubmitting}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className='pt-4'>
              <Button
                type='submit'
                disabled={isSubmitting}
                className='w-full bg-black text-white hover:bg-gray-800 rounded-none h-12'
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                    Enviando...
                  </>
                ) : (
                  'Enviar Reseña'
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
