import { useAction, useAtom } from '@reatom/npm-react'
import { useCurrentCvStore } from './use-current-cv-store'

const useCurrentCvContact = (id: string) => {
  const { spyContact, updateContact, deleteContact } = useCurrentCvStore()

  return {
    contact: useAtom(
      (ctx) => {
        return spyContact(ctx, id)
      },
      [spyContact, id]
    )[0],
    updateContact: useAction(
      (ctx, contact: Parameters<typeof updateContact>[2]) => {
        updateContact(ctx, id, contact)
      },
      [updateContact, id]
    ),
    deleteContact: useAction(
      (ctx) => {
        deleteContact(ctx, id)
      },
      [deleteContact, id]
    ),
  }
}

export { useCurrentCvContact }
