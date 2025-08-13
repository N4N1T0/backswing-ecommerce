import { defineField, defineType } from 'sanity'

export const homePageType = defineType({
  name: 'homePage',
  title: 'Página de Inicio',
  description:
    'Configuración del contenido de la página de inicio del sitio web.',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Título de la Página',
      description: 'Título identificativo para el panel de administración.',
      initialValue: 'Página de Inicio',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'heroSubtitle',
      type: 'string',
      title: 'Subtítulo del Hero',
      description:
        'Subtítulo que aparece debajo del título principal en la sección hero.',
      initialValue: 'Diseños de camisetas para padel'
    }),
    defineField({
      name: 'heroDescription',
      type: 'text',
      title: 'Descripción del Hero',
      description:
        'Descripción que aparece en la sección hero de la página principal.',
      rows: 4,
      initialValue:
        'Somos una agencia de diseño y creación de productos para pádel, somos deportistas dedicados a deportistas. Con nuestra experiencia en el juego, entendemos la calidad y visión necesarias para cada producto.'
    }),
    defineField({
      name: 'collectionDescriptions',
      type: 'object',
      title: 'Descripciones de Colecciones',
      description:
        'Descripciones para cada una de las colecciones mostradas en la página.',
      fields: [
        defineField({
          name: 'hombre',
          type: 'text',
          title: 'Descripción Colección Hombre',
          description: 'Descripción para la colección de hombres.',
          rows: 3,
          initialValue:
            'Descubre camisetas que definen tu estilo único. Diseños exclusivos que combinan comodidad premium con la última tendencia urbana para el hombre moderno.'
        }),
        defineField({
          name: 'mujer',
          type: 'text',
          title: 'Descripción Colección Mujer',
          description: 'Descripción para la colección de mujeres.',
          rows: 3,
          initialValue:
            'Eleva tu guardarropa con camisetas que celebran tu personalidad. Cortes favorecedores y diseños únicos que te acompañan desde el día hasta la noche.'
        }),
        defineField({
          name: 'nino',
          type: 'text',
          title: 'Descripción Colección Niño',
          description: 'Descripción para la colección de niños.',
          rows: 3,
          initialValue:
            'Aventuras sin límites con camisetas diseñadas para pequeños exploradores. Calidad superior y diseños divertidos que resisten cada travesura.'
        })
      ]
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'heroSubtitle'
    }
  }
})
