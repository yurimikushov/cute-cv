import { useSelector } from 'react-redux'
import { selectCvCount } from '../selectors'

const useCvCount = () => {
  return useSelector(selectCvCount)
}

export default useCvCount
