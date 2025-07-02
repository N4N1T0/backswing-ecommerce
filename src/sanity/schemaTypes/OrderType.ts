import { getIconForOrder } from '@/sanity/lib/utils'
import { defineField, defineType } from 'sanity'

export const orderType = defineType({
  name: 'order',
  title: 'Orden de Compra',
  type: 'document',
  fields: [
    defineField({
      name: 'userEmail',
      title: 'Correo Electrónico del Usuario',
      type: 'reference',
      to: [{ type: 'costumer' }],
      description:
        'Referencia al correo electrónico del usuario asociado a esta compra.'
    }),
    defineField({
      name: 'products',
      title: 'Productos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'product',
              title: 'Producto',
              type: 'reference',
              to: [{ type: 'productDesigns' }],
              description: 'El producto comprado.'
            }),
            defineField({
              name: 'quantity',
              title: 'Cantidad',
              type: 'number',
              description: 'Cantidad del producto comprado.'
            }),
            defineField({
              name: 'format',
              title: 'Formato',
              type: 'string',
              description: 'Formato del producto.'
            }),
            defineField({
              name: 'color',
              title: 'Color',
              type: 'string',
              description: 'Color del producto.'
            })
          ],
          preview: {
            select: {
              title: 'product.title',
              subtitle: 'quantity',
              media: 'product.featuredMedia'
            },
            prepare(value) {
              const { title, subtitle, media } = value
              return {
                title: title,
                subtitle: `Cantidad: ${subtitle}`,
                media: media
              }
            }
          }
        }
      ],
      description:
        'Lista de productos comprados y sus cantidades en esta transacción.'
    }),
    defineField({
      name: 'totalAmount',
      title: 'Monto Total',
      type: 'number',
      description: 'El monto total de la compra.'
    }),
    defineField({
      name: 'purchaseDate',
      title: 'Fecha de Compra',
      type: 'datetime',
      description: 'Fecha y hora en que se realizó la compra.',
      options: {
        dateFormat: 'DD-MM-YYYY',
        timeFormat: 'HH:mm',
        timeStep: 15
      }
    }),
    defineField({
      name: 'paymentMethod',
      title: 'Método de Pago',
      type: 'string',
      description: 'El método de pago utilizado para la compra.'
    }),
    defineField({
      name: 'status',
      title: 'Estado de la Compra',
      type: 'string',
      options: {
        list: [
          { title: 'Pendiente', value: 'pendiente' },
          { title: 'Completado', value: 'completado' },
          { title: 'Cancelado', value: 'cancelado' },
          { title: 'Procesando', value: 'procesando' }
        ]
      },
      description: 'El estado actual de la compra.'
    }),
    defineField({
      name: 'shippingAddress',
      title: 'Dirección de Envío',
      type: 'array',
      of: [{ type: 'address' }],
      validation: (Rule) => Rule.max(1),
      description: 'La dirección de envío de la compra'
    }),
    defineField({
      name: 'discountCoupon',
      title: 'Cupon de Descuento',
      description: 'El código del cupón de descuento utilizado en la compra.',
      type: 'reference',
      to: [{ type: 'coupon' }]
    })
    // defineField({
    //   name: 'currierLink',
    //   title: 'Link de Seguimiento',
    //   type: 'string',
    //   description: 'El Link de seguimiento del pedido.'
    // }),
    // defineField({
    //   name: 'currierCode',
    //   title: 'Código de Transporte',
    //   type: 'string',
    //   description: 'El código de transporte utilizado para la compra.',
    //   hidden: true
    // }),
    // defineField({
    //   name: 'expectedDeliveryDate',
    //   title: 'Fecha de Entrega Estimada',
    //   type: 'datetime',
    //   description: 'Fecha estimada de entrega de la compra.'
    // }),
    // defineField({
    //   name: 'currierTag',
    //   title: 'Etiqueta de Transporte',
    //   type: 'file'
    // })
  ],
  preview: {
    select: {
      title: 'userEmail.email',
      subtitle: 'purchaseDate',
      media: 'status'
    } as Record<string, string>,
    prepare(selection) {
      const { title, subtitle, media } = selection
      return {
        title: title,
        subtitle: new Date(subtitle).toLocaleString('es-ES'),
        media: getIconForOrder(media)
      }
    }
  }
})
