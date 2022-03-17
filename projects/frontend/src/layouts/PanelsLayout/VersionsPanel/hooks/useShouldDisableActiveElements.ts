import {
  useCurrentCvMetadata,
  useIsCvSaving,
  useIsCvDeleting,
} from 'services/cv'

const useShouldDisableActiveElements = () => {
  const { isNew, isSaved } = useCurrentCvMetadata()
  const { isCvSaving } = useIsCvSaving()
  const { isCvDeleting } = useIsCvDeleting()

  return (!isNew && !isSaved) || isCvSaving || isCvDeleting
}

export default useShouldDisableActiveElements
