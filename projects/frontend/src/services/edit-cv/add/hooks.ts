import { useDispatch, useSelector } from 'react-redux'
import { selectIsAdding } from './selectors'
import { add, AddPayload, AddResult } from './thunks'

const useIsCvAdding = () => {
  const isCvUpdating = useSelector(selectIsAdding)

  return {
    isCvUpdating,
  }
}

const useAddCv = () => {
  const dispatch = useDispatch()

  const handleAddCv = ({ name, number, allowShare, cv }: AddPayload) => {
    return (
      dispatch(add({ name, number, allowShare, cv }))
        // @ts-expect-error `unwrap` exists in dispatch result
        .unwrap() as unknown as Promise<AddResult>
    )
  }

  return handleAddCv
}

export { useIsCvAdding, useAddCv }
