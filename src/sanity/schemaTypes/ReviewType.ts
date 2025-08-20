import { defineField, defineType } from 'sanity'

export const ReviewType = defineType({
  name: 'review',
  title: 'Reseñas',
  type: 'document',
  fields: [
    defineField({
      name: 'isApproved',
      type: 'boolean',
      title: 'Aprobado',
      description: 'Indica si la reseña ha sido aprobada por el administrador.',
      initialValue: false
    }),
    defineField({
      name: 'rating',
      type: 'number',
      title: 'Calificación',
      description: 'Calificación del producto (1-5 estrellas).',
      validation: (Rule) => Rule.required().min(1).max(5)
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Título de la Reseña',
      description: 'Título breve de la reseña.',
      validation: (Rule) => Rule.required().max(100)
    }),
    defineField({
      name: 'comment',
      type: 'text',
      title: 'Comentario',
      description: 'Comentario detallado sobre el producto.',
      validation: (Rule) => Rule.required().min(10).max(1000),
      rows: 4
    }),
    defineField({
      name: 'productDesign',
      type: 'reference',
      title: 'Diseño de Producto',
      description: 'Referencia al diseño de producto reseñado.',
      to: [{ type: 'productDesigns' }],
      validation: (Rule) => Rule.required()
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'userName',
      media: 'productDesign.title'
    },
    prepare(selection) {
      const { title, subtitle } = selection
      return {
        title: title,
        subtitle: `Por: ${subtitle}`
      }
    }
  }
})
