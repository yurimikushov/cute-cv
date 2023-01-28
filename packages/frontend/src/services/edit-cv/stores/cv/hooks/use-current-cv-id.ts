import { useAction, useAtom } from '@reatom/npm-react'
import { getAllCvStore } from '../get-all-cv-store'

const useCurrentCvId = () => {
  const { spyCurrentId, updateCurrentId } = getAllCvStore()

  return {
    id: useAtom(spyCurrentId)[0],
    updateCurrentId: useAction(updateCurrentId, [updateCurrentId]),
  }
}

export { useCurrentCvId }
