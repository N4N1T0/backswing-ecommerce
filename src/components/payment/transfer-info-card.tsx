import { Card, CardContent, CardHeader } from '@/components/ui/card'

export function TransferInfoCard() {
  return (
    <Card className='border border-black mb-8 pt-0'>
      <CardHeader className='bg-blue-600 text-gray-50 border-b pt-5 border-black'>
        <h2 className='text-xl font-semibold'>Información para la Transferencia</h2>
      </CardHeader>
      <CardContent className='p-6'>
        <div className='space-y-4'>
          <div>
            <p className='font-semibold text-black'>Instrucciones:</p>
            <p className='text-gray-600'>
              Por favor, realiza la transferencia a la siguiente cuenta bancaria y envía el comprobante a nuestro correo electrónico.
            </p>
          </div>
          <div>
            <p className='font-semibold text-black'>Beneficiario:</p>
            <p className='text-gray-600'>Backswing SL</p>
          </div>
          <div>
            <p className='font-semibold text-black'>IBAN:</p>
            <p className='text-gray-600'>ESXX XXXX XXXX XXXX XXXX XXXX</p>
          </div>
          <div>
            <p className='font-semibold text-black'>Concepto:</p>
            <p className='text-gray-600'>Pedido #12345</p>
          </div>
          <div>
            <p className='font-semibold text-black'>Correo para enviar el comprobante:</p>
            <p className='text-gray-600'>pagos@backswing.es</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}