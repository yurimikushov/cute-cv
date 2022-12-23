import { useDispatch, useSelector } from 'react-redux'
import { selectIsAdding } from './selectors'
import { add, AddPayload } from './thunks'

const useIsCvAdding = () => {
  const isCvAdding = useSelector(selectIsAdding)

  return {
    isCvAdding,
  }
}

const useAddCv = () => {
  const dispatch = useDispatch()

  const handleAddCv = ({ name, number, allowShare, cv }: AddPayload) => {
    return dispatch(add({ name, number, allowShare, cv })).unwrap()
  }

  return handleAddCv
}

export { useIsCvAdding, useAddCv }
