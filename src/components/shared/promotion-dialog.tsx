'use client'

import { subscribeToNewsletter } from '@/actions/contact'
import PromotionPic from '@/assets/artur-kornakov-ArI-foyWnfA-unsplash.webp'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { newsletterSchema, type NewsletterSchema } from '@/lib/schemas/login'
import { zodResolver } from '@hookform/resolvers/zod'
import { DialogDescription, DialogTitle } from '@radix-ui/react-dialog'
import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

const PromotionDialog = ({
  children
}: {
  children: React.ReactNode
}): React.ReactElement => {
  const [open, setOpen] = useState(false)

  const form = useForm<NewsletterSchema>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: ''
    }
  })

  const {
    formState: { isSubmitting },
    handleSubmit
  } = form

  const onSubmit = async (values: NewsletterSchema) => {
    const result = await subscribeToNewsletter(values)

    if (result.success) {
      toast.success(result.message)
      form.reset()
      setOpen(false)
    } else {
      toast.error(result.message)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogHeader className='sr-only'>
        <DialogTitle>Descuento exclusivo para los subscritos</DialogTitle>
        <DialogDescription>
          Recibe un 20% de descuento en tu primer pago con tarjeta de crédito
        </DialogDescription>
      </DialogHeader>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='flex bg-white text-center'>
        <div className='w-full px-4 mb-10 md:w-1/2 md:mb-0 relative text-center hidden md:block'>
          <Image
            src={PromotionPic}
            alt='Un niño jugando padel'
            title='Llévate un descuento para tu camiseta o la de tu hijo'
            fill
            className='w-auto h-auto'
          />
        </div>
        <div className='w-full px-4 md:w-1/2'>
          <h2 className='mb-4 text-3xl font-bold text-gray-950'>
            20% Descuento
          </h2>
          <p className='mb-4 text-xs text-gray-700'>
            Descuento exclusivo para los subscritos a nuestro newsletter, donde
            encontrarás información actual sobre el padel y mucho más!
          </p>
          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type='email'
                        placeholder='Tu Email@...'
                        disabled={isSubmitting}
                        className='w-full rounded-none shadow-none border border-gray-500'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className='items-center space-x-2 text-xs'>
                Al enviar el formulario, aceptas nuestra{' '}
                <a href='/politicas' className='underline'>
                  política de privacidad
                </a>
              </div>
              <Button
                type='submit'
                disabled={isSubmitting}
                className='inline-flex justify-center w-full px-4 py-4 text-white bg-black focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 hover:bg-gray-600 transition-colors duration-200'
              >
                {isSubmitting ? 'Enviando...' : 'Enviar'}
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default PromotionDialog
