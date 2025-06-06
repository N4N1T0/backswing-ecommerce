import { defineType, defineField } from 'sanity'

export const featureFlagsType = defineType({
  name: 'featureFlags',
  type: 'document',
  title: 'Funciones',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Título'
    }),
    defineField({
      name: 'key',
      type: 'string',
      title:
        'La clave utilizada para desactivar/activar características en el front-end'
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Descripción',
      description: 'Descripción de la característica'
    }),
    defineField({
      name: 'state',
      type: 'boolean',
      description: 'Deshabilita o habilita la característica',
      title: 'Habilitado/deshabilitado'
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'state'
    },
    prepare(value) {
      return {
        title: value.title,
        subtitle: value.subtitle === true ? 'Active' : 'Deactivated'
      }
    }
  }
})
