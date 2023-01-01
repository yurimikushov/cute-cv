import { useAction, useAtom } from '@reatom/npm-react'
import { useCurrentCvStore } from './use-current-cv-store'

const useCurrentCvContact = (id: string) => {
  const { spyContact, updateContact } = useCurrentCvStore()

  return [
    useAtom(
      (ctx) => {
        return spyContact(ctx, id)
      },
      [spyContact, id]
    )[0],
    useAction(
      (ctx, spyContact: Parameters<typeof updateContact>[2]) => {
        updateContact(ctx, id, spyContact)
      },
      [updateContact, id]
    ),
  ] as const
}

export { useCurrentCvContact }
