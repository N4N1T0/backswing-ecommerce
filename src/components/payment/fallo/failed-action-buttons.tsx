'use client'

import { buttonVariants } from '@/components/ui/button'
import { CreditCard, RefreshCw, ShoppingBag } from 'lucide-react'
import Link from 'next/link'

export function FailedActionButtons() {
  return (
    <div className='space-y-4'>
      <Link
        href='/checkout'
        className={buttonVariants({
          variant: 'outline',
          className:
            'h-14 bg-red-600 text-white hover:bg-red-700 border-2 border-red-600 font-semibold text-lg w-full rounded-none'
        })}
      >
        <CreditCard className='w-5 h-5 mr-3' />
        Reintentar Pago
      </Link>

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

        <Link
          href='/'
          className={buttonVariants({
            variant: 'outline',
            className:
              'h-14 border-2 border-black text-black hover:bg-gray-50 font-semibold text-lg bg-transparent rounded-none'
          })}
        >
          <ShoppingBag className='w-5 h-5 mr-3' />
          Seguir Comprando
        </Link>
      </div>
    </div>
  )
}
