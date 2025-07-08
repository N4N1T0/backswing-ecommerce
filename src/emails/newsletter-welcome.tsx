import { NewsletterSchema } from '@/lib/schemas/login'
import {
  Column,
  Heading,
  Link,
  Row,
  Section,
  Text
} from '@react-email/components'
import { EmailWrapper } from './utils/email-wrapper'

export default function NewsletterWelcomeEmail({
  data
}: {
  data: NewsletterSchema
}) {
  // CONST
  const { email } = data
  const previewText = '¡Bienvenido al Newsletter de Backswing!'

  return (
    <EmailWrapper previewText={previewText}>
      {/* WELCOME HEADER */}
      <Section className='text-center py-10'>
        <Row
          className='w-20 h-20 bg-black text-white text-4xl font-bold mb-6 mx-auto'
          align='center'
        >
          <Column>📧</Column>
        </Row>
        <Heading className='text-black text-3xl font-bold mb-4 m-0'>
          ¡Bienvenido al Newsletter!
        </Heading>
        <Text className='text-gray-600 text-base leading-6 m-0'>
          Gracias por suscribirte a nuestro newsletter. ¡Disfruta de tu
          descuento del 20%!
        </Text>
      </Section>

      {/* SUBSCRIPTION DETAILS */}
      <Section className='mb-6'>
        <Heading className='text-black text-xl font-bold mb-4 m-0'>
          Tu Suscripción
        </Heading>
        <div className='border-2 border-black p-5 bg-white'>
          <Row className='mb-3'>
            <Column className='w-1/2'>
              <Text className='text-gray-600 text-sm m-0'>Email suscrito:</Text>
            </Column>
            <Column className='w-1/2 text-right'>
              <Text className='text-black text-sm font-bold m-0'>{email}</Text>
            </Column>
          </Row>
          <Row className='mb-3'>
            <Column className='w-1/2'>
              <Text className='text-gray-600 text-sm m-0'>Descuento:</Text>
            </Column>
            <Column className='w-1/2 text-right'>
              <Text className='text-black text-sm font-bold m-0'>20% OFF</Text>
            </Column>
          </Row>
        </div>
      </Section>

      {/* DISCOUNT SECTION */}
      <Section className='mb-6'>
        <Heading className='text-black text-xl font-bold mb-4 m-0'>
          Tu Descuento Exclusivo
        </Heading>
        <div className='border-2 border-black p-5 bg-white'>
          <Text className='text-black text-base mb-4 m-0'>
            Como nuevo suscriptor, tienes acceso a un descuento especial del 20%
            en tu primera compra.
          </Text>
          <Text className='text-gray-600 text-sm mb-2 m-0'>
            • Válido en toda la tienda
          </Text>
          <Text className='text-gray-600 text-sm mb-2 m-0'>
            • Aplicable en tu primera compra
          </Text>
          <Text className='text-gray-600 text-sm mb-4 m-0'>
            • No acumulable con otras ofertas
          </Text>
          <Column className='text-center mt-3'>
            <Link
              href={`${process.env.NEXT_PUBLIC_BASE_URL || 'https://backswing.com'}`}
              className='inline-block bg-black text-white px-6 py-3 text-base font-bold text-decoration-none border-2 border-black hover:bg-white hover:text-black transition-colors'
            >
              Comprar Ahora
            </Link>
          </Column>
        </div>
      </Section>

      {/* NEWSLETTER INFO */}
      <Section className='mb-8'>
        <div className='border-2 border-gray-300 p-4 bg-gray-50'>
          <Text className='text-black text-base font-bold mb-2 m-0'>
            ¿Qué puedes esperar?
          </Text>
          <Text className='text-gray-600 text-sm mb-2 m-0'>
            Recibirás información exclusiva sobre nuevos productos, ofertas
            especiales, consejos de padel y mucho más.
          </Text>
          <Text className='text-gray-600 text-sm mb-2 m-0'>
            <strong>Frecuencia:</strong> Máximo 2 emails por semana
          </Text>
          <Text className='text-gray-600 text-sm m-0'>
            <strong>¿Preguntas?</strong> Contacta con nosotros en
            soporte@backswing.com
          </Text>
        </div>
      </Section>
    </EmailWrapper>
  )
}

NewsletterWelcomeEmail.PreviewProps = {
  email: 'usuario@ejemplo.com'
}
