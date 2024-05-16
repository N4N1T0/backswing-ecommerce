import Link from 'next/link'
import { useCapitalize, parseStaticProductContent } from '@/lib/utils'
import Image from 'next/image'
import { collectionMenStaticProducts, collectionWomenStaticProducts } from '@/contants/static-products'

const Collection = ({ direction, colection }: { direction: 'right' | 'left', colection: 'hombre' | 'mujer' | 'niño' }) => {
  // This component renders a section with a title, a paragraph, and a list of products
  // depending on the value of the "colection" prop, which can be either "hombre" (men),
  // "mujer" (women), or "niño" (child).
  //
  // The "direction" prop determines the alignment of the title and paragraph.
  // If it's "right", they will be aligned to the right. If it's "left", they will be
  // aligned to the left. This is used to create a responsive layout.

  const products = colection === 'hombre'
    // If the "colection" prop is "hombre", we use the collectionMenStaticProducts array.
    // This array contains the data for the static products in the men's collection.
    ? collectionMenStaticProducts
    // Otherwise, we use the collectionWomenStaticProducts array.
    : collectionWomenStaticProducts

  return (
    <section>
      <div className='mx-auto max-w-screen-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
        <header className={`w-full flex flex-col ${direction === 'right'
          // If the "direction" prop is "right", we align the title and paragraph to the
          // right. Otherwise, we align them to the left.
          ? 'items-end'
          : 'items-start'
          }`}>
          <h2 className='text-xl font-bold text-gray-900 sm:text-3xl'>
            {
              // This is the title of the section. It's capitalized using the useCapitalize
              // function, which capitalizes the first letter of the "colection" prop.
            }
            {useCapitalize(colection)}
          </h2>

          {colection === 'hombre'
            // If the "colection" prop is "hombre", we display a paragraph that describes
            // the collection.
            ? (
              <p className={`${direction === 'right'
                // If the "direction" prop is "right", we align the paragraph to the right.
                ? 'text-right'
                : 'text-left'
                } mt-4 max-w-md text-gray-500`}>
                {
                  // This paragraph describes the men's collection.
                  // Descubre nuestra selecci n de camisetas para hombres que aman el p dale y el estilo. Calidad premium y dise o vanguardista garantizados.
                }
              </p>
            )
            : (
              // If the "colection" prop is not "hombre", we display a different paragraph that
              // describes the collection.
              <p className={`${direction === 'right'
                // If the "direction" prop is "right", we align the paragraph to the right.
                ? 'text-right'
                : 'text-left'
                } mt-4 max-w-md text-gray-500`}>
                {
                  // This paragraph describes the women's collection.
                  // Camisetas de alta calidad y dise o moderno para mujeres apasionadas del p dale y la moda. ¡Estilo impecable en cada una!
                }
              </p>
            )
          }
        </header>

        <ul className='mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
          {
            // This is the list of products. We loop through the first 4 items of the "products"
            // array and render a list item for each of them.
          }
          {products.map(product => {
            const {
              category,
              gender,
              id,
              image,
              parsedName,
              parsedPrice
            } = parseStaticProductContent(product)

            return (
              <li key={product.id} className='relative aspect-square'>
                <Link
                  href={`/${gender?.toLocaleLowerCase()}/${category?.toLocaleLowerCase()}/${id}`}
                  className='group block overflow-hidden'
                >
                  <Image
                    src={image.sourceUrl}
                    alt={parsedName}
                    title={parsedName}
                    width={350}
                    height={450}
                    className='w-full h-auto object-center transition-transform ease-out duration-300 group-hover:scale-105 aspect-square'
                  />

                  <div className='relative bg-white pt-3'>
                    <h3 className='text-gray-700 group-hover:underline group-hover:underline-offset-4 uppercase font-medium'>
                      {
                        // This is the product name. It's displayed in a link that points to the
                        // product detail page.
                      }
                      {parsedName}
                    </h3>

                    <p className='mt-2'>
                      <span className='sr-only'>Regular Price</span>

                      <span className='tracking-wider text-gray-900'>
                        {
                          // This is the product price. It's displayed in a paragraph.
                        }
                        {parsedPrice}
                      </span>
                    </p>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Collection
