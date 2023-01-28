import { useAction, useAtom } from '@reatom/npm-react'
import { useCurrentCvStore } from './use-current-cv-store'

const useCurrentCvPosition = () => {
  const { spyPosition, updatePosition } = useCurrentCvStore()

  return {
    position: useAtom(spyPosition, [spyPosition])[0],
    updatePosition: useAction(updatePosition, [updatePosition]),
  }
}

export { useCurrentCvPosition }
