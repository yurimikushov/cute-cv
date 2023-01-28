import { useAction, useAtom } from '@reatom/npm-react'
import { useCurrentCvStore } from './use-current-cv-store'

const useCurrentCvTechnologies = () => {
  const { spyTechnologies, updateTechnologies } = useCurrentCvStore()

  return [
    useAtom(spyTechnologies, [spyTechnologies])[0],
    useAction(updateTechnologies, [updateTechnologies]),
  ] as const
}

export { useCurrentCvTechnologies }
