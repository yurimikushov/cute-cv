import { useSelector } from 'react-redux'
import { selectCvNumbers } from '../selectors'

const useCvNumbers = () => {
  return useSelector(selectCvNumbers)
}

export default useCvNumbers
