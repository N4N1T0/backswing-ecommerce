import { useEffect, useRef } from 'react'
import { RedirectForm } from 'redsys-easy'

export const RedsysPaymentForm = ({ form }: { form: RedirectForm | null }) => {
  const formRef = useRef<HTMLFormElement | null>(null)

  useEffect(() => {
    if (formRef.current && form !== null) {
      formRef.current.submit()
    }
  }, [form])

  if (!form) {
    return null
  }

  return (
    <form id='paymentForm' ref={formRef} action={form?.url} method='POST'>
      <input
        type='hidden'
        name='Ds_SignatureVersion'
        value={form?.body.Ds_SignatureVersion}
      />
      <input
        type='hidden'
        name='Ds_MerchantParameters'
        value={form?.body.Ds_MerchantParameters}
      />
      <input
        type='hidden'
        name='Ds_Signature'
        value={form?.body.Ds_Signature}
      />
    </form>
  )
}
