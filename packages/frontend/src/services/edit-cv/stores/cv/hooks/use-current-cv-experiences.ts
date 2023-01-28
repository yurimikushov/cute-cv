import { useAction, useAtom } from '@reatom/npm-react'
import { useCurrentCvStore } from './use-current-cv-store'

const useCurrentCvExperiences = () => {
  const { spyExperiences, addExperience, reorderExperiences } = useCurrentCvStore()

  return {
    experiences: useAtom(spyExperiences, [spyExperiences])[0],
    addExperience: useAction(addExperience, [addExperience]),
    reorderExperiences: useAction(reorderExperiences, [reorderExperiences]),
  }
}

export { useCurrentCvExperiences }
