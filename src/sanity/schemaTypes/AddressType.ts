import { defineType, defineField } from 'sanity'

export const addressType = defineType({
  name: 'address',
  title: 'Dirección',
  type: 'object',
  fields: [
    defineField({
      name: 'firstName',
      title: 'Nombre completo',
      type: 'string'
    }),
    defineField({
      name: 'address1',
      title: 'Dirección 1',
      type: 'string'
    }),
    defineField({
      name: 'address2',
      title: 'Dirección 2',
      type: 'string'
    }),
    defineField({
      name: 'city',
      title: 'Ciudad',
      type: 'string'
    }),
    defineField({
      name: 'postcode',
      title: 'Código Postal',
      type: 'string'
    }),
    defineField({
      name: 'state',
      title: 'Estado/Provincia',
      type: 'string'
    }),
    defineField({
      name: 'email',
      title: 'Correo Electrónico',
      type: 'string'
    }),
    defineField({
      name: 'phone',
      title: 'Teléfono',
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
      name: 'createdAt',
      title: 'Fecha de Creación',
      type: 'datetime',
      readOnly: true
    })
  ],
  preview: {
    select: {
      title: 'address1',
      subtitle: 'firstName'
    }
  }
})
