import { defineField, defineType } from 'sanity'

export const productCategoryType = defineType({
  name: 'productCategory',
  title: 'Categoría de Producto',
  description:
    'Una categoría de producto es un tipo de documento que se utiliza para agrupar productos.',
  type: 'document',
  fields: [
    defineField({
      name: 'description',
      type: 'array',
      of: [{ type: 'block' }],
      title: 'Descripción',
      description: 'La descripción de la categoría de producto.'
    }),
    defineField({
      name: 'name',
      type: 'string',
      title: 'Nombre',
      description: 'El nombre de la categoría de producto.'
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'El slug de la categoría de producto.',
      options: {
        source: 'name'
      }
    }),
    defineField({
      name: 'link',
      type: 'slug',
      title: 'Enlace Principal',
      description: 'El enlace de la categoría de producto.'
    }),
    defineField({
      name: 'taxonomy',
      type: 'string',
      title: 'Taxonomía',
      description: 'La taxonomía de la categoría de producto.',
      initialValue: 'product_cat'
    }),
    defineField({
      name: 'main',
      type: 'boolean',
      title: 'Principal',
      description: '¿Es una categoría principal?',
      initialValue: false
    }),
    defineField({
      name: 'parent',
      type: 'reference',
      title: 'Padre',
      description: 'El ID del padre de la categoría de producto.',
      to: [{ type: 'productCategory' }]
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current'
    }
  }
})
