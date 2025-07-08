import { eurilize, getAccountAge, getStatusText, getTimeAgo } from '@/lib/utils'
import { GET_USER_PROFILE_WITH_ORDERSResult } from '@/sanity/types'
import useWishlist from '@/stores/wishlist-store'
import { Heart, Package, User } from 'lucide-react'
import Link from 'next/link'
import { buttonVariants } from '../ui/button'

export default function Dashboard({
  userProfile
}: {
  userProfile?: GET_USER_PROFILE_WITH_ORDERSResult
}) {
  const [wishlistItems] = useWishlist()

  const stats = [
    {
      label: 'Total de Pedidos',
      value: userProfile?.orders?.length?.toString() || '0',
      icon: Package
    },
    {
      label: 'Lista de Deseos',
      value: wishlistItems.length.toString(),
      icon: Heart
    },
    {
      label: 'Antigüedad de Cuenta',
      value: userProfile?._createdAt
        ? getAccountAge(userProfile._createdAt)
        : 'N/A',
      icon: User
    }
  ]

  return (
    <div className='space-y-8'>
      <div>
        <h2 className='text-xl font-semibold text-black mb-6'>
          Resumen de Cuenta
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {stats.map((stat) => (
            <div
              key={stat.label}
              className='border border-gray-200 p-6 bg-white'
            >
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-gray-600 text-sm'>{stat.label}</p>
                  <p className='text-2xl font-semibold text-black mt-1'>
                    {stat.value}
                  </p>
                </div>
                <stat.icon className='h-8 w-8 text-gray-400' />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className='text-lg font-semibold text-black mb-4'>
          Actividad Reciente de Pedidos
        </h3>
        <div className='border border-gray-200 bg-white'>
          {userProfile?.orders && userProfile.orders.length > 0 ? (
            <div className='divide-y divide-gray-200'>
              {userProfile.orders
                .sort(
                  (a, b) =>
                    new Date(b.purchaseDate).getTime() -
                    new Date(a.purchaseDate).getTime()
                )
                .slice(0, 3)
                .map(({ id, status, totalAmount, purchaseDate }) => {
                  const timeAgo = getTimeAgo(purchaseDate)
                  return (
                    <div
                      key={id}
                      className='p-4 flex justify-between items-center'
                    >
                      <div>
                        <p className='font-medium text-black'>
                          Pedido #{id.slice(-4)} {getStatusText(status)}
                        </p>
                        <p className='text-sm text-gray-600'>{timeAgo}</p>
                      </div>
                      <div className='flex items-center space-x-3'>
                        <span className='text-sm text-gray-500'>
                          {eurilize(totalAmount)}
                        </span>
                        <Link
                          href={`?tab=orders#${id}`}
                          className={buttonVariants()}
                        >
                          Ver Pedido
                        </Link>
                      </div>
                    </div>
                  )
                })}
            </div>
          ) : (
            <div className='p-8 text-center'>
              <Package className='h-12 w-12 text-gray-400 mx-auto mb-4' />
              <h4 className='text-lg font-medium text-black mb-2'>
                No hay pedidos recientes
              </h4>
              <p className='text-gray-600'>
                Cuando realices tu primer pedido, aparecerá aquí
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
