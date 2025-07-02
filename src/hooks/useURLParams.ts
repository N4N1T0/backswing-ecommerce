'use client'

import { useSearchParams } from 'next/navigation'
import { useMemo } from 'react'

export interface URLParams {
  userId?: string
  hasShippingAddress?: boolean
}

export function useURLParams(): URLParams {
  const searchParams = useSearchParams()
  console.log('🚀 ~ useURLParams ~ searchParams:', searchParams)

  return useMemo(() => {
    const userId = searchParams.get('userId')
    const hasShippingAddress = searchParams.get('hasShippingAddress') === 'true'

    return {
      userId: userId || undefined,
      hasShippingAddress
    }
  }, [searchParams])
}
