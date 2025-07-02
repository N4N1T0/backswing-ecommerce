import { eurilize, formatDate } from '@/lib/utils'
import { OrderByWebhook } from '@/types'
import {
  Body,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Row,
  Section,
  Text
} from '@react-email/components'
import { EmailWrapper } from './utils/email-wrapper'

export default function PurchaseConfirmationEmail({
  order
}: {
  order: OrderByWebhook
}) {
  // CONST
  const previewText = `¡Tu pedido #${order.orderNumber} ha sido confirmado!`
  const subtotal = order.products.reduce(
    (sum, { price, offer, quantity }) =>
      sum +
      ((offer as number | undefined) || (price as number | undefined) || 0) *
        (quantity as number),
    0
  )

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <EmailWrapper previewText={previewText}>
          {/* SUCCESS HEADER */}
          <Section className='text-center py-10'>
            <div className='inline-flex items-center justify-center w-20 h-20 bg-black text-white text-4xl font-bold mb-6 mx-auto'>
              ✓
            </div>
            <Heading className='text-black text-3xl font-bold mb-4 m-0'>
              Pedido Confirmado
            </Heading>
            <Text className='text-gray-600 text-base leading-6 m-0'>
              Gracias por tu compra. Tu pedido ha sido procesado exitosamente.
            </Text>
          </Section>

          {/* ORDER DETAILS */}
          <Section className='mb-8'>
            <Heading className='text-black text-xl font-bold mb-4 m-0'>
              Detalles del Pedido
            </Heading>
            <div className='border-2 border-black p-5 bg-white'>
              <Row className='mb-3'>
                <Column className='w-1/2'>
                  <Text className='text-gray-600 text-sm m-0'>
                    Número de Pedido:
                  </Text>
                </Column>
                <Column className='w-1/2 text-right'>
                  <Text className='text-black text-sm font-bold m-0'>
                    #{order.orderNumber}
                  </Text>
                </Column>
              </Row>
              <Row className='mb-3'>
                <Column className='w-1/2'>
                  <Text className='text-gray-600 text-sm m-0'>Fecha:</Text>
                </Column>
                <Column className='w-1/2 text-right'>
                  <Text className='text-black text-sm font-bold m-0'>
                    {formatDate(order.purchaseDate)}
                  </Text>
                </Column>
              </Row>
              <Row className='mb-3'>
                <Column className='w-1/2'>
                  <Text className='text-gray-600 text-sm m-0'>
                    Método de Pago:
                  </Text>
                </Column>
                <Column className='w-1/2 text-right'>
                  <Text className='text-black text-sm font-bold m-0'>
                    {order.gateway}
                  </Text>
                </Column>
              </Row>
            </div>
          </Section>

          {/* ORDER PRODUCTS */}
          <Section className='mb-8'>
            <Heading className='text-black text-xl font-bold mb-4 m-0'>
              Productos
            </Heading>
            <div className='border-2 border-black p-5 bg-white'>
              {order.products.map(
                (
                  { _id, title, price, format, color, quantity, offer },
                  index
                ) => {
                  const formattedPrice = (offer ? offer : price) as number
                  return (
                    <div key={_id}>
                      <div className='py-4'>
                        <Row>
                          <Column className='w-3/5'>
                            <Text className='text-black text-base font-bold mb-2 m-0'>
                              {title as string}
                            </Text>
                            <Text className='text-gray-600 text-sm mb-1 m-0'>
                              Formato: {format as string}
                            </Text>
                            <Text className='text-gray-600 text-sm mb-1 m-0'>
                              Color: {color as string}
                            </Text>
                            <Text className='text-gray-600 text-sm m-0'>
                              Cantidad: {quantity as number}
                            </Text>
                          </Column>
                          <Column className='w-2/5 text-right'>
                            <Text className='text-black text-base font-bold mb-1 m-0'>
                              {eurilize(
                                (formattedPrice || 0) * (quantity as number)
                              )}
                            </Text>
                            <Text className='text-gray-600 text-xs m-0'>
                              c/u {eurilize(formattedPrice || 0)}
                            </Text>
                          </Column>
                        </Row>
                      </div>
                      {index < order.products.length - 1 && (
                        <Hr className='border-gray-200 my-0' />
                      )}
                    </div>
                  )
                }
              )}
            </div>
          </Section>

          {/* ORDER SUMMARY */}
          <Section className='mb-8'>
            <div className='border-2 border-black p-5 bg-white'>
              <Row className='mb-2'>
                <Column>
                  <Text className='text-gray-600 text-sm m-0'>Subtotal:</Text>
                </Column>
                <Column className='text-right'>
                  <Text className='text-black text-sm m-0'>
                    {eurilize(subtotal)}
                  </Text>
                </Column>
              </Row>

              {order.discountCoupon && (
                <Row className='mb-2'>
                  <Column>
                    <Text className='text-green-600 text-sm m-0'>
                      Descuento ({order.discountCoupon.code}):
                    </Text>
                  </Column>
                  <Column className='text-right'>
                    <Text className='text-green-600 text-sm m-0'>
                      -{eurilize(order.discountCoupon.discount)}
                    </Text>
                  </Column>
                </Row>
              )}

              <Hr className='border-gray-300 my-4' />

              <Row className='mt-4'>
                <Column>
                  <Text className='text-black text-lg font-bold m-0'>
                    Total:
                  </Text>
                </Column>
                <Column className='text-right'>
                  <Text className='text-black text-lg font-bold m-0'>
                    {eurilize(order.totalAmount)}
                  </Text>
                </Column>
              </Row>
            </div>
          </Section>

          {/* ADDRESS */}
          <Section className='mb-8'>
            <Row>
              {order.shippingAddress && (
                <Column className='w-1/2 pr-2'>
                  <Heading className='text-black text-base font-bold mb-3 m-0'>
                    Dirección de Envío
                  </Heading>
                  <div className='border-2 border-black p-4 bg-gray-50'>
                    <Text className='text-black text-sm font-bold mb-2 m-0'>
                      {order.user.firstName || order.user.email}
                    </Text>
                    <Text className='text-gray-600 text-sm mb-1 m-0'>
                      {order.shippingAddress.address1}
                    </Text>
                    <Text className='text-gray-600 text-sm mb-1 m-0'>
                      {order.shippingAddress.address2}
                    </Text>
                    <Text className='text-gray-600 text-sm mb-1 m-0'>
                      {order.shippingAddress.postcode}{' '}
                      {order.shippingAddress.city}
                    </Text>
                    <Text className='text-gray-600 text-sm mb-1 m-0'>
                      España
                    </Text>
                    {order.shippingAddress.phone && (
                      <Text className='text-gray-600 text-sm m-0'>
                        Tel: {order.shippingAddress.phone}
                      </Text>
                    )}
                  </div>
                </Column>
              )}

              {/* Billing Address */}
              {order.user.billingAddress && (
                <Column className='w-1/2 pl-2'>
                  <Heading className='text-black text-base font-bold mb-3 m-0'>
                    Dirección de Facturación
                  </Heading>
                  <div className='border-2 border-black p-4 bg-gray-50'>
                    <Text className='text-black text-sm font-bold mb-2 m-0'>
                      {order.user.firstName ||
                        order.user.lastName ||
                        order.user.email}
                    </Text>
                    <Text className='text-gray-600 text-sm mb-1 m-0'>
                      {order.user.billingAddress.address1}
                    </Text>
                    <Text className='text-gray-600 text-sm mb-1 m-0'>
                      {order.user.billingAddress.address2}
                    </Text>
                    <Text className='text-gray-600 text-sm mb-1 m-0'>
                      {order.user.billingAddress.postcode}{' '}
                      {order.user.billingAddress.city}
                    </Text>
                    <Text className='text-gray-600 text-sm mb-1 m-0'>
                      España
                    </Text>
                    {order.user.billingAddress.phone && (
                      <Text className='text-gray-600 text-sm m-0'>
                        Tel: {order.user.billingAddress.phone}
                      </Text>
                    )}
                  </div>
                </Column>
              )}
            </Row>
          </Section>

          {/* DELIVERY */}
          <Section className='mb-8'>
            <div className='border-2 border-gray-300 p-4 bg-gray-50'>
              <Text className='text-black text-base font-bold mb-2 m-0'>
                Información de Entrega
              </Text>
              <Text className='text-gray-600 text-sm mb-1 m-0'>
                <strong>Tiempo estimado de entrega:</strong> 3-5 días laborables
              </Text>
              <Text className='text-gray-600 text-sm m-0'>
                Recibirás un email con el número de seguimiento una vez que tu
                pedido sea enviado.
              </Text>
            </div>
          </Section>
        </EmailWrapper>
      </Body>
    </Html>
  )
}

// Styles
const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
}
