import { defineField, defineType } from 'sanity'

export const pageType = defineType({
  name: 'page',
  title: 'Página',
  description:
    'Una página es un tipo de documento que se utiliza para crear contenido en el sitio web.',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      description: 'El título de la página.',
      type: 'string'
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      description: 'El slug es el identificador único de la página.',
      type: 'slug',
      options: {
        source: 'title'
      }
    }),
    defineField({
      name: 'category',
      title: 'Categoria Principal',
      description: 'Categoria de la página.',
      type: 'string',
      options: {
        list: [
          { title: 'Principal', value: 'main' },
          { title: 'Gestion de Pedidos', value: 'gestion-de-pedidos' },
          { title: 'Nosotros', value: 'nosotros' },
          { title: 'Terminos Legales', value: 'terminos-legales' }
        ]
      }
    }),
    defineField({
      name: 'date',
      title: 'Fecha de publicación',
      description: 'La fecha de publicación de la página.',
      type: 'datetime'
    }),
    defineField({
      name: 'modified',
      title: 'Fecha de modificación',
      description: 'La fecha de modificación de la página.',
      type: 'datetime'
    }),
    defineField({
      name: 'status',
      title: 'Estado',
      description: 'El estado de la página.',
      type: 'string',
      options: {
        list: [
          { title: 'Publicado', value: 'publish' },
          { title: 'Futuro', value: 'future' },
          { title: 'Borrador', value: 'draft' },
          { title: 'Pendiente', value: 'pending' },
          { title: 'Privado', value: 'private' },
          { title: 'Papelera', value: 'trash' },
          { title: 'Borrador automático', value: 'auto-draft' },
          { title: 'Herencia', value: 'inherit' }
        ]
      }
    }),
    defineField({
      name: 'content',
      title: 'Contenido',
      description: 'El contenido de la página.',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image' },
        {
          type: 'link'
        },
        {
          type: 'reference',
          to: [{ type: 'externalImage' }],
          name: 'externalImage'
        }
      ]
    }),
    defineField({
      name: 'excerpt',
      title: 'Extracto',
      description: 'El extracto de la página.',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'featuredMedia',
      title: 'Imagen destacada',
      description: 'La imagen destacada de la página.',
      type: 'image'
    }),
    defineField({
      name: 'author',
      title: 'Autor',
      description: 'El autor de la página.',
      type: 'reference',
      to: [{ type: 'author' }]
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'author.name',
      media: 'featuredMedia'
    }
  }
})
