import PurchaseConfirmationEmail from '@/emails/completed-purchase'
import { resendClient } from '@/lib/clients/resend'
import { NextRequest, NextResponse } from 'next/server'

export const POST = async (req: NextRequest) => {
  if (req.headers.get('x-secret') !== process.env.SECRET_KEY) {
    return NextResponse.json(
      { error: 'Unauthorized. Please check your secret key.' },
      { status: 401 }
    )
  }
  try {
    const data = await req.json()
    console.log('🚀 ~ POST ~ data:', data)

    await resendClient.emails.send({
      from: 'compra-realizada@backswingpadel.com',
      // bcc: 'info@backswingpadel.com',
      to: data.user?.email as string,
      subject: 'Orden Completada',
      react: PurchaseConfirmationEmail({
        order: data
      })
    })

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
