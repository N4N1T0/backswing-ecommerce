'use client'

import { forgotPasswordAction } from '@/actions/auth'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { forgotPasswordSchema, ForgotPasswordSchema } from '@/lib/schemas/login'
import { ForgotPasswordFormProps } from '@/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

export function ForgotPasswordForm({ onSwitchToTab }: ForgotPasswordFormProps) {
  // STATE
  const form = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: ''
    }
  })

  // CONST
  const {
    formState: { isSubmitting },
    handleSubmit
  } = form

  // HANDLERS
  const onSubmit = async (values: ForgotPasswordSchema) => {
    try {
      const formData = new FormData()
      formData.append('email', values.email)

      const result = await forgotPasswordAction(formData)

      if (result.success) {
        toast.success('Instrucciones enviadas a tu correo')
        form.reset()
      } else {
        toast.error(
          result.error || 'Error al enviar el correo de restablecimiento'
        )
      }
    } catch (error) {
      console.log('🚀 ~ onSubmit ~ error:', error)
      toast.error('Ocurrió un error')
    }
  }

  return (
    <div className='space-y-6'>
      <div className='text-center space-y-2'>
        <h2 className='text-2xl font-bold text-black'>
          Restablecer Contraseña
        </h2>
        <p className='text-gray-600 text-sm'>
          Ingresa tu correo electrónico y te enviaremos instrucciones para
          restablecer tu contraseña
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <Label
                  htmlFor='forgot-email'
                  className='text-black font-medium text-sm'
                >
                  Correo Electrónico
                </Label>
                <FormControl>
                  <Input
                    id='forgot-email'
                    type='email'
                    className='border-2 border-gray-300 focus:border-black rounded-none h-12'
                    placeholder='Ingresa tu correo electrónico'
                    disabled={isSubmitting}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type='submit'
            disabled={isSubmitting}
            className='w-full bg-black text-white hover:bg-gray-800 rounded-none py-6 text-base font-medium'
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Instrucciones'}
          </Button>
        </form>
      </Form>

      <div className='text-center'>
        <p className='text-gray-600 text-sm'>
          ¿Recuerdas tu contraseña?{' '}
          <button
            type='button'
            onClick={() => onSwitchToTab?.('signin')}
            className='text-black hover:underline font-medium'
          >
            Iniciar sesión
          </button>
        </p>
      </div>
    </div>
  )
}
