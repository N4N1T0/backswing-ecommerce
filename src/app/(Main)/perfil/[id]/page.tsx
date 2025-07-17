import { auth } from '@/auth'
import ProfileContent from '@/components/profile'
import { sanityClientRead } from '@/sanity/lib/client'
import { GET_USER_PROFILE_WITH_ORDERS } from '@/sanity/queries'
import { SearchParamsProfileType } from '@/types'
import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Perfil de Usuario'
}

export default async function ProfilePage({
  params
}: {
  params: SearchParamsProfileType
}) {
  const { id } = await params
  const session = await auth()

  const userProfile = await sanityClientRead.fetch(
    GET_USER_PROFILE_WITH_ORDERS,
    {
      customerId: id
    }
  )

  if (!userProfile || !session || session.user?.id !== id) {
    redirect('/')
  }

  return (
    <main className='min-h-screen bg-white'>
      <div className='max-w-6xl mx-auto px-4 py-8'>
        <div className='border-b border-gray-200 pb-6 mb-8'>
          <h1 className='text-2xl font-semibold text-black'>Mi Cuenta</h1>
          <p className='text-gray-600 mt-1'>
            Gestiona tu cuenta y preferencias
          </p>
        </div>

        <Suspense fallback={<div className='text-gray-500'>Cargando...</div>}>
          <ProfileContent userProfile={userProfile} />
        </Suspense>
      </div>
    </main>
  )
}
