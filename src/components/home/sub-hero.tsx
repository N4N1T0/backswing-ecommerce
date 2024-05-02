import Link from 'next/link'
import Image from 'next/image'
import { getRandomProductsFeatured, urlizeNames } from '@/lib/utils'

const SubHero = () => {
  const products = getRandomProductsFeatured(5)
  return (
    <section id='sub-hero'>
      <div className='mx-auto max-w-screen-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
        <ul className='mt-8 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {products.map((product, index) => (
            <li key={product.name} className={`${index === 4 ? 'lg:col-span-2 lg:row-span-2 lg:row-start-1 lg:col-start-1' : ''} group relative block overflow-hidden`}>
              <Link href={`/${product.gender}/${product.category}/${urlizeNames(product.name)}`}>
                <Image
                  src={product.image}
                  alt={product.description}
                  className='aspect-square object-cover transition-transform duration-300 ease-out group-hover:scale-110 w-auto h-auto'
                  width={index === 4 ? 1000 : 400}
                  height={index === 4 ? 1000 : 400}
                  priority
                />
                <h3 className='text-xl text-gray-100 uppercase font-semibold bg-gray-900 px-3 py-2 absolute bottom-3 left-3'>{product.name}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default SubHero
