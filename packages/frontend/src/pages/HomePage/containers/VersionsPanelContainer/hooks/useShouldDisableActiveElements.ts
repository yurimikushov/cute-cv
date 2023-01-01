import {
  useCurrentCvMetadata,
  useIsCvUpdating,
  useIsCvDeleting,
} from 'services/edit-cv'

const useShouldDisableActiveElements = () => {
  const [{ isNew, isSaved } = { isNew: true, isSaved: false }] =
    useCurrentCvMetadata()
  const { isCvUpdating } = useIsCvUpdating()
  const { isCvDeleting } = useIsCvDeleting()

  return (!isNew && !isSaved) || isCvUpdating || isCvDeleting
}

export default useShouldDisableActiveElements
