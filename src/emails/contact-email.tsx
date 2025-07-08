import { ContactFormSchema } from '@/lib/schemas/login'
import { Column, Heading, Row, Section, Text } from '@react-email/components'
import { EmailWrapper } from './utils/email-wrapper'

export default function ContactEmail({ data }: { data: ContactFormSchema }) {
  // CONST
  const { nombre, email, asunto, mensaje } = data
  const previewText = `Nuevo mensaje de contacto de ${nombre}`

  return (
    <EmailWrapper previewText={previewText}>
      {/* CONTACT HEADER */}
      <Section className='text-center py-10'>
        <Row
          className='w-20 h-20 bg-black text-white text-4xl font-bold mb-6 mx-auto'
          align='center'
        >
          <Column>📧</Column>
        </Row>
        <Heading className='text-black text-3xl font-bold mb-4 m-0'>
          Nuevo Mensaje de Contacto
        </Heading>
        <Text className='text-gray-600 text-base leading-6 m-0'>
          Has recibido un nuevo mensaje a través del formulario de contacto.
        </Text>
      </Section>

      {/* CONTACT DETAILS */}
      <Section className='mb-6'>
        <Heading className='text-black text-xl font-bold mb-4 m-0'>
          Información del Contacto
        </Heading>
        <div className='border-2 border-black p-5 bg-white'>
          <Row className='mb-3'>
            <Column className='w-1/3'>
              <Text className='text-gray-600 text-sm m-0'>Nombre:</Text>
            </Column>
            <Column className='w-2/3 text-right'>
              <Text className='text-black text-sm font-bold m-0'>{nombre}</Text>
            </Column>
          </Row>
          <Row className='mb-3'>
            <Column className='w-1/3'>
              <Text className='text-gray-600 text-sm m-0'>Email:</Text>
            </Column>
            <Column className='w-2/3 text-right'>
              <Text className='text-black text-sm font-bold m-0'>{email}</Text>
            </Column>
          </Row>
          <Row className='mb-3'>
            <Column className='w-1/3'>
              <Text className='text-gray-600 text-sm m-0'>Asunto:</Text>
            </Column>
            <Column className='w-2/3 text-right'>
              <Text className='text-black text-sm font-bold m-0'>{asunto}</Text>
            </Column>
          </Row>
        </div>
      </Section>

      {/* MESSAGE CONTENT */}
      <Section className='mb-6'>
        <Heading className='text-black text-xl font-bold mb-4 m-0'>
          Mensaje
        </Heading>
        <div className='border-2 border-black p-5 bg-white'>
          <Text className='text-black text-base leading-6 m-0 whitespace-pre-wrap'>
            {mensaje}
          </Text>
        </div>
      </Section>

      {/* RESPONSE INFO */}
      <Section className='mb-8'>
        <div className='border-2 border-gray-300 p-4 bg-gray-50'>
          <Text className='text-black text-base font-bold mb-2 m-0'>
            Información de Respuesta
          </Text>
          <Text className='text-gray-600 text-sm mb-2 m-0'>
            Puedes responder directamente a este email para contactar con{' '}
            {nombre}.
          </Text>
          <Text className='text-gray-600 text-sm m-0'>
            <strong>Email de respuesta:</strong> {email}
          </Text>
        </div>
      </Section>
    </EmailWrapper>
  )
}

ContactEmail.PreviewProps = {
  nombre: 'Juan Pérez',
  email: 'juan@ejemplo.com',
  asunto: 'Consulta sobre productos',
  mensaje:
    'Hola, me gustaría obtener más información sobre sus productos de golf. Específicamente estoy interesado en los palos de golf para principiantes.\n\nGracias por su tiempo.'
}
