import {
  useCurrentCvMetadata,
  useIsCvUpdating,
  useDeleteCv,
} from 'services/edit-cv'

const useShouldDisableActiveElements = () => {
  const { metadata: { isNew, isSaved } = { isNew: true, isSaved: false } } =
    useCurrentCvMetadata()
  const { isCvUpdating } = useIsCvUpdating()
  const { isDeleting } = useDeleteCv()

  return (!isNew && !isSaved) || isCvUpdating || isDeleting
}

export default useShouldDisableActiveElements
