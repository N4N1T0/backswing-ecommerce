import { defineField, defineType } from 'sanity'

export const tagType = defineType({
  name: 'tag',
  title: 'Tag',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Nombre de la etiqueta',
      description: 'El nombre de la etiqueta.'
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug de la etiqueta',
      description: 'El slug de la etiqueta.',
      options: {
        source: 'name'
      }
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current'
    }
  }
})
