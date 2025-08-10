'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { SearchIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const formSchema = z.object({
  search: z.string().min(1, 'Escribe algo para buscar')
})

const Search = () => {
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: ''
    }
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    router.push(`/busqueda?q=${encodeURIComponent(values.search)}`)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='relative w-[180px] md:w-[300px]'
      >
        <FormField
          control={form.control}
          name='search'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='sr-only'>Buscar</FormLabel>
              <FormControl>
                <div className='relative'>
                  <Input
                    placeholder='¿Qué buscas?'
                    {...field}
                    className='w-full rounded-none h-10 border-gray-200 shadow-xs sm:text-sm bg-neutral-100'
                  />
                  <Button
                    type='submit'
                    size='icon'
                    variant='ghost'
                    className='absolute top-0 right-0'
                  >
                    <span className='sr-only'>Buscar</span>
                    <SearchIcon size={20} />
                  </Button>
                </div>
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}

export default Search
