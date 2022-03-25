import { useUpdateCvMetadata as useUpdateCvMetadataOnBackend } from '../patch'
import { useUpdateCvMetadata as useUpdateCvMetadataInStore } from '../versions'

const useUpdateCvMetadata = () => {
  const updateCvNameOnBackend = useUpdateCvMetadataOnBackend()
  const updateCvMetadataInStore = useUpdateCvMetadataInStore()

  const handleUpdateCvMetadata = async (
    id: string,
    name: string,
    isNew: boolean,
    allowShare: boolean
    // eslint-disable-next-line max-params
  ) => {
    if (isNew) {
      updateCvMetadataInStore({
        id,
        name,
        allowShare,
      })
      return
    }

    await updateCvNameOnBackend(id, name, allowShare).then(
      ({ id, name, savedAt, allowShare }) => {
        updateCvMetadataInStore({
          id,
          name,
          isNew: false,
          isSaved: Boolean(savedAt),
          savedAt,
          allowShare,
        })
      }
    )
  }

  return handleUpdateCvMetadata
}

export default useUpdateCvMetadata
