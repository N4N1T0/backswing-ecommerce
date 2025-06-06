import { defineType, defineField } from 'sanity'

export const externalImageType = defineType({
  name: 'externalImage',
  title: 'External Image',
  type: 'object',
  fields: [
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url'
    })
  ]
})
