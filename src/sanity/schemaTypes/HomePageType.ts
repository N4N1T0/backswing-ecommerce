import { defineField, defineType } from 'sanity'

export const homePageType = defineType({
  name: 'homePage',
  title: 'Página de Inicio',
  description:
    'Configuración del contenido de la página de inicio del sitio web.',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Título de la Página',
      description: 'Título identificativo para el panel de administración.',
      initialValue: 'Página de Inicio',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'heroSubtitle',
      type: 'string',
      title: 'Subtítulo del Hero',
      description:
        'Subtítulo que aparece debajo del título principal en la sección hero.',
      initialValue: 'Diseños de camisetas para padel'
    }),
    defineField({
      name: 'heroDescription',
      type: 'text',
      title: 'Descripción del Hero',
      description:
        'Descripción que aparece en la sección hero de la página principal.',
      rows: 4,
      initialValue:
        'Somos una agencia de diseño y creación de productos para pádel, somos deportistas dedicados a deportistas. Con nuestra experiencia en el juego, entendemos la calidad y visión necesarias para cada producto.'
    }),
    defineField({
      name: 'collections',
      type: 'array',
      title: 'Colecciones',
      description: 'Colecciones de productos mostradas en la página de inicio.',
      of: [
        {
          type: 'object',
          title: 'Colección',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
              title: 'Título de la Colección',
              description: 'Título de la colección.',
              validation: (Rule) => Rule.required()
            }),
            defineField({
              name: 'subtitle',
              type: 'text',
              title: 'Subtítulo de la Colección',
              description: 'Descripción o subtítulo de la colección.',
              rows: 3
            }),
            defineField({
              name: 'designs',
              type: 'array',
              title: 'Diseños',
              description: 'Diseños de productos para esta colección (máximo 8).',
              of: [{ type: 'reference', to: [{ type: 'productDesigns' }] }],
              validation: (Rule) => Rule.max(8)
            })
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'subtitle'
            }
          }
        }
      ]
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'heroSubtitle'
    }
  }
})
