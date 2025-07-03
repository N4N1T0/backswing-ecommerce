import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Tailwind,
  Text
} from '@react-email/components'
import type React from 'react'

export function EmailWrapper({
  previewText,
  children
}: {
  previewText: string
  children: React.ReactNode
}) {
  return (
    <Html>
      <Head />
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: {
                  primary: '#000000',
                  secondary: '#666666',
                  accent: '#f9f9f9'
                }
              }
            }
          }
        }}
      >
        <Preview>{previewText}</Preview>
        <Body className='bg-gray-100 font-sans'>
          <Container
            className='mx-auto py-5 max-w-[600px]'
            style={{ border: '1px solid #e5e7eb' }}
          >
            <EmailHeader />
            <div className='px-5 py-2 bg-white'>{children}</div>
            <EmailFooter />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

function EmailHeader() {
  return (
    <Section className='py-5 text-center'>
      <Row>
        <Column align='center'>
          <Img
            src='https://backswing-ecommerce.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F82f78b35-02e0-4783-aa65-b1b40b34ed51.902bdb05.png&w=64&q=75&dpl=dpl_6WYhFqtuP9fUKpJ52YbxGBx1j9Kw'
            width='120'
            height='60'
            alt='Logo de Backswing'
            className='mx-auto mb-2'
          />
          <Heading className='text-black text-2xl font-bold m-0 text-center'>
            Backswing
          </Heading>
        </Column>
      </Row>
    </Section>
  )
}

function EmailFooter() {
  return (
    <Section className='py-8 px-5 text-center'>
      <Text className='text-gray-600 text-xs mb-2 m-0'>
        ¿Necesitas ayuda? Contacta con nuestro servicio de atención al cliente
      </Text>
      <Text className='text-black text-sm font-bold mb-4 m-0'>
        soporte@backswing.com | 600 123 456
      </Text>
      <Text className='text-gray-600 text-xs mb-4 m-0'>
        Visita nuestra tienda: https://backswing.com
      </Text>
      <Hr className='border-gray-300 my-4' />
      <Text className='text-gray-500 text-xs m-0'>
        © 2025 Backswing. Todos los derechos reservados.
      </Text>
    </Section>
  )
}
