import without from 'shared/lib/without'
import isEmpty from 'shared/lib/isEmpty'
import { useDeleteCv as useDeleteCvFromBackend } from '../delete'
import {
  useAllCvMetadata,
  useCurrentCvMetadata,
  useSelectCv,
  useAddEmptyCv,
  useDeleteCv as useDeleteCvFromStore,
} from '../versions'
import getNextCurrentId from './utils/getNextCurrentId'

const useDeleteCv = () => {
  const allCv = useAllCvMetadata()
  const { id: currentId } = useCurrentCvMetadata()
  const selectCv = useSelectCv()
  const addEmptyCv = useAddEmptyCv()
  const deleteCvFromBackend = useDeleteCvFromBackend()
  const deleteCvFromStore = useDeleteCvFromStore()

  const selectNextCv = (id: string) => {
    const cvIds = allCv.map(({ id }) => id)

    if (isEmpty(without(cvIds, id))) {
      const { id: newCvId } = addEmptyCv()
      cvIds.push(newCvId)
    }

    if (currentId === id) {
      selectCv(getNextCurrentId(cvIds, id))
    }
  }

  const handleDeleteCv = (id: string, isNew: boolean) => {
    if (isNew) {
      selectNextCv(id)
      deleteCvFromStore(id)
      return
    }

    deleteCvFromBackend(id).then(() => {
      selectNextCv(id)
      deleteCvFromStore(id)
    })
  }

  return handleDeleteCv
}

export default useDeleteCv
