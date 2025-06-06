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
      name: 'brand',
      type: 'reference',
      title: 'Marca',
      description: 'La marca del producto.',
      to: [{ type: 'brand' }]
    }),
    defineField({
      name: 'status',
      type: 'string',
      title: 'Estado',
      description: 'El estado del producto.',
      options: {
        list: [
          { title: 'Publicado', value: 'publish' },
          { title: 'Borrador', value: 'draft' },
          { title: 'Pendiente', value: 'pending' },
          { title: 'Privado', value: 'private' }
        ]
      },
      initialValue: 'draft'
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
      name: 'link',
      type: 'slug',
      title: 'Enlace Principal',
      description: 'El enlace del producto.',
      hidden: true
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
                  title: 'Variante Asociada',
                  weak: true
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
      name: 'date',
      type: 'datetime',
      title: 'Fecha',
      description: 'La fecha de creación del producto.',
      hidden: true
    }),
    defineField({
      name: 'modified',
      type: 'datetime',
      title: 'Modificado',
      description: 'La fecha de modificación del producto.',
      hidden: true
    }),
    defineField({
      name: 'efficiency',
      type: 'object',
      title: 'Certificado de Eficiencia Energética',
      description:
        'El certificado de eficiencia energética del producto. (Expandir para ver)',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: 'code',
          type: 'string',
          title: 'Código',
          description: 'El código del certificado de eficiencia energética.'
        }),
        defineField({
          name: 'value',
          type: 'string',
          title: 'Valor',
          description: 'El valor del certificado de eficiencia energética.',
          options: {
            list: [
              { title: 'A', value: 'A' },
              { title: 'B', value: 'B' },
              { title: 'C', value: 'C' },
              { title: 'D', value: 'D' },
              { title: 'E', value: 'E' },
              { title: 'F', value: 'F' }
            ]
          }
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
      initialValue: 1,
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'commentStatus',
      type: 'string',
      title: 'Estatus Comentarios',
      description: 'El estatus de los comentarios del producto.',
      options: {
        list: [
          { title: 'Abierto', value: 'open' },
          { title: 'Cerrado', value: 'closed' }
        ]
      },
      hidden: true,
      initialValue: 'open'
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
    }),
    defineField({
      name: 'relatedProducts',
      type: 'array',
      title: 'Productos Relacionados',
      description: 'Los productos relacionados del Producto.',
      of: [{ type: 'reference', to: [{ type: 'product' }], weak: true }]
    }),
    defineField({
      name: 'lastMinute',
      title: 'Articulos de Ultima Hora',
      description: 'Articulos de Ultima Hora del Producto.',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: 'products',
          type: 'array',
          title: 'Productos',
          of: [{ type: 'reference', to: [{ type: 'product' }], weak: true }],
          validation: (Rule) =>
            Rule.required().max(4).error('Máximo 4 productos')
        }),
        defineField({
          name: 'time',
          type: 'number',
          title: 'Tiempo limitado en minutos',
          validation: (Rule) => Rule.required()
        }),
        defineField({
          name: 'discount',
          type: 'number',
          title: 'Descuento',
          validation: (Rule) => Rule.required()
        })
      ]
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
