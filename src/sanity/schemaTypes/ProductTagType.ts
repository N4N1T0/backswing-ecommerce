import { defineField, defineType } from 'sanity'

export const productTagType = defineType({
  name: 'productTag',
  title: 'Etiqueta de Producto',
  description:
    'Una etiqueta de producto es un tipo de documento que se utiliza para agrupar productos.',
  type: 'document',
  fields: [
    defineField({
      name: 'description',
      type: 'array',
      of: [{ type: 'block' }],
      title: 'Descripción',
      description: 'La descripción de la etiqueta de producto.'
    }),
    defineField({
      name: 'name',
      type: 'string',
      title: 'Nombre',
      description: 'El nombre de la etiqueta de producto.'
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'El slug de la etiqueta de producto.',
      options: {
        source: 'name'
      }
    }),
    defineField({
      name: 'taxonomy',
      type: 'string',
      title: 'Taxonomía',
      description: 'La taxonomía de la etiqueta de producto.'
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current'
    }
  }
})
