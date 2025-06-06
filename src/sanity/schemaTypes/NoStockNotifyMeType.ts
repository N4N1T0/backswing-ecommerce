import { BellRing } from 'lucide-react'
import { defineField, defineType } from 'sanity'

export const noStockNotifyMeType = defineType({
  name: 'noStockNotifyMe',
  title: 'No Stock Notify Me',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'products',
      title: 'Productos',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'product' }] }],
      validation: (Rule) => Rule.required()
    })
  ],
  preview: {
    select: {
      title: 'email'
    },
    prepare({ title }) {
      return {
        title,
        media: BellRing
      }
    }
  }
})
