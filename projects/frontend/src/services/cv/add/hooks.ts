import { useDispatch, useSelector } from 'react-redux'
import { selectIsAdding } from './selectors'
import { add, AddPayload, AddResult } from './thunks'

const useIsCvAdding = () => {
  const isCvSaving = useSelector(selectIsAdding)

  return {
    isCvSaving,
  }
}

const useAddCv = () => {
  const dispatch = useDispatch()

  const handleAddCv = ({ name, number, cv }: AddPayload) => {
    return (
      dispatch(add({ name, number, cv }))
        // @ts-expect-error `unwrap` exists in dispatch result
        .unwrap() as unknown as Promise<AddResult>
    )
  }

  return handleAddCv
}

export { useIsCvAdding, useAddCv }
