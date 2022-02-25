import { useDispatch } from 'react-redux'
import { DeleteCvPayload } from '../model'
import { deleteCv } from '../slice'

const useDeleteCv = () => {
  const dispatch = useDispatch()

  const handleDeleteCv = (id: DeleteCvPayload['id']) => {
    dispatch(deleteCv({ id }))
  }

  return handleDeleteCv
}

export default useDeleteCv
