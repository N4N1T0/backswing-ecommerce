import { defineField, defineType } from 'sanity'

export const shippingType = defineType({
  name: 'shipping',
  title: 'Configuración de Envío',
  type: 'document',
  fields: [
    defineField({
      name: 'amount',
      title: 'Costo de Envío',
      type: 'number',
      description: 'Costo del envío en euros',
      validation: (Rule) => Rule.required().min(0)
    }),
    defineField({
      name: 'freeCartTotal',
      title: 'Total para Envío Gratis',
      type: 'number',
      description: 'Monto mínimo del carrito para envío gratuito en euros',
      validation: (Rule) => Rule.required().min(0)
    }),
    defineField({
      name: 'isActive',
      title: 'Activo',
      type: 'boolean',
      description: 'Indica si esta configuración de envío está activa',
      initialValue: true
    })
  ]
})
