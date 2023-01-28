import { useAction, useAtom } from '@reatom/npm-react'
import { useCurrentCvStore } from './use-current-cv-store'

const useCurrentCvEducations = () => {
  const { spyEducations, addEducation, reorderEducations } = useCurrentCvStore()

  return {
    educations: useAtom(spyEducations, [spyEducations])[0],
    addEducation: useAction(addEducation, [addEducation]),
    reorderEducations: useAction(reorderEducations, [reorderEducations]),
  }
}

export { useCurrentCvEducations }
