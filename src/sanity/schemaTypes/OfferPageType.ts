import { defineField, defineType } from 'sanity'

export const offerPageType = defineType({
  name: 'offerPage',
  title: 'Pagina de Oferta',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      initialValue: 'Ofertas'
    }),
    defineField({
      name: 'offer',
      title: 'Información de las Ofertas',
      type: 'object',
      description: 'Ofertas de la página (en caso de no tener desactivar)',
      fields: [
        defineField({
          name: 'active',
          title: 'Activa!',
          type: 'boolean',
          initialValue: false
        }),
        defineField({
          name: 'date',
          title: 'Fecha de finalización',
          type: 'date'
        }),
        defineField({
          name: 'banner',
          title: 'Banner',
          type: 'image',
          options: {
            hotspot: true
          }
        })
      ]
    }),
    defineField({
      name: 'productList',
      title: 'Lista de Productos',
      type: 'array',
      of: [
        defineField({
          name: 'product',
          title: 'Producto',
          type: 'reference',
          to: [{ type: 'product' }]
        })
      ]
    })
  ]
})
