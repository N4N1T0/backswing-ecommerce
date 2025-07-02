interface SupportInfoProps {
  email?: string
  phone?: string
}

export function SupportInfo({ email = "soporte@tienda.com", phone = "+34 900 123 456" }: SupportInfoProps) {
  return (
    <div className="mt-12 text-center">
      <p className="text-gray-600 text-sm mb-2">
        ¿Necesitas ayuda? Contacta con nuestro servicio de atención al cliente
      </p>
      <p className="text-black font-semibold">
        {email} | {phone}
      </p>
    </div>
  )
}
