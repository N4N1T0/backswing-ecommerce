'use client'

import { validateCoupon } from '@/actions/order'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Check, Loader2, X } from 'lucide-react'
import { memo, useCallback, useState, useTransition } from 'react'

interface CouponSectionProps {
  onCouponApplied: (_discount: number, _couponCode?: string) => void
  disabled?: boolean
}

export const CouponSection = memo(function CouponSection({
  onCouponApplied,
  disabled = false
}: CouponSectionProps) {
  const [couponCode, setCouponCode] = useState('')
  const [couponApplied, setCouponApplied] = useState(false)
  const [couponError, setCouponError] = useState('')
  const [isPending, startTransition] = useTransition()

  const handleCouponValidation = useCallback(() => {
    if (disabled || !couponCode.trim()) return

    startTransition(async () => {
      const result = await validateCoupon(couponCode)

      if (result.success && result.data) {
        setCouponApplied(true)
        setCouponError('')
        onCouponApplied(result.data.discount, result.data.code)
      } else {
        setCouponApplied(false)
        setCouponError(result.message || 'Código de cupón inválido')
        onCouponApplied(0)
      }
    })
  }, [couponCode, disabled, onCouponApplied])

  return (
    <div
      className={`space-y-3 p-4 border border-gray-300 ${disabled ? 'bg-gray-200' : 'bg-gray-100'}`}
    >
      <Label htmlFor='coupon' className='text-black font-medium'>
        Código de Cupón
      </Label>
      <div className='flex gap-2'>
        <Input
          id='coupon'
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          placeholder='Ingresa el código de cupón'
          className='border border-gray-400 focus:border-black bg-white rounded-none'
          disabled={disabled || isPending}
        />
        <Button
          onClick={handleCouponValidation}
          disabled={disabled || isPending || !couponCode.trim()}
          className='bg-black text-white hover:bg-gray-800 border border-black disabled:opacity-50 rounded-none'
        >
          {isPending ? <Loader2 className='h-4 w-4 animate-spin' /> : 'Aplicar'}
        </Button>
      </div>
      {couponApplied && !disabled && (
        <div className='flex items-center gap-2 text-green-600'>
          <Check className='h-4 w-4' />
          <span className='text-sm'>¡Cupón aplicado exitosamente!</span>
        </div>
      )}
      {couponError && !disabled && (
        <div className='flex items-center gap-2 text-red-600'>
          <X className='h-4 w-4' />
          <span className='text-sm'>{couponError}</span>
        </div>
      )}
    </div>
  )
})
