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
    isNew: boolean,
    allowShare: boolean
    // eslint-disable-next-line max-params
  ) => {
    if (isNew) {
      updateCvNameInStore(id, name)
      return
    }

    await updateCvNameOnBackend(id, name, allowShare).then(
      ({ id, name, savedAt, allowShare }) => {
        updateCvNameInStore(id, name)
        updateCvMetadataInStore({
          id,
          isNew: false,
          isSaved: Boolean(savedAt),
          savedAt,
          allowShare,
        })
      }
    )
  }

  return handleUpdateCvName
}

export default useUpdateCvName
