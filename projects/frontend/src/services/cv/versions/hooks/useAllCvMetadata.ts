import { useSelector } from 'react-redux'
import { selectAllCvMetadata } from '../selectors'

const useAllCvMetadata = () => {
  return useSelector(selectAllCvMetadata)
}

export default useAllCvMetadata
