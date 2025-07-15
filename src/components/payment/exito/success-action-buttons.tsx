'use client'

import { Button } from '@/components/ui/button'
import { GET_ORDER_BY_ID_Result } from '@/types'
import { Download, ShoppingBag, User } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function SuccessActionButtons({
  onDownloadPDF,
  user
}: {
  onDownloadPDF: () => void
  user: GET_ORDER_BY_ID_Result['user']
}) {
  const route = useRouter()
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
        <Button
          onClick={() => route.replace(`/perfil/${user._id}`)}
          variant='outline'
          className='h-14 border-2 border-black text-black hover:bg-gray-200 font-semibold hover:text-primary-foreground bg-transparent rounded-none'
        >
          <User className='w-5 h-5 mr-3' />
          Ir a Mi Perfil
        </Button>

        <Button
          onClick={() => route.replace('/')}
          variant='outline'
          className='h-14 border-2 border-black text-black hover:bg-gray-200 font-semibold hover:text-primary-foreground bg-transparent rounded-none'
        >
          <ShoppingBag className='w-5 h-5 mr-3' />
          Seguir Comprando
        </Button>
      </div>
    </div>
  )
}
