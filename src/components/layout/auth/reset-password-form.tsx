'use client'

import { resetPasswordAction, verifyPasswordResetToken } from '@/actions/auth'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { AlertCircle, CheckCircle, Loader2 } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { FormEvent, useCallback, useEffect, useState } from 'react'

export default function ResetPasswordForm() {
  // STATE
  const [isLoading, setIsLoading] = useState(false)
  const [isVerifying, setIsVerifying] = useState(true)
  const [isValidToken, setIsValidToken] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [redirectCountdown, setRedirectCountdown] = useState(3)

  // ROUTERS
  const router = useRouter()
  const searchParams = useSearchParams()

  // CONST
  const email = searchParams.get('email')
  const token = searchParams.get('token')

  const startRedirectCountdown = useCallback(() => {
    const interval = setInterval(() => {
      setRedirectCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          router.push('/')
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }, [router])

  // EFFECT
  useEffect(() => {
    const verifyToken = async () => {
      if (!email || !token) {
        setError('Enlace de restablecimiento inválido. Falta email o token.')
        setIsValidToken(false)
        setIsVerifying(false)
        startRedirectCountdown()
        return
      }

      try {
        const result = await verifyPasswordResetToken(token, email)

        if (result.valid) {
          setIsValidToken(true)
        } else {
          setError(result.error || 'Enlace inválido o expirado')
          setIsValidToken(false)
          startRedirectCountdown()
        }
      } catch (error) {
        console.log('🚀 ~ verifyToken ~ error:', error)
        setError('Error al verificar el enlace')
        setIsValidToken(false)
        startRedirectCountdown()
      } finally {
        setIsVerifying(false)
      }
    }

    verifyToken()
  }, [email, startRedirectCountdown, token])

  // HANDLERS
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email || !token) return

    setIsLoading(true)
    setError('')
    setSuccess('')

    const formData = new FormData(e.currentTarget)
    const password = formData.get('newPassword') as string
    const confirmPassword = formData.get('confirmPassword') as string

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden')
      setIsLoading(false)
      return
    }

    formData.append('email', email)

    try {
      const result = await resetPasswordAction(formData)

      if (result.success) {
        setSuccess(result.message || '¡Contraseña actualizada exitosamente!')
        setTimeout(() => {
          router.push('/')
        }, 2000)
      } else {
        setError(result.error || 'Error al actualizar la contraseña')
      }
    } catch (error) {
      console.log('🚀 ~ handleSubmit ~ error:', error)
      setError('Ocurrió un error al actualizar la contraseña')
    } finally {
      setIsLoading(false)
    }
  }

  if (isVerifying) {
    return (
      <Card className='border-2 border-gray-200 rounded-none'>
        <CardContent className='p-8'>
          <div className='text-center space-y-4'>
            <Loader2 className='w-8 h-8 animate-spin mx-auto text-gray-600' />
            <h2 className='text-2xl font-bold text-black'>
              Verificando Enlace de Restablecimiento
            </h2>
            <p className='text-gray-600'>
              Por favor espere mientras verificamos su enlace de
              restablecimiento de contraseña...
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!isValidToken) {
    return (
      <Card className='border-2 border-gray-200 rounded-none'>
        <CardContent className='p-8'>
          <div className='text-center space-y-4'>
            <AlertCircle className='w-12 h-12 mx-auto text-red-600' />
            <h2 className='text-2xl font-bold text-black'>Enlace Inválido</h2>
            <div className='space-y-2'>
              <p className='text-gray-600'>{error}</p>
              <p className='text-sm text-gray-500'>
                Redirigiendo a la página principal en {redirectCountdown}{' '}
                segundos...
              </p>
            </div>
            <Button
              onClick={() => router.push('/')}
              variant='outline'
              className='border-2 border-gray-300 hover:bg-gray-100 rounded-none'
            >
              Ir al Inicio
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (success) {
    return (
      <Card className='border-2 border-gray-200 rounded-none'>
        <CardContent className='p-8'>
          <div className='text-center space-y-4'>
            <CheckCircle className='w-12 h-12 mx-auto text-green-600' />
            <h2 className='text-2xl font-bold text-black'>
              ¡Contraseña Actualizada!
            </h2>
            <p className='text-gray-600'>{success}</p>
            <p className='text-sm text-gray-500'>
              Ahora puede iniciar sesión con su nueva contraseña.
            </p>
            <Button
              onClick={() => router.push('/')}
              className='bg-black text-white hover:bg-gray-800 rounded-none'
            >
              Continuar a Iniciar Sesión
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className='shadow-none'>
      <CardContent className='p-8'>
        <div className='space-y-6'>
          <div className='text-center space-y-2'>
            <h2 className='text-2xl font-bold text-black'>
              Restablecer Su Contraseña
            </h2>
            <p className='text-gray-600 text-sm'>
              Ingrese su nueva contraseña para{' '}
              <span className='font-medium'>{email}</span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className='space-y-4'>
            <div className='space-y-2'>
              <Label
                htmlFor='newPassword'
                className='text-black font-medium text-sm'
              >
                Nueva Contraseña
              </Label>
              <Input
                id='newPassword'
                name='newPassword'
                type='password'
                className='border-2 border-gray-300 focus:border-black rounded-none h-12'
                placeholder='Ingrese su nueva contraseña'
                required
                minLength={6}
                autoComplete='new-password'
              />
            </div>

            <div className='space-y-2'>
              <Label
                htmlFor='confirmPassword'
                className='text-black font-medium text-sm'
              >
                Confirmar Nueva Contraseña
              </Label>
              <Input
                id='confirmPassword'
                name='confirmPassword'
                type='password'
                className='border-2 border-gray-300 focus:border-black rounded-none h-12'
                placeholder='Confirme su nueva contraseña'
                required
                autoComplete='new-password'
                minLength={6}
              />
            </div>

            {error && (
              <div className='text-red-600 text-sm bg-red-50 p-3 border border-red-200 flex items-center gap-2'>
                <AlertCircle size={16} />
                {error}
              </div>
            )}

            <Button
              type='submit'
              disabled={isLoading}
              className='w-full bg-black text-white hover:bg-gray-800 rounded-none py-6 text-base font-medium'
            >
              {isLoading ? (
                <>
                  <Loader2 className='w-4 h-4 mr-2 animate-spin' />
                  Actualizando Contraseña...
                </>
              ) : (
                'Actualizar Contraseña'
              )}
            </Button>
          </form>

          <div className='text-center'>
            <button
              type='button'
              onClick={() => router.push('/')}
              className='text-gray-600 hover:text-black underline text-sm'
            >
              Volver al Inicio
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
