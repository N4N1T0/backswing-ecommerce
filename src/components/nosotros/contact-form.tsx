'use client'

import { sendContactEmail } from '@/actions/contact'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ContactFormSchema, contactFormSchema } from '@/lib/schemas/login'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

const ContactForm = () => {
  const form = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      nombre: '',
      email: '',
      asunto: '',
      mensaje: ''
    }
  })

  const { isSubmitting } = form.formState

  async function onSubmit(values: ContactFormSchema) {
    const result = await sendContactEmail(values)

    if (result.success) {
      toast.success('Mensaje enviado correctamente')
      form.reset()
    } else {
      toast.error(result.error || 'Error al enviar el mensaje')
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='p-6 bg-gray-200 space-y-6'
      >
        <FormField
          control={form.control}
          name='nombre'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-bold text-gray-800 uppercase'>
                Nombre
              </FormLabel>
              <FormControl>
                <Input
                  placeholder='Juan Perez'
                  disabled={isSubmitting}
                  className='bg-white rounded-none shadow-none border border-gray-500'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-bold text-gray-800 uppercase'>
                Email
              </FormLabel>
              <FormControl>
                <Input
                  type='email'
                  placeholder='juan@perez.com'
                  disabled={isSubmitting}
                  className='bg-white rounded-none shadow-none border border-gray-500'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='asunto'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-bold text-gray-800 uppercase'>
                Asunto
              </FormLabel>
              <FormControl>
                <Input
                  placeholder='Consulta sobre productos'
                  disabled={isSubmitting}
                  className='bg-white rounded-none shadow-none border border-gray-500'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='mensaje'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-bold text-gray-800 uppercase'>
                Mensaje
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Describe your problem'
                  rows={5}
                  disabled={isSubmitting}
                  className='bg-white rounded-none shadow-none border border-gray-500'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type='submit'
          className='bg-gray-950 hover:bg-gray-700'
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Enviando...' : 'Enviar'}
        </Button>
      </form>
    </Form>
  )
}

export default ContactForm
