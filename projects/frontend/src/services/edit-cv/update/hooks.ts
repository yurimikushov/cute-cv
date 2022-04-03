import { AnyAction } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsUpdating } from './selectors'
import { update, UpdatePayload, UpdateResult } from './thunks'

const useIsCvUpdating = () => {
  const isCvUpdating = useSelector(selectIsUpdating)

  return {
    isCvUpdating,
  }
}

const useSaveCv = () => {
  const dispatch = useDispatch()

  const handleSaveCv = (payload: UpdatePayload) => {
    return dispatch(
      update(payload) as unknown as AnyAction
    ).unwrap() as unknown as Promise<UpdateResult>
  }

  return handleSaveCv
}

export { useIsCvUpdating, useSaveCv }
