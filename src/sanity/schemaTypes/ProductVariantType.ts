/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineField, defineType } from 'sanity'

export const productVariantType = defineType({
  name: 'productVariant',
  title: 'Variante de Producto',
  type: 'document',
  fields: [
    defineField({
      name: 'parent',
      type: 'reference',
      title: 'Padre',
      to: [{ type: 'product' }],
      description: 'El título del producto.',
      validation: (Rule) => Rule.required()
    }),
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
      name: 'ean',
      type: 'string',
      title: 'EAN',
      description: 'El EAN del producto.'
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
      type: 'object',
      title: 'Oferta',
      description: 'La oferta del producto. (Expandir para ver)',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: 'price',
          type: 'number',
          title: 'Precio',
          description: 'El precio de la oferta.'
        }),
        defineField({
          name: 'from',
          type: 'datetime',
          title: 'Desde',
          description: 'Desde La fecha de la oferta.'
        }),
        defineField({
          name: 'to',
          type: 'datetime',
          title: 'Hasta',
          description: 'Hasta La fecha de la oferta.'
        })
      ]
    }),
    defineField({
      name: 'downloads',
      type: 'array',
      of: [{ type: 'file' }],
      title: 'Descargas',
      description: 'Las descargas del producto.'
    }),
    defineField({
      name: 'dimensions',
      type: 'object',
      title: 'Dimensiones',
      description: 'Las dimensiones del producto. (Expandir para ver)',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: 'length',
          type: 'number',
          title: 'Longitud',
          initialValue: 0
        }),
        defineField({
          name: 'width',
          type: 'number',
          title: 'Anchura',
          initialValue: 0
        }),
        defineField({
          name: 'height',
          type: 'number',
          title: 'Altura',
          initialValue: 0
        }),
        defineField({
          name: 'weight',
          type: 'number',
          title: 'Peso',
          initialValue: 0
        }),
        defineField({
          name: 'alt',
          type: 'array',
          title: 'Dimensiones Alternativas',
          hidden: true,
          of: [{ type: 'block' }, { type: 'image' }, { type: 'externalImage' }]
        })
      ]
    }),
    defineField({
      name: 'options',
      type: 'object',
      title: 'Opciones',
      description: 'Las opciones del producto.',
      fields: [
        defineField({
          name: 'name',
          type: 'string',
          title: 'Nombre de la opción'
        }),
        defineField({
          name: 'values',
          type: 'array',
          title: 'Valores y Referencia',
          of: [
            defineField({
              name: 'values',
              type: 'object',
              fields: [
                defineField({
                  type: 'string',
                  name: 'value',
                  title: 'Valor',
                  description: 'Ejemplo: Panel Solar'
                }),
                defineField({
                  type: 'reference',
                  to: [{ type: 'productVariant' }],
                  name: 'reference',
                  title: 'Variante Asociada'
                })
              ],
              preview: {
                select: {
                  title: 'value',
                  subtitle: 'reference.title',
                  media: 'reference.featuredMedia'
                }
              }
            })
          ]
        })
      ]
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
      name: 'featuredMedia',
      type: 'image',
      title: 'Imagen Destacada',
      description: 'La imagen destacada del producto.'
    }),
    defineField({
      name: 'relatedImages',
      type: 'array',
      title: 'Imágenes Relacionadas',
      description: 'Las imágenes relacionadas del producto.',
      of: [{ type: 'image' }],
      validation: (Rule) =>
        Rule.custom((relatedImages) => {
          if (!Array.isArray(relatedImages)) return true

          const uniqueImages = new Set(
            relatedImages.map((image: any) => image?.asset?._ref)
          )

          if (uniqueImages.size !== relatedImages.length) {
            return 'No se permiten imágenes duplicadas en Imágenes Relacionadas.'
          }

          return true
        })
    }),
    defineField({
      name: 'youtube',
      type: 'url',
      title: 'YouTube',
      description: 'Enlace de YouTube del producto.'
    }),
    defineField({
      name: 'stockQuantity',
      type: 'number',
      title: 'Stock',
      description: 'Stock del Producto',
      initialValue: 0
    }),
    defineField({
      name: 'productCategories',
      type: 'array',
      title: 'Categorías',
      description: 'Las categorías del producto.',
      of: [{ type: 'reference', to: [{ type: 'productCategory' }] }]
    }),
    defineField({
      name: 'productTag',
      type: 'array',
      title: 'Etiquetas',
      description: 'Las etiquetas del producto.',
      of: [{ type: 'reference', to: [{ type: 'productTag' }] }]
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'status',
      media: 'featuredMedia'
    }
  }
})
