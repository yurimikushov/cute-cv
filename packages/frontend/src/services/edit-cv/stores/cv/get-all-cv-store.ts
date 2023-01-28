import { onConnect } from '@reatom/framework'
import { AllCvStore } from './AllCvStore'

let allCvStore: AllCvStore | null = null

const getAllCvStore = () => {
  if (!allCvStore) {
    allCvStore = new AllCvStore()

    onConnect(allCvStore.dataAtom, (ctx) => {
      return () => {
        setTimeout(() => {
          if (ctx.isConnected()) {
            return
          }

          allCvStore = null
        }, 3_000)
      }
    })
  }

  return allCvStore
}

export { getAllCvStore }
