import { SquarePlaceholder } from '@/assets/placeholder'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { eurilize, formatDate, getStatusText } from '@/lib/utils'
import { GET_USER_PROFILE_WITH_ORDERSResult } from '@/sanity/types'
import {
  CheckCircle,
  Clock,
  CreditCard,
  MapPin,
  Package,
  Tag,
  Truck
} from 'lucide-react'
import Image from 'next/image'

export default function OrderCard({
  order
}: {
  order: GET_USER_PROFILE_WITH_ORDERSResult['orders'][number] & {
    billingAddress:
      | GET_USER_PROFILE_WITH_ORDERSResult['orders'][number]['shippingAddress']
      | undefined
  }
}) {
  // CONST
  const {
    id,
    purchaseDate,
    totalAmount,
    products,
    status,
    billingAddress,
    shippingAddress,
    paymentMethod,
    discountCoupon
  } = order

  // HELPER FUNCTIONS
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completado':
        return <CheckCircle className='h-5 w-5 text-green-600' />
      case 'procesando':
        return <Truck className='h-5 w-5 text-blue-600' />
      case 'pendiente':
        return <Clock className='h-5 w-5 text-yellow-600' />
      case 'cancelado':
        return <Package className='h-5 w-5 text-red-600' />
      default:
        return <Package className='h-5 w-5 text-gray-600' />
    }
  }

  const getTotalItems = (
    products: GET_USER_PROFILE_WITH_ORDERSResult['orders'][number]['products']
  ) => {
    return products.reduce((total, item) => total + item.quantity, 0)
  }
  return (
    <Card key={id} id={id}>
      {/* HEADER */}
      <CardHeader className='space-y-4 border-b'>
        <div className='flex justify-between items-start'>
          <div>
            <CardTitle>{id}</CardTitle>
            <CardDescription>
              Realizado el {formatDate(purchaseDate as string)}
            </CardDescription>
          </div>
          <div className='text-right'>
            <CardTitle>{eurilize(totalAmount.toFixed(2))}</CardTitle>
            <CardDescription>
              {getTotalItems(products)} artículos
            </CardDescription>
          </div>
        </div>

        <div className='flex justify-between items-center'>
          <div className='flex items-center space-x-2'>
            {getStatusIcon(status)}
            <span className='font-medium'>{getStatusText(status)}</span>
          </div>

          <div className='flex items-center space-x-4 text-sm text-muted-foreground'>
            <div className='flex items-center space-x-1'>
              <CreditCard className='h-4 w-4' />
              <span>{paymentMethod}</span>
            </div>
            {discountCoupon && (
              <div className='flex items-center space-x-1'>
                <Tag className='h-4 w-4' />
                <span>{discountCoupon}</span>
              </div>
            )}
          </div>
        </div>
      </CardHeader>

      {/* PRODUCTS */}
      <CardContent className='space-y-4 border-b pb-4'>
        <h4 className='font-medium'>Productos</h4>
        <div className='space-y-3'>
          {products.map(({ product, color, format, quantity }, index) => (
            <div key={index} className='flex items-center space-x-4'>
              <div className='w-12 h-12 bg-muted flex items-center justify-center'>
                <Image
                  src={product.featuredMedia?.url || SquarePlaceholder}
                  blurDataURL={
                    product.featuredMedia?.blur || SquarePlaceholder.blurDataURL
                  }
                  placeholder='blur'
                  alt={product.title}
                  width={48}
                  height={48}
                  className='object-cover w-full h-full'
                />
              </div>
              <div className='flex-1'>
                <p className='font-medium'>{product.title}</p>
                <div className='flex items-center space-x-4 text-sm text-muted-foreground'>
                  <span>Cantidad: {quantity}</span>
                  <span>Formato: {format}</span>
                  <span>Color: {color}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>

      {/* SHIPPING ADDRESS */}
      <CardFooter className='flex justify-between'>
        <div className='flex items-start space-x-2'>
          <MapPin className='h-4 w-4 text-muted-foreground mt-0.5' />
          <div>
            <p className='font-medium'>Dirección de Envío</p>
            <p className='text-sm text-muted-foreground'>
              {shippingAddress.address1} / {shippingAddress.address2}
              <br />
              {shippingAddress.city}, {shippingAddress.postcode}
            </p>
          </div>
        </div>
        {/* BILLING ADDRESS */}
        {billingAddress && (
          <div className='flex items-start space-x-2'>
            <MapPin className='h-4 w-4 text-muted-foreground mt-0.5' />
            <div>
              <p className='font-medium'>Dirección de Facturación</p>
              <p className='text-sm text-muted-foreground'>
                {billingAddress.address1} / {billingAddress.address2}
                <br />
                {billingAddress.city}, {billingAddress.postcode}
              </p>
            </div>
          </div>
        )}
      </CardFooter>
    </Card>
  )
}
