import { useCurrentCvMetadata, useDeleteCv } from 'services/edit-cv'
import { useUpdateCurrentCv } from 'services/edit-cv/stores/cv'

const useShouldDisableActiveElements = () => {
  const { metadata: { isNew, isSaved } = { isNew: true, isSaved: false } } =
    useCurrentCvMetadata()
  const { isUpdating } = useUpdateCurrentCv()
  const { isDeleting } = useDeleteCv()

  return (!isNew && !isSaved) || isUpdating || isDeleting
}

export default useShouldDisableActiveElements
