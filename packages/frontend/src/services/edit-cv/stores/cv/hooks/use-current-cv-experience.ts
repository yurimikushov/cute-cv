import { useAction, useAtom } from '@reatom/npm-react'
import { useCurrentCvStore } from './use-current-cv-store'

const useCurrentCvExperience = (id: string) => {
  const { spyExperience, updateExperience, deleteExperience } =
    useCurrentCvStore()

  return {
    experience: useAtom(
      (ctx) => {
        return spyExperience(ctx, id)
      },
      [spyExperience, id]
    )[0],
    updateExperience: useAction(
      (ctx, experience: Parameters<typeof updateExperience>[2]) => {
        updateExperience(ctx, id, experience)
      },
      [updateExperience, id]
    ),
    deleteExperience: useAction(
      (ctx) => {
        deleteExperience(ctx, id)
      },
      [deleteExperience, id]
    ),
  }
}

export { useCurrentCvExperience }
