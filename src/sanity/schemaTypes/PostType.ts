import { defineField, defineType } from 'sanity'

export const postType = defineType({
  title: 'Entrada del blog',
  description:
    'Una entrada del blog es un tipo de documento que se utiliza para crear contenido en el sitio web.',
  name: 'post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Título',
      description: 'El título de la entrada del blog.'
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'El slug es el identificador único de la entrada del blog.',
      options: {
        source: 'title'
      }
    }),
    defineField({
      name: 'date',
      type: 'datetime',
      title: 'Fecha de publicación',
      description: 'La fecha de publicación de la entrada del blog.'
    }),
    defineField({
      name: 'modified',
      type: 'datetime',
      title: 'Fecha de modificación',
      description: 'La fecha de modificación de la entrada del blog.'
    }),
    defineField({
      name: 'status',
      type: 'string',
      title: 'Estado',
      description: 'El estado de la entrada del blog.',
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
      type: 'array',
      title: 'Contenido',
      description: 'El contenido de la entrada del blog.',
      of: [
        { type: 'block' },
        { type: 'image' },
        { type: 'reference', to: [{ type: 'externalImage' }] }
      ]
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
      title: 'Extracto',
      description: 'El extracto de la entrada del blog.',
      rows: 3
    }),
    defineField({
      name: 'featuredMedia',
      type: 'image',
      title: 'Imagen destacada',
      description: 'La imagen destacada de la entrada del blog.'
    }),
    defineField({
      name: 'sticky',
      type: 'boolean',
      title: 'Destacado',
      description: 'Si la entrada del blog debe ser destacada.'
    }),
    defineField({
      name: 'author',
      type: 'reference',
      title: 'Autor',
      description: 'El autor de la entrada del blog.',
      to: [{ type: 'author' }]
    }),
    defineField({
      name: 'categories',
      type: 'array',
      title: 'Categorías',
      description: 'Las categorías de la entrada del blog.',
      of: [{ type: 'reference', to: [{ type: 'category' }] }]
    }),
    defineField({
      name: 'tags',
      type: 'array',
      title: 'Etiquetas',
      description: 'Las etiquetas de la entrada del blog.',
      of: [{ type: 'reference', to: [{ type: 'tag' }] }]
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
