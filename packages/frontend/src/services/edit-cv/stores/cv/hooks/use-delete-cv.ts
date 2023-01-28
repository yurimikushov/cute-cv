import { useAction, useAtom } from '@reatom/npm-react'
import { getAllCvStore } from '../get-all-cv-store'

const useDeleteCv = () => {
  const { spyIsDeleting, deleteCv, spyDeleteError } = getAllCvStore()

  return {
    isDeleting: useAtom(spyIsDeleting)[0],
    error: useAtom(spyDeleteError, [spyDeleteError]),
    deleteCv: useAction(deleteCv, [deleteCv]),
  }
}

export { useDeleteCv }
