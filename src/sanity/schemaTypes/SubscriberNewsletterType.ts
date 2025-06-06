import { defineField, defineType } from 'sanity'

export const subscriberNewsletterType = defineType({
  name: 'subscriberNewsletter',
  title: 'Suscriptor del Boletín',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      type: 'string',
      title: 'Correo Electrónico',
      description: 'El correo electrónico del suscriptor.'
    }),
    defineField({
      name: 'subscribedDate',
      type: 'datetime',
      title: 'Fecha de Suscripción',
      description: 'La fecha en que se suscribió al boletín.'
    }),
    defineField({
      name: 'active',
      type: 'boolean',
      title: 'Activo',
      description: 'Si el suscriptor está actualmente activo.'
    })
  ],
  preview: {
    select: {
      title: 'email',
      subtitle: 'name'
    }
  }
})
