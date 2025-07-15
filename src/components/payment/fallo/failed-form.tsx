'use client'

import { updateOrderCancelReason } from '@/actions/order'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  FailedPaymentFormSchema,
  failedPaymentFormSchema
} from '@/lib/schemas/payment'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

export function FailedPaymentForm({ orderId }: { orderId: string }) {
  // STATE
  const [isSubmitted, setIsSubmitted] = useState(false)

  // FORM
  const form = useForm<FailedPaymentFormSchema>({
    resolver: zodResolver(failedPaymentFormSchema),
    defaultValues: {
      reason: ''
    }
  })

  // CONST
  const {
    formState: { isSubmitting },
    handleSubmit,
    control
  } = form

  // HANDLER
  async function onSubmit(data: FailedPaymentFormSchema) {
    const result = await updateOrderCancelReason(orderId, data.reason)

    if (result.success) {
      toast.success('Gracias por tus comentarios.', {
        description: 'Hemos registrado el motivo del fallo.'
      })
      setIsSubmitted(true)
    } else {
      toast.error('Error al enviar tus comentarios.', {
        description: result.error
      })
    }
  }

  if (isSubmitted) {
    return (
      <Card className='border border-gray-200 mb-8 pt-0'>
        <CardContent className='p-6 text-center'>
          <h2 className='text-xl font-semibold text-gray-800 mb-2'>
            ¡Gracias por tus comentarios!
          </h2>
          <p className='text-gray-600'>
            Tu feedback nos ayuda a mejorar nuestro servicio.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className='border border-gray-200 mb-8 pt-0'>
      <CardHeader className='bg-gray-50 border-b border-gray-200 pt-5'>
        <h2 className='text-xl font-semibold text-gray-800'>
          Ayúdanos a mejorar
        </h2>
        <p className='text-sm text-gray-600'>
          Tus comentarios son muy importantes para nosotros.
        </p>
      </CardHeader>
      <CardContent className='p-6'>
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className='w-full space-y-6'>
            <FormField
              control={control}
              name='reason'
              render={({ field }) => (
                <FormItem className='space-y-3'>
                  <FormLabel>¿Cuál fue el problema?</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className='flex flex-col space-y-1'
                      disabled={isSubmitting}
                    >
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='tarjeta_declinada' />
                        </FormControl>
                        <FormLabel className='font-normal'>
                          Mi tarjeta fue declinada
                        </FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='fondos_insuficientes' />
                        </FormControl>
                        <FormLabel className='font-normal'>
                          No tenía fondos suficientes
                        </FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='error_banco' />
                        </FormControl>
                        <FormLabel className='font-normal'>
                          Hubo un error con mi banco
                        </FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='problema_tecnico' />
                        </FormControl>
                        <FormLabel className='font-normal'>
                          Experimenté un problema técnico en la página
                        </FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='informacion_incorrecta' />
                        </FormControl>
                        <FormLabel className='font-normal'>
                          La información de mi tarjeta era incorrecta
                        </FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='otro' />
                        </FormControl>
                        <FormLabel className='font-normal'>Otro</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit' disabled={isSubmitting}>
              {isSubmitting ? 'Enviando...' : 'Enviar Comentarios'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
