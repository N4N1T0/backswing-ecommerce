import { getTitleLegal } from '@/lib/utils'
import { sanityClientRead } from '@/sanity/lib/client'
import { GET_LEGAL_PAGE_BY_SLUG } from '@/sanity/queries'
import { SearchParamsLegalType } from '@/types'
import type { Metadata } from 'next'
import { PortableText } from 'next-sanity'
import { notFound } from 'next/navigation'

export async function generateMetadata({
  params
}: {
  params: SearchParamsLegalType
}): Promise<Metadata> {
  const { slug } = await params

  return {
    title: getTitleLegal(slug),
    description: 'Información legal importante de nuestra empresa.'
  }
}

export default async function LegalPage({
  params
}: {
  params: SearchParamsLegalType
}) {
  // CONST
  const { slug } = await params
  const fullSlug = `/${slug}`

  const legalPage = await sanityClientRead.fetch(GET_LEGAL_PAGE_BY_SLUG, {
    slug: fullSlug
  })

  if (!legalPage) {
    notFound()
  }

  return (
    <main className='max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8'>
      <div className='space-y-8'>
        <div className='text-center space-y-4'>
          <h1 className='text-3xl font-bold text-gray-900 sm:text-4xl'>
            {getTitleLegal(slug)}
          </h1>
          {legalPage.excerpt && (
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              {legalPage.excerpt}
            </p>
          )}
        </div>

        <section className='prose prose-lg max-w-none'>
          {legalPage.content && <PortableText value={legalPage.content} />}
        </section>

        <div className='border-t border-gray-200 pt-6'>
          <p className='text-sm text-gray-500 text-center'>
            Última actualización: {new Date().toLocaleDateString('es-ES')}
          </p>
        </div>
      </div>
    </main>
  )
}
