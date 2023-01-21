import { useAction, useAtom } from '@reatom/npm-react'
import { getCurrentCvIdStore } from './get-current-cv-id-store'

const useCurrentCvId = () => {
  const { spyCurrentId, updateCurrentId } = getCurrentCvIdStore()

  const { publicId, id } = useAtom(spyCurrentId)[0] ?? {}

  return {
    publicId,
    id,
    updateCurrentId: useAction(updateCurrentId, [updateCurrentId]),
  }
}

export { useCurrentCvId }
