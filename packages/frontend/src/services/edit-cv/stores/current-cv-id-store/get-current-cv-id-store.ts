import { onConnect } from '@reatom/framework'
import { CurrentCvIdStore } from './CurrentCvIdStore'

let currentCvIdStore: CurrentCvIdStore | null = null

const getCurrentCvIdStore = () => {
  if (!currentCvIdStore) {
    currentCvIdStore = new CurrentCvIdStore()

    onConnect(currentCvIdStore.dataAtom, (ctx) => {
      return () => {
        setTimeout(() => {
          if (ctx.isConnected()) {
            return
          }

          currentCvIdStore = null
        }, 3_000)
      }
    })
  }

  return currentCvIdStore
}

export { getCurrentCvIdStore }
