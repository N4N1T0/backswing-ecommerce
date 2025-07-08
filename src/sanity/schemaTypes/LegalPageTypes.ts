import { defineField, defineType } from 'sanity'

export const legalPageType = defineType({
  name: 'legalPages',
  title: 'Página Legales',
  description:
    'Una página es un tipo de documento que se utiliza para crear contenido en el sitio web.',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      description: 'El slug es el identificador único de la página.',
      type: 'string',
      options: {
        list: [
          '/politica-de-privacidad',
          '/devoluciones-y-cambios',
          '/envio-y-entrega',
          '/terminos-y-condiciones'
        ]
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'content',
      title: 'Contenido',
      description: 'El contenido de la página.',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }]
    }),
    defineField({
      name: 'excerpt',
      title: 'Extracto',
      description: 'El extracto de la página.',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.min(10).max(150)
    })
  ],
  preview: {
    select: {
      title: 'slug'
    }
  }
})
