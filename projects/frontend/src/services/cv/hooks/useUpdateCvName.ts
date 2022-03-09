import { useUpdateCvName as useUpdateCvNameOnBackend } from '../patch'
import { useUpdateCvName as useUpdateCvNameInStore } from '../versions'
import { useUpdateCvMetadata as useUpdateCvMetadataInStore } from '../versions/hooks'

const useUpdateCvName = () => {
  const updateCvNameOnBackend = useUpdateCvNameOnBackend()
  const updateCvNameInStore = useUpdateCvNameInStore()
  const updateCvMetadataInStore = useUpdateCvMetadataInStore()

  const handleUpdateCvName = async (
    id: string,
    name: string,
    isNew: boolean
  ) => {
    if (isNew) {
      updateCvNameInStore(id, name)
      return
    }

    await updateCvNameOnBackend(id, name).then(({ id, name, savedAt }) => {
      updateCvNameInStore(id, name)
      updateCvMetadataInStore({
        id,
        isNew: false,
        isSaved: Boolean(savedAt),
        savedAt: new Date(savedAt),
      })
    })
  }

  return handleUpdateCvName
}

export default useUpdateCvName
