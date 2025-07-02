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
        <Body className='bg-white font-sans'>
          <Container className='mx-auto py-5 max-w-[600px]'>
            <EmailHeader />
            <div className='px-5'>{children}</div>
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
        <Column>
          <Img
            src='https://res.cloudinary.com/backswing/image/upload/v1692867886/backswing/logo/logo-black.svg'
            width='120'
            height='40'
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
