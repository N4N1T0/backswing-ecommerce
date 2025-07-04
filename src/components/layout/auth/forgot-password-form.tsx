'use client'

import { forgotPasswordAction } from '@/actions/auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ForgotPasswordFormProps } from '@/types'
import { FormEvent, useState } from 'react'

export function ForgotPasswordForm({ onSwitchToTab }: ForgotPasswordFormProps) {
  // STATE
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  // HANDLERS
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    setMessage('')

    const formData = new FormData(e.currentTarget)
    const password = formData.get('password') as string
    const confirmPassword = formData.get('confirmPassword') as string

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden')
      setIsLoading(false)
      return
    }

    try {
      const result = await forgotPasswordAction(formData)

      if (result.success) {
        setMessage('Instrucciones enviadas a tu correo')
      } else {
        setError(
          result.error || 'Error al enviar el correo de restablecimiento'
        )
      }
    } catch (error) {
      console.log('🚀 ~ handleSubmit ~ error:', error)
      setError('Ocurrió un error')
    } finally {
      setIsLoading(false)
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

      <form onSubmit={handleSubmit} className='space-y-4'>
        <div className='space-y-2'>
          <Label
            htmlFor='forgot-email'
            className='text-black font-medium text-sm'
          >
            Correo Electrónico
          </Label>
          <Input
            id='forgot-email'
            name='email'
            type='email'
            className='border-2 border-gray-300 focus:border-black rounded-none h-12'
            placeholder='Ingresa tu correo electrónico'
            required
          />
        </div>

        {error && (
          <div className='text-red-600 text-sm bg-red-50 p-3 border border-red-200'>
            {error}
          </div>
        )}

        {message && (
          <div className='text-green-600 text-sm bg-green-50 p-3 border border-green-200'>
            {message}
          </div>
        )}

        <Button
          type='submit'
          disabled={isLoading}
          className='w-full bg-black text-white hover:bg-gray-800 rounded-none py-6 text-base font-medium'
        >
          {isLoading ? 'Enviando...' : 'Enviar Instrucciones'}
        </Button>
      </form>

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
