// import { subHeroStaticProducts as products } from '@/contants/static-products'
// import { parseStaticProductContent } from '@/lib/utils'
// import Image from 'next/image'
// import Link from 'next/link'

import { SquarePlaceholder } from '@/assets/placeholder'
import { getRandomNumber } from '@/lib/utils'
import { sanityClientRead } from '@/sanity/lib/client'
import { GET_PRODUCTS_BY_CATEGORY } from '@/sanity/queries'
import Image from 'next/image'
import Link from 'next/link'

const SubHero = async () => {
  const type = ['sudaderas', 'ninos']
  const products = await sanityClientRead.fetch(GET_PRODUCTS_BY_CATEGORY, {
    type: type
  })

  if (!products) {
    return null
  }

  const formattedProducts = products.designs
    .filter((design) => design.colors)
    .slice(0, 5)

  return (
    <section id='sub-hero'>
      <div className='mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
        <ul className='mt-8 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {formattedProducts.map((product, index) => {
            const { id, title, colors, slug } = product
            const pseudoIndex = getRandomNumber()
            return (
              <li
                key={id}
                className={`${
                  index === 4
                    ? 'lg:col-span-2 lg:row-span-2 lg:row-start-1 lg:col-start-1'
                    : ''
                } group relative block overflow-hidden bg-linear-to-r from-[#A8A8A8] from-50% to-50% to-white`}
              >
                <Link href={`/ninos/sudaderas/${slug}`}>
                  <Image
                    src={colors[0].images[pseudoIndex].url || SquarePlaceholder}
                    placeholder='blur'
                    blurDataURL={
                      colors[0].images[pseudoIndex].blur ||
                      SquarePlaceholder.blurDataURL
                    }
                    alt={title || 'Sudadera de Niños'}
                    className='aspect-square object-contain transition-transform duration-300 ease-out group-hover:scale-110 w-auto h-auto'
                    width={index === 4 ? 1000 : 400}
                    height={index === 4 ? 1000 : 400}
                    priority
                  />
                  <h3 className='text-xl text-gray-100 uppercase font-semibold bg-gray-900 px-3 py-2 absolute bottom-3 left-3'>
                    {title || 'Sudadera de Niños'}
                  </h3>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default SubHero
