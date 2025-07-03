import {
  Column,
  Heading,
  Link,
  Row,
  Section,
  Text
} from '@react-email/components'
import { EmailWrapper } from './utils/email-wrapper'

export default function PasswordResetEmail({
  email,
  token
}: {
  email: string
  token: string
}) {
  // CONST
  const previewText = 'Restablece tu contraseña de Backswing'
  const resetUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'https://backswing.com'}/reset-password?token=${token}`

  return (
    <EmailWrapper previewText={previewText}>
      {/* RESET HEADER */}
      <Section className='text-center py-10'>
        <Row
          className='w-20 h-20 bg-black text-white text-4xl font-bold mb-6 mx-auto'
          align='center'
        >
          <Column>🔑</Column>
        </Row>
        <Heading className='text-black text-3xl font-bold mb-4 m-0'>
          Restablecer Contraseña
        </Heading>
        <Text className='text-gray-600 text-base leading-6 m-0'>
          Hemos recibido una solicitud para restablecer tu contraseña.
        </Text>
      </Section>

      {/* ACCOUNT DETAILS */}
      <Section className='mb-6'>
        <Heading className='text-black text-xl font-bold mb-4 m-0'>
          Detalles de la Cuenta
        </Heading>
        <div className='border-2 border-black p-5 bg-white'>
          <Row className='mb-3'>
            <Column className='w-1/2'>
              <Text className='text-gray-600 text-sm m-0'>
                Email de la cuenta:
              </Text>
            </Column>
            <Column className='w-1/2 text-right'>
              <Text className='text-black text-sm font-bold m-0'>{email}</Text>
            </Column>
          </Row>
          <Row className='mb-3'>
            <Column className='w-1/2'>
              <Text className='text-gray-600 text-sm m-0'>Solicitud:</Text>
            </Column>
            <Column className='w-1/2 text-right'>
              <Text className='text-black text-sm font-bold m-0'>
                Restablecer contraseña
              </Text>
            </Column>
          </Row>
        </div>
      </Section>

      {/* RESET BUTTON */}
      <Section className='mb-6 text-center'>
        <div className='border-2 border-black p-6 bg-white'>
          <Text className='text-black text-base mb-4 m-0'>
            Haz clic en el botón de abajo para restablecer tu contraseña:
          </Text>
          <Link
            href={resetUrl}
            className='inline-block bg-black text-white px-8 py-4 text-base font-bold text-decoration-none border-2 border-black hover:bg-white hover:text-black transition-colors'
          >
            Restablecer Contraseña
          </Link>
          <Text className='text-gray-600 text-sm mt-4 m-0'>
            O copia y pega este enlace en tu navegador:
          </Text>
          <Text className='text-blue-600 text-sm mt-2 m-0 break-all'>
            {resetUrl}
          </Text>
        </div>
      </Section>

      {/* SECURITY INFO */}
      <Section className='mb-6'>
        <div className='border-2 border-gray-300 p-4 bg-gray-50'>
          <Text className='text-black text-base font-bold mb-2 m-0'>
            Información de Seguridad
          </Text>
          <Text className='text-gray-600 text-sm mb-2 m-0'>
            <strong>Tiempo de validez:</strong> Este enlace expirará en 1 hora
            por motivos de seguridad.
          </Text>
          <Text className='text-gray-600 text-sm mb-2 m-0'>
            <strong>¿No solicitaste esto?</strong> Si no solicitaste restablecer
            tu contraseña, puedes ignorar este email de forma segura.
          </Text>
          <Text className='text-gray-600 text-sm m-0'>
            <strong>Consejo de seguridad:</strong> Nunca compartas este enlace
            con nadie y asegúrate de crear una contraseña segura.
          </Text>
        </div>
      </Section>

      {/* HELP SECTION */}
      <Section className='mb-8'>
        <div className='border-2 border-black p-5 bg-white'>
          <Heading className='text-black text-lg font-bold mb-3 m-0'>
            ¿Necesitas Ayuda?
          </Heading>
          <Text className='text-gray-600 text-sm mb-2 m-0'>
            Si tienes problemas para restablecer tu contraseña o no puedes
            acceder al enlace, contacta con nuestro equipo de soporte.
          </Text>
          <Text className='text-black text-sm font-bold m-0'>
            Email: soporte@backswing.com | Teléfono: 600 123 456
          </Text>
        </div>
      </Section>
    </EmailWrapper>
  )
}

PasswordResetEmail.PreviewProps = {
  email: 'usuario@ejemplo.com',
  token: 'sample-reset-token-123456789'
}
