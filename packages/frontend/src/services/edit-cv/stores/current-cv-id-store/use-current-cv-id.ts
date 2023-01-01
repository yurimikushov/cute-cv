import { useAction, useAtom } from '@reatom/npm-react'
import { getCurrentCvIdStore } from './get-current-cv-id-store'

const useCurrentCvId = () => {
  const { spyCurrentId, updateCurrentId } = getCurrentCvIdStore()

  return [
    useAtom(spyCurrentId)[0],
    useAction(updateCurrentId, [updateCurrentId]),
  ] as const
}

export { useCurrentCvId }
