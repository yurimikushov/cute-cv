import { useAction, useAtom } from '@reatom/npm-react'
import { useCvStore } from './use-cv-store'

const useUpdateCv = (id: string) => {
  const { spyIsUpdating, spyUpdatingError, updateCv } = useCvStore(id)

  return {
    isUpdating: useAtom(spyIsUpdating, [spyIsUpdating])[0],
    error: useAtom(spyUpdatingError, [spyUpdatingError])[0],
    update: useAction(updateCv, [updateCv]),
  }
}

export { useUpdateCv }
