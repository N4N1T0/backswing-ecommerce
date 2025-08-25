import { defineField, defineType } from 'sanity'

export const DesignsType = defineType({
  name: 'productDesigns',
  title: 'Diseños de Producto',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Título',
      description: 'El título del producto.',
      readOnly: false
    }),
    defineField({
      name: 'isNew',
      type: 'boolean',
      title: 'Nuevo',
      description: 'El producto es nuevo.',
      initialValue: false
    }),
    defineField({
      name: 'commingSoon',
      type: 'boolean',
      title: 'Próximamente',
      description: 'El producto está disponible próximamente.',
      initialValue: false
    }),
    defineField({
      name: 'price',
      type: 'number',
      title: 'Precio',
      description: 'El precio del producto.',
      initialValue: 39.9
    }),
    defineField({
      name: 'sale',
      type: 'number',
      title: 'Oferta',
      description: 'La oferta del producto.'
    }),
    defineField({
      name: 'referenceCode',
      type: 'string',
      title: 'Código de Referencia',
      description: 'El código de referencia del producto.'
    }),
    defineField({
      name: 'formats',
      type: 'array',
      title: 'Formatos',
      description: 'El precio del producto.',
      of: [{ type: 'reference', to: [{ type: 'formats' }] }]
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'El slug es el identificador único del producto.',
      options: {
        source: 'title'
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Contenido',
      description: 'El contenido del producto.',
      of: [{ type: 'block' }, { type: 'image' }, { type: 'externalImage' }]
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
      title: 'Extracto',
      description: 'El extracto del producto.',
      rows: 3
    }),
    defineField({
      name: 'reviews',
      type: 'array',
      title: 'Reseñas',
      description: 'Reseñas de este diseño de producto.',
      of: [{ type: 'reference', to: [{ type: 'review' }] }]
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'status'
    }
  }
})
