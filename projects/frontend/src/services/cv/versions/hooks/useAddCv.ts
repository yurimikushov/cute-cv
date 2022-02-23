import { useDispatch } from 'react-redux'
import { addCv } from '../slice'

const useAddCv = () => {
  const dispatch = useDispatch()

  const handleAddCv = () => {
    dispatch(addCv())
  }

  return handleAddCv
}

export default useAddCv
