import nonNullable from 'shared/lib/nonNullable'
import { useUpdateCvMetadata as useUpdateCvMetadataOnBackend } from '../patch'
import { useUpdateCvMetadata as useUpdateCvMetadataInStore } from '../versions'

type UpdateCvMetadataPayload = {
  publicId?: string
  id: string
  name: string
  isNew: boolean
  allowShare: boolean
}

const useUpdateCvMetadata = () => {
  const updateCvNameOnBackend = useUpdateCvMetadataOnBackend()
  const updateCvMetadataInStore = useUpdateCvMetadataInStore()

  const handleUpdateCvMetadata = async ({
    publicId,
    id,
    name,
    isNew,
    allowShare,
  }: UpdateCvMetadataPayload) => {
    if (isNew) {
      updateCvMetadataInStore({
        id,
        name,
        allowShare,
      })
      return
    }

    await updateCvNameOnBackend(nonNullable(publicId), name, allowShare).then(
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
