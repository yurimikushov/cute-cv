import { useSelector } from 'react-redux'
import { selectCV } from './selector'

const useCV = () => {
  const cv = useSelector(selectCV)

  return {
    cv,
  }
}

export { useCV }
