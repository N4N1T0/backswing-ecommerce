import { defineType, defineField } from 'sanity'

export const brandType = defineType({
  name: 'brand',
  type: 'document',
  title: 'Marca',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      title: 'Imagen del logotipo',
      options: {
        hotspot: true
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Título',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'link',
      type: 'slug',
      title: 'Enlace',
      description: 'El enlace de la marca.',
      options: {
        source: 'title'
      }
    })
  ],
  preview: {
    select: {
      title: 'title',
      subTitle: 'link.current',
      media: 'image'
    }
  }
})
