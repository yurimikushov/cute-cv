import { useAction, useAtom } from '@reatom/npm-react'
import { useCurrentCvStore } from './use-current-cv-store'

const useCurrentCvFullName = () => {
  const { spyFullName, updateFullName } = useCurrentCvStore()

  return {
    fullName: useAtom(spyFullName, [spyFullName])[0],
    updateFullName: useAction(updateFullName, [updateFullName]),
  }
}

export { useCurrentCvFullName }
