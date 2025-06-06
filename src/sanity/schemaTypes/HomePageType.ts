import { defineType, defineField } from 'sanity'

export const homePageType = defineType({
  name: 'homePage',
  title: 'Pagina Principal',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'El título de la página. para fines de SEO'
    }),
    defineField({
      name: 'mainBanner',
      title: 'Sección 1 - Banner Principal',
      type: 'array',
      description: 'Las Tres imágenes principales de la página. (Máximo 3)',
      of: [
        defineField({
          type: 'object',
          name: 'banner',
          fields: [
            defineField({ name: 'image', type: 'image' }),
            defineField({ name: 'link', type: 'slug' })
          ]
        })
      ],
      validation: (Rule) => Rule.max(3)
    }),
    defineField({
      name: 'mainCategory',
      title: 'Sección 2 - Categoría Principal',
      type: 'reference',
      description: 'Categoría del Primer Carousel de Productos',
      to: [{ type: 'productCategory' }],
      options: {
        filter: 'main == true'
      }
    }),
    defineField({
      name: 'ads',
      title: 'Sección 5 - Banners Ads',
      type: 'array',
      description: 'Banners de anuncios',
      of: [
        defineField({
          type: 'object',
          name: 'banner',
          fields: [
            defineField({ name: 'image', type: 'image' }),
            defineField({ name: 'link', type: 'string' })
          ]
        })
      ],
      validation: (Rule) => Rule.max(4)
    }),
    defineField({
      name: 'tertiaryCategory',
      title: 'Sección 6 - Categoría Terciaria',
      type: 'reference',
      description: 'Categoría del Tercer Carousel de Productos',
      to: [{ type: 'productCategory' }],
      options: {
        filter: 'main == true'
      }
    }),
    defineField({
      name: 'youtubeVideos',
      title: 'Videos de Youtube',
      type: 'array',
      description: 'Carousel de los videos de Youtube',
      of: [
        defineField({
          type: 'object',
          name: 'video',
          fields: [
            defineField({ name: 'title', type: 'string' }),
            defineField({ name: 'videoId', type: 'string' })
          ]
        })
      ],
      validation: (Rule) => Rule.max(4)
    }),
    defineField({
      name: 'productListBanner',
      title: 'Banner de las Listas de Producto',
      type: 'object',
      fields: [
        defineField({
          name: 'banner',
          title: 'Banner',
          type: 'image',
          options: {
            hotspot: true
          }
        }),
        defineField({
          name: 'link',
          title: 'Link',
          type: 'string'
        })
      ]
    })
  ]
})
