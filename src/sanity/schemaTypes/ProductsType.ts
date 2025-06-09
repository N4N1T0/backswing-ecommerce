/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineField, defineType } from 'sanity'

export const productType = defineType({
  name: 'product',
  title: 'Producto',
  description:
    'Un producto es un tipo de documento que se utiliza para crear contenido en el sitio web.',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Título',
      description: 'El título del producto.'
    }),
    defineField({
      name: 'sku',
      type: 'string',
      title: 'SKU',
      description: 'El SKU del producto.'
    }),
    defineField({
      name: 'referenceCode',
      type: 'string',
      title: 'Código de Referencia',
      description: 'El código de referencia del producto.'
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
      name: 'variants',
      type: 'array',
      title: 'Variantes',
      description: 'Las variantes del producto.',
      of: [{ type: 'reference', to: [{ type: 'productVariant' }], weak: true }]
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
      name: 'productCategories',
      type: 'array',
      title: 'Categorías',
      description: 'Las categorías del producto.',
      of: [{ type: 'reference', to: [{ type: 'productCategory' }] }]
    }),
    defineField({
      name: 'relatedProducts',
      type: 'array',
      title: 'Productos Relacionados',
      description: 'Los productos relacionados del Producto.',
      of: [{ type: 'reference', to: [{ type: 'product' }], weak: true }]
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
      media: 'featuredMedia'
    }
  }
})
