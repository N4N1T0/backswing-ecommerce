/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineField, defineType } from 'sanity'

export const productVariantType = defineType({
  name: 'productVariant',
  title: 'Variante de Producto',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Título',
      description: 'El título del producto.'
    }),
    defineField({
      name: 'referenceCode',
      type: 'string',
      title: 'Código de Referencia',
      description: 'El código de referencia del producto.'
    }),
    defineField({
      name: 'color',
      type: 'array',
      title: 'Color & Imágenes',
      description: 'El color del producto.',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              type: 'string',
              title: 'Nombre',
              description: 'El nombre del color.'
            },
            {
              name: 'images',
              type: 'array',
              title: 'Imágenes',
              description: 'Las imágenes del color.',
              of: [{ type: 'image' }]
            }
          ]
        }
      ]
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
      name: 'price',
      type: 'number',
      title: 'Precio',
      description: 'El precio del producto.'
    }),
    defineField({
      name: 'sale',
      type: 'number',
      title: 'Oferta',
      description: 'La oferta del producto.'
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
      name: 'stockQuantity',
      type: 'number',
      title: 'Stock',
      description: 'Stock del Producto',
      initialValue: 0
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'status',
      media: 'images[0]'
    }
  }
})
