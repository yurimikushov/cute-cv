import { useDispatch } from 'react-redux'
import { SelectCvPayload } from '../model'
import { selectCv } from '../slice'

const useSelectCv = () => {
  const dispatch = useDispatch()

  const handleSelectCv = (id: SelectCvPayload['id']) => {
    dispatch(selectCv({ id }))
  }

  return handleSelectCv
}

export default useSelectCv
