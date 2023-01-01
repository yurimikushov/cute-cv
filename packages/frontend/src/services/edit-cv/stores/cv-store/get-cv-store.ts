import { onConnect } from '@reatom/framework'
import { CvStore } from './CvStore'

const cvStores: Record<string, CvStore> = {}

const getCvStore = (id: string) => {
  if (!cvStores[id]) {
    cvStores[id] = new CvStore(id)

    onConnect(cvStores[id].dataAtom, (ctx) => {
      return () => {
        setTimeout(() => {
          if (ctx.isConnected() || !cvStores[id]) {
            return
          }

          delete cvStores[id]
        }, 3_000)
      }
    })
  }

  return cvStores[id]
}

export { getCvStore }
