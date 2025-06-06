import { defineType, defineField } from 'sanity'
import { getIconForCart } from '@/sanity/lib/utils'

export const wishlistType = defineType({
  name: 'wishlistType',
  title: 'Listas de Deseos',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Correo Electrónico',
      type: 'string',
      description: 'Dirección de correo electrónico del cliente'
    }),
    defineField({
      name: 'createdAt',
      title: 'Fecha de Creación',
      type: 'datetime',
      description: 'Fecha y hora cuando se creó el carrito abandonado'
    }),
    defineField({
      name: 'hasOffer',
      title: 'Oferta',
      type: 'boolean',
      description: 'Tiene Oferta en los Productos',
      initialValue: false
    }),
    defineField({
      name: 'status',
      title: 'Estado de la Lista de Deseos',
      type: 'string',
      options: {
        list: [
          { title: 'Esperando', value: 'esperando' },
          { title: 'Completado', value: 'completado' },
          { title: 'Enviado', value: 'enviado' }
        ]
      },
      initialValue: 'esperando',
      description: 'El estado actual de la compra.'
    })
  ],
  preview: {
    select: {
      title: 'email',
      subtitle: 'createdAt',
      media: 'status'
    } as Record<string, string>,
    prepare(selection) {
      const { title, subtitle, media } = selection
      return {
        title: title,
        subtitle: new Date(subtitle).toLocaleString('es-ES'),
        media: getIconForCart(media)
      }
    }
  }
})
