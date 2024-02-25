import { type StaticProductsTypes } from '@/types'
import { createStore } from 'swr-global-state'
import type { StatePersistor, StateKey } from 'swr-global-state'

const withLocalStoragePersistor = <T = StaticProductsTypes[]>(): StatePersistor<T> => ({
  onSet(key: StateKey, data: T) {
    const stringifyData = JSON.stringify(data)
    window.localStorage.setItem(String(key), stringifyData)
  },
  onGet(key: StateKey) {
    const cachedData = window.localStorage.getItem(String(key)) ?? 'null'
    try {
      return JSON.parse(cachedData)
    } catch {
      return cachedData
    }
  }
})

const useWishlist = createStore({
  key: '@app/wishlist',
  initial: [
    {
      id: 1,
      name: 'Rtp Apparel Vision',
      price: 20,
      description: 'Camiseta de Hombre 100% Pretratada',
      material: 'Punto Liso 150',
      image: 'https://s7g3.scene7.com/is/image/soloinvest/n04321A?$big_image_web$',
      gender: 'hombre',
      new: true,
      offer: {
        price: 15,
        onOffer: true
      }
    }
  ],
  persistor: withLocalStoragePersistor()
})

export default useWishlist
