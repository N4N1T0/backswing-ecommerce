'use client'

import { signInAction, signInWithGoogleAction } from '@/actions/auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { SignInFormProps } from '@/types'
import { FormEvent, useState } from 'react'

export function SignInForm({ onSuccess, onSwitchToTab }: SignInFormProps) {
  // STATE
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  // HANDLERS
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    const formData = new FormData(e.currentTarget)

    try {
      const result = await signInAction(formData)

      if (result.success) {
        onSuccess?.()
      } else {
        setError(result.error || 'Error al iniciar sesión')
      }
    } catch (error) {
      console.log('🚀 ~ handleSubmit ~ error:', error)
      setError('Ocurrió un error')
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    setIsLoading(true)
    try {
      const result = await signInWithGoogleAction()
      if (result.success) {
        onSuccess?.()
      }
    } catch (error) {
      console.log('🚀 ~ handleGoogleSignIn ~ error:', error)
      setError('Error al iniciar sesión con Google')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='space-y-6'>
      <div className='text-center space-y-2'>
        <h2 className='text-2xl font-bold text-black'>Bienvenido de Nuevo</h2>
        <p className='text-gray-600 text-sm'>
          Ingresa tus credenciales para acceder a tu cuenta
        </p>
      </div>

      <Button
        onClick={handleGoogleSignIn}
        variant='outline'
        className='w-full border-2 border-gray-300 hover:bg-gray-50 rounded-none py-6 text-base font-medium bg-transparent'
        disabled={isLoading}
      >
        <svg className='w-5 h-5 mr-3' viewBox='0 0 24 24'>
          <path
            fill='currentColor'
            d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
          />
          <path
            fill='currentColor'
            d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
          />
          <path
            fill='currentColor'
            d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
          />
          <path
            fill='currentColor'
            d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
          />
        </svg>
        Continuar con Google
      </Button>

      <div className='relative'>
        <Separator className='bg-gray-300' />
        <div className='absolute inset-0 flex items-center justify-center'>
          <span className='px-4 bg-white text-gray-500 text-sm'>
            O continuar con email
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className='space-y-4'>
        <div className='space-y-2'>
          <Label
            htmlFor='signin-email'
            className='text-black font-medium text-sm'
          >
            Correo Electrónico
          </Label>
          <Input
            id='signin-email'
            name='email'
            type='email'
            className='border-2 border-gray-300 focus:border-black rounded-none h-12'
            placeholder='Ingresa tu correo'
            defaultValue='john@example.com'
            required
          />
        </div>

        <div className='space-y-2'>
          <Label
            htmlFor='signin-password'
            className='text-black font-medium text-sm'
          >
            Contraseña
          </Label>
          <Input
            id='signin-password'
            name='password'
            type='password'
            className='border-2 border-gray-300 focus:border-black rounded-none h-12'
            placeholder='Ingresa tu contraseña'
            defaultValue='password123'
            required
          />
        </div>

        {error && (
          <div className='text-red-600 text-sm bg-red-50 p-3 border border-red-200'>
            {error}
          </div>
        )}

        <Button
          type='submit'
          disabled={isLoading}
          className='w-full bg-black text-white hover:bg-gray-800 rounded-none py-6 text-base font-medium'
        >
          {isLoading ? 'Iniciando Sesión...' : 'Iniciar Sesión'}
        </Button>
      </form>

      <div className='text-center space-y-3'>
        <button
          type='button'
          onClick={() => onSwitchToTab?.('forgot')}
          className='text-gray-600 hover:text-black underline text-sm'
        >
          ¿Olvidaste tu contraseña?
        </button>

        <p className='text-gray-600 text-sm'>
          {'¿No tienes una cuenta? '}
          <button
            type='button'
            onClick={() => onSwitchToTab?.('signup')}
            className='text-black hover:underline font-medium'
          >
            Regístrate
          </button>
        </p>
      </div>
    </div>
  )
}
