import { useSelector } from 'react-redux'
import { selectIsPatching } from './selectors'

const useIsCvPatching = () => {
  const isCvPatching = useSelector(selectIsPatching)

  return {
    isCvPatching,
  }
}

export { useIsCvPatching }
