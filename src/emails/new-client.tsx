import {
  Column,
  Heading,
  Link,
  Row,
  Section,
  Text
} from '@react-email/components'
import { EmailWrapper } from './utils/email-wrapper'

export default function NewClientEmail({
  email,
  firstName
}: {
  email: string
  firstName?: string
}) {
  // CONST
  const previewText = '¡Bienvenido a Backswing!'

  return (
    <EmailWrapper previewText={previewText}>
      {/* WELCOME HEADER */}
      <Section className='text-center py-10'>
        <Row
          className='w-20 h-20 bg-black text-white text-4xl font-bold mb-6 mx-auto'
          align='center'
        >
          <Column>👋</Column>
        </Row>
        <Heading className='text-black text-3xl font-bold mb-4 m-0'>
          ¡Bienvenido a Backswing!
        </Heading>
        <Text className='text-gray-600 text-base leading-6 m-0'>
          Gracias por unirte a nuestra comunidad. Estamos emocionados de tenerte
          con nosotros.
        </Text>
      </Section>

      {/* ACCOUNT DETAILS */}
      <Section className='mb-6'>
        <Heading className='text-black text-xl font-bold mb-4 m-0'>
          Tu Cuenta
        </Heading>
        <div className='border-2 border-black p-5 bg-white'>
          <Row className='mb-3'>
            <Column className='w-1/2'>
              <Text className='text-gray-600 text-sm m-0'>
                Email registrado:
              </Text>
            </Column>
            <Column className='w-1/2 text-right'>
              <Text className='text-black text-sm font-bold m-0'>{email}</Text>
            </Column>
          </Row>
          {firstName && (
            <Row className='mb-3'>
              <Column className='w-1/2'>
                <Text className='text-gray-600 text-sm m-0'>Nombre:</Text>
              </Column>
              <Column className='w-1/2 text-right'>
                <Text className='text-black text-sm font-bold m-0'>
                  {firstName}
                </Text>
              </Column>
            </Row>
          )}
        </div>
      </Section>

      {/* NEXT STEPS */}
      <Section className='mb-6'>
        <Heading className='text-black text-xl font-bold mb-4 m-0'>
          Próximos Pasos
        </Heading>
        <div className='border-2 border-black p-5 bg-white'>
          <Text className='text-black text-base mb-4 m-0'>
            Ahora que eres parte de Backswing, puedes:
          </Text>
          <Text className='text-gray-600 text-sm mb-2 m-0'>
            • Explorar nuestra colección completa de productos
          </Text>
          <Text className='text-gray-600 text-sm mb-2 m-0'>
            • Personalizar tu perfil y preferencias
          </Text>
          <Text className='text-gray-600 text-sm mb-4 m-0'>
            • Recibir ofertas exclusivas y novedades
          </Text>
          <Column className='text-center mt-3'>
            <Link
              href={`${process.env.NEXT_PUBLIC_BASE_URL || 'https://backswing.com'}`}
              className='inline-block bg-black text-white px-6 py-3 text-base font-bold text-decoration-none border-2 border-black hover:bg-white hover:text-black transition-colors'
            >
              Explorar Tienda
            </Link>
          </Column>
        </div>
      </Section>

      {/* WELCOME MESSAGE */}
      <Section className='mb-8'>
        <div className='border-2 border-gray-300 p-4 bg-gray-50'>
          <Text className='text-black text-base font-bold mb-2 m-0'>
            ¡Gracias por elegir Backswing!
          </Text>
          <Text className='text-gray-600 text-sm mb-2 m-0'>
            Estamos aquí para ayudarte en cada paso del camino. Si tienes alguna
            pregunta o necesitas asistencia, no dudes en contactarnos.
          </Text>
          <Text className='text-black text-sm font-bold m-0'>
            Email: soporte@backswing.com | Teléfono: 600 123 456
          </Text>
        </div>
      </Section>
    </EmailWrapper>
  )
}

NewClientEmail.PreviewProps = {
  email: 'nuevo@ejemplo.com',
  firstName: 'María'
}
