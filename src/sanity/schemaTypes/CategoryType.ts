import { defineField, defineType } from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: 'Categoría',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Nombre',
      description: 'El nombre de la categoría.'
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'El identificador único de la categoría.',
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
