import { useAction, useAtom } from '@reatom/npm-react'
import { useCurrentCvStore } from './use-current-cv-store'

const useCurrentCvEducation = (id: string) => {
  const { spyEducation, updateEducation, deleteEducation } = useCurrentCvStore()

  return {
    education: useAtom(
      (ctx) => {
        return spyEducation(ctx, id)
      },
      [spyEducation, id]
    )[0],
    updateEducation: useAction(
      (ctx, education: Parameters<typeof updateEducation>[2]) => {
        updateEducation(ctx, id, education)
      },
      [updateEducation, id]
    ),
    deleteEducation: useAction(
      (ctx) => {
        deleteEducation(ctx, id)
      },
      [deleteEducation, id]
    ),
  }
}

export { useCurrentCvEducation }
