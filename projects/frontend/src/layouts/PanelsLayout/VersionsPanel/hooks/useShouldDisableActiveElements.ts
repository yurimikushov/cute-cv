import {
  useCurrentCvMetadata,
  useIsCvUpdating,
  useIsCvDeleting,
} from 'services/cv'

const useShouldDisableActiveElements = () => {
  const { isNew, isSaved } = useCurrentCvMetadata()
  const { isCvUpdating } = useIsCvUpdating()
  const { isCvDeleting } = useIsCvDeleting()

  return (!isNew && !isSaved) || isCvUpdating || isCvDeleting
}

export default useShouldDisableActiveElements
