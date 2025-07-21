import { Card, CardContent, CardHeader } from '@/components/ui/card'

export function TransferInfoCard({ orderId }: { orderId: string }) {
  return (
    <Card className='border border-black mb-8 pt-0'>
      <CardHeader className='bg-blue-600 text-gray-50 border-b pt-5 border-black'>
        <h2 className='text-xl font-semibold'>
          Información para la Transferencia
        </h2>
      </CardHeader>
      <CardContent className='p-6'>
        <div className='space-y-4'>
          <div>
            <p className='font-semibold text-black'>Instrucciones:</p>
            <p className='text-gray-600'>
              Por favor, realiza la transferencia a la siguiente cuenta bancaria
              y envía el comprobante a nuestro correo electrónico.
            </p>
          </div>
          <div>
            <p className='font-semibold text-black'>Beneficiario:</p>
            <p className='text-gray-600'>Backswing SL</p>
          </div>
          <div>
            <p className='font-semibold text-black'>Banco:</p>
            <p className='text-gray-600'>Santander</p>
          </div>
          <div>
            <p className='font-semibold text-black'>IBAN:</p>
            <p className='text-gray-600'>ES96 0049 1482 4621 1196 8577</p>
          </div>
          <div>
            <p className='font-semibold text-black'>Concepto:</p>
            <p className='text-gray-600'>Pedido {orderId}</p>
          </div>
          <div>
            <p className='font-semibold text-black'>
              Correo para enviar el comprobante:
            </p>
            <p className='text-gray-600'>info@backswingpadel.com</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
