import { useSelector } from 'react-redux'
import { selectIsSaving } from './selectors'

const useIsCvSaving = () => {
  const isCvSaving = useSelector(selectIsSaving)

  return {
    isCvSaving,
  }
}

export { useIsCvSaving }
