import { defineField, defineType } from 'sanity'

export const link = defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    defineField({
      name: 'link',
      title: 'Enlace',
      type: 'string'
    }),
    defineField({
      name: 'text',
      title: 'Texto',
      type: 'string'
    })
  ],
  preview: {
    select: {
      title: 'text',
      subtitle: 'link'
    }
  }
})
