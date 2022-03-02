import { RootState } from 'services/store'

const selectIsSaving = ({ cv }: RootState): boolean => {
  return cv.save.isSaving
}

export { selectIsSaving }
