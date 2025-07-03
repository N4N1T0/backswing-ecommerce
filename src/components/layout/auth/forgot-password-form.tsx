'use client'

import { forgotPasswordAction } from '@/actions/auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'

interface ForgotPasswordFormProps {
  onSwitchToTab?: (_tab: string) => void
}

export function ForgotPasswordForm({ onSwitchToTab }: ForgotPasswordFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (formData: FormData) => {
    setIsLoading(true)
    setError('')
    setMessage('')

    try {
      const result = await forgotPasswordAction(formData)

      if (result.success) {
        setMessage(result.message || 'Reset instructions sent to your email')

        // For demo purposes, generate and log the reset link
        const email = formData.get('email') as string
        const { generatePasswordResetToken } = await import('@/actions/auth')
        const token = await generatePasswordResetToken(email)
        const resetLink = `${window.location.origin}/reset-password?email=${encodeURIComponent(email)}&token=${token}`

        console.log('🔗 Password Reset Link (for demo):')
        console.log(resetLink)
        console.log('📧 In a real app, this would be sent via email')
      } else {
        setError(result.error || 'Failed to send reset email')
      }
    } catch (error) {
      console.log('🚀 ~ handleSubmit ~ error:', error)
      setError('An error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='space-y-6'>
      <div className='text-center space-y-2'>
        <h2 className='text-2xl font-bold text-black'>Reset Password</h2>
        <p className='text-gray-600 text-sm'>
          Enter your email address and we&apos;ll send you instructions to reset
          your password
        </p>
      </div>

      <form action={handleSubmit} className='space-y-4'>
        <div className='space-y-2'>
          <Label
            htmlFor='forgot-email'
            className='text-black font-medium text-sm'
          >
            Email Address
          </Label>
          <Input
            id='forgot-email'
            name='email'
            type='email'
            className='border-2 border-gray-300 focus:border-black rounded-none h-12'
            placeholder='Enter your email address'
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
          {isLoading ? 'Sending...' : 'Send Reset Instructions'}
        </Button>
      </form>

      <div className='text-center'>
        <p className='text-gray-600 text-sm'>
          Remember your password?{' '}
          <button
            type='button'
            onClick={() => onSwitchToTab?.('signin')}
            className='text-black hover:underline font-medium'
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  )
}
