import { UserRoundPlus } from 'lucide-react'
import { defineType, defineField } from 'sanity'

export const costumerType = defineType({
  name: 'costumer',
  title: 'Cliente',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Correo Electrónico',
      type: 'string',
      validation: (Rule) => Rule.required().email()
    }),
    defineField({
      name: 'firstName',
      title: 'Nombre',
      type: 'string'
    }),
    defineField({
      name: 'lastName',
      title: 'Apellido',
      type: 'string'
    }),
    defineField({
      name: 'password',
      title: 'Contraseña',
      type: 'string',
      readOnly: true
    }),
    defineField({
      name: 'userName',
      title: 'Nombre de Usuario',
      type: 'string'
    }),
    defineField({
      name: 'IdDocument',
      title: 'Documento de Identidad',
      type: 'string'
    }),
    defineField({
      name: 'companyName',
      title: 'Nombre de la Empresa (Opcional)',
      type: 'string'
    }),
    defineField({
      name: 'billingAddress',
      title: 'Dirección de Facturación',
      type: 'array',
      of: [{ type: 'address' }],
      validation: (Rule) => Rule.max(1)
    }),
    defineField({
      name: 'shippingAddresses',
      title: 'Direcciones de Envío',
      type: 'array',
      of: [{ type: 'address' }]
    }),
    defineField({
      name: 'isPayingCustomer',
      title: '¿Cliente a Comprado antes?',
      type: 'boolean'
    }),
    defineField({
      name: 'isGuest',
      title: '¿Es Invitado?',
      type: 'boolean',
      initialValue: true
    }),
    defineField({
      name: 'avatarUrl',
      title: 'Avatar',
      type: 'image',
      options: {
        hotspot: true
      }
    })
  ],
  preview: {
    select: {
      title: 'firstName',
      subtitle: 'email',
      media: 'avatarUrl',
      isGuest: 'isGuest'
    },
    prepare: ({ title, subtitle, media, isGuest }) => ({
      title,
      subtitle,
      media: isGuest ? UserRoundPlus : media
    })
  }
})
