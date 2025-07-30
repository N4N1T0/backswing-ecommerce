import { defineField, defineType } from 'sanity'

export const formatTypes = defineType({
  name: 'formats',
  title: 'Formatos de Diseños',
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
              name: 'mainImage',
              type: 'string',
              title: 'Imagen Principal',
              description: 'La imagen principal del color. (con el estampado)',
              options: {
                list: [
                  {
                    title: 'Imagen 1',
                    value: '0'
                  },
                  {
                    title: 'Imagen 2',
                    value: '1'
                  }
                ],
                layout: 'radio'
              }
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
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'status'
    }
  }
})
