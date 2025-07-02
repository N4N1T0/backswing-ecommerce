'use client'

import { Button, buttonVariants } from '@/components/ui/button'
import { GET_ORDER_BY_ID_Result } from '@/types'
import { Download, ShoppingBag, User } from 'lucide-react'
import Link from 'next/link'

export function SuccessActionButtons({
  onDownloadPDF,
  user
}: {
  onDownloadPDF: () => void
  user: GET_ORDER_BY_ID_Result['user']
}) {
  return (
    <div className='space-y-4'>
      <Button
        onClick={onDownloadPDF}
        className='w-full h-14 bg-green-600 text-white hover:bg-green-400 font-semibold text-lg'
        style={{ borderRadius: 0 }}
      >
        <Download className='w-5 h-5 mr-3' />
        Descargar Recibo PDF
      </Button>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <Link
          href={`/perfil/${user._id}`}
          className={buttonVariants({
            variant: 'outline',
            className:
              'h-14 border-2 border-black text-black hover:bg-gray-50 font-semibold text-lg bg-transparent rounded-none'
          })}
        >
          <User className='w-5 h-5 mr-3' />
          Ir a Mi Perfil
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
