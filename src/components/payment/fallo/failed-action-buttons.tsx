'use client'

import { Button, buttonVariants } from '@/components/ui/button'
import { CreditCard, RefreshCw, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export function FailedActionButtons() {
  const router = useRouter()
  return (
    <div className='space-y-4'>
      <Button
        variant='outline'
        onClick={() => router.replace('/checkout')}
        className='h-14 bg-red-600 text-white hover:bg-red-700 border-2 border-red-600 font-semibold text-lg w-full rounded-none'
      >
        <CreditCard className='w-5 h-5 mr-3' />
        Reintentar Pago
      </Button>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <Link
          href='/tel:1133333333'
          className={buttonVariants({
            variant: 'outline',
            className:
              'h-14 border-2 border-black text-black hover:bg-gray-50 font-semibold text-lg bg-transparent rounded-none'
          })}
        >
          <RefreshCw className='w-5 h-5 mr-3' />
          Contactar Soporte
        </Link>

        <Button
          onClick={() => router.replace('/')}
          variant='outline'
          className='h-14 border-2 border-black text-black hover:bg-gray-50 font-semibold text-lg bg-transparent rounded-none'
        >
          <ShoppingBag className='w-5 h-5 mr-3' />
          Seguir Comprando
        </Button>
      </div>
    </div>
  )
}
