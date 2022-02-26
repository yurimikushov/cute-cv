import { RootStateT } from 'services/store'

const selectIsSaving = ({ cv }: RootStateT): boolean => {
  return cv.save.isSaving
}

export { selectIsSaving }
