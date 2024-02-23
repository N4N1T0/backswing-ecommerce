import WishlistCard from './wishlist-card'

const Wishlist = () => {
  return (
    <section id='wishlist' className='space-y-5 md:space-y-10'>
      <h2 className='text-4xl font-semibold leading-9 text-gray-800 my-5 md:text-left text-center'>Lista de Deseos</h2>
      <ul className='flex flex-col md:flex-row justify-start items-center gap-5 flex-wrap'>
        {Array.from(Array(5)).map((_, index) => (
          <li key={index}>
            <WishlistCard />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Wishlist
