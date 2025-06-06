import { defineField, defineType } from 'sanity'

export const couponsType = defineType({
  name: 'coupon',
  title: 'Cupones',
  type: 'document',
  fields: [
    defineField({
      name: 'code',
      title: 'Código',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description:
        'El código que los usuarios ingresarán para aplicar el descuento.'
    }),
    defineField({
      name: 'discount',
      title: 'Descuento',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
      description:
        'El valor del descuento. La interpretación depende del "Tipo de descuento".'
    }),
    defineField({
      name: 'discount_type',
      title: 'Tipo de descuento',
      type: 'string',
      options: {
        list: [
          { value: 'percentage', title: 'Porcentaje (%)' },
          { value: 'fixed', title: 'Cantidad fija' }
        ],
        layout: 'radio'
      },
      validation: (Rule) => Rule.required(),
      description:
        'Indica si el "Descuento" es un porcentaje o una cantidad fija.'
    }),
    defineField({
      name: 'expires_at',
      title: 'Fecha de expiración',
      type: 'datetime',
      description:
        'Fecha y hora en la que el cupón dejará de ser válido (opcional).'
    }),
    defineField({
      name: 'usage_limit',
      title: 'Límite de uso total',
      type: 'number',
      description:
        'Número máximo de veces que este cupón puede ser utilizado en total (opcional).'
    }),
    defineField({
      name: 'usage_count',
      title: 'Contador de uso',
      type: 'number',
      initialValue: 0,
      readOnly: true,
      description: 'Número actual de veces que este cupón ha sido utilizado.'
    })
  ],
  preview: {
    select: {
      title: 'code',
      subtitle: 'discount'
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: `${subtitle} (${subtitle ? 'Porcentaje o fijo' : 'Sin descuento'})`
      }
    }
  }
})
