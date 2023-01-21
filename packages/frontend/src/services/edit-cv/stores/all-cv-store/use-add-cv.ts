import { useAction } from '@reatom/npm-react'
import { getAllCvStore } from './get-all-cv-store'

const useAddCv = () => {
  const { addCv } = getAllCvStore()

  return {
    addCv: useAction(addCv, [addCv]),
  }
}

export { useAddCv }
