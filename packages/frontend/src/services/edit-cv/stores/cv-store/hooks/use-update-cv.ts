import { useAction, useAtom } from '@reatom/npm-react'
import { useCvStore } from './use-cv-store'

const useUpdateCv = (publicId: string | null, id: string) => {
  const { spyIsUpdating, spyUpdatingError, updateCv } = useCvStore(publicId, id)

  return {
    isUpdating: useAtom(spyIsUpdating, [spyIsUpdating])[0],
    error: useAtom(spyUpdatingError, [spyUpdatingError])[0],
    update: useAction(updateCv, [updateCv]),
  }
}

export { useUpdateCv }
