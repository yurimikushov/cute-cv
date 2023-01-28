import { useAction, useAtom } from '@reatom/npm-react'
import { useCurrentCvStore } from './use-current-cv-store'

const useCurrentCvLanguage = (id: string) => {
  const { spyLanguage, updateLanguage, deleteLanguage } = useCurrentCvStore()

  return {
    language: useAtom(
      (ctx) => {
        return spyLanguage(ctx, id)
      },
      [spyLanguage, id]
    )[0],
    updateLanguage: useAction(
      (ctx, contact: Parameters<typeof updateLanguage>[2]) => {
        updateLanguage(ctx, id, contact)
      },
      [updateLanguage, id]
    ),
    deleteLanguage: useAction(
      (ctx) => {
        deleteLanguage(ctx, id)
      },
      [deleteLanguage, id]
    ),
  }
}

export { useCurrentCvLanguage }
