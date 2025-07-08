'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { GET_USER_PROFILE_WITH_ORDERSResult } from '@/sanity/types'
import { useRouter, useSearchParams } from 'next/navigation'
import Dashboard from './dashboard'
import OrderList from './orders-summary'
import Wishlist from './wishlist'

export default function ProfileContent({
  userProfile
}: {
  userProfile?: GET_USER_PROFILE_WITH_ORDERSResult
}) {
  // STATES
  const router = useRouter()
  const searchParams = useSearchParams()
  const activeTab = searchParams.get('tab') || 'dashboard'

  // HANDLERS
  const handleTabChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('tab', value)
    router.push(`?${params.toString()}`)
  }

  return (
    <Tabs value={activeTab} onValueChange={handleTabChange} className='w-full'>
      <TabsList className='grid w-full grid-cols-3 rounded-none bg-gray-200 p-1 h-auto'>
        <TabsTrigger
          value='dashboard'
          className='rounded-none py-3 px-4 text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-none border-gray-300 border-r-0'
        >
          Panel
        </TabsTrigger>
        <TabsTrigger
          value='orders'
          className='rounded-none py-3 px-4 text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-none border-gray-300 border-r-0'
        >
          Pedidos
        </TabsTrigger>
        <TabsTrigger
          value='wishlist'
          className='rounded-none py-3 px-4 text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-none border-r border-gray-300'
        >
          Lista de Deseos
        </TabsTrigger>
      </TabsList>

      <div className='mt-8'>
        <TabsContent value='dashboard' className='mt-0'>
          <Dashboard userProfile={userProfile} />
        </TabsContent>

        <TabsContent value='orders' className='mt-0'>
          <OrderList
            orders={userProfile?.orders || []}
            billingAddress={userProfile?.billingAddress}
          />
        </TabsContent>

        <TabsContent value='wishlist' className='mt-0'>
          <Wishlist />
        </TabsContent>
      </div>
    </Tabs>
  )
}
