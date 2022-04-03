import { AnyAction } from '@reduxjs/toolkit'
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
    return dispatch(
      add({ name, number, allowShare, cv }) as unknown as AnyAction
    ).unwrap() as unknown as Promise<AddResult>
  }

  return handleAddCv
}

export { useIsCvAdding, useAddCv }
