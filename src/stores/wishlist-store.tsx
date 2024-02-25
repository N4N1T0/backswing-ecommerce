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

  ],
  persistor: withLocalStoragePersistor()
})

export default useWishlist
