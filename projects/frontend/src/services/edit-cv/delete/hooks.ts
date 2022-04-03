import { AnyAction } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { DeletePayload } from './model'
import { selectIsDeleting } from './selectors'
import { deleteCv } from './thunks'

const useIsCvDeleting = () => {
  const isCvDeleting = useSelector(selectIsDeleting)

  return {
    isCvDeleting,
  }
}

const useDeleteCv = () => {
  const dispatch = useDispatch()

  const handleDeleteCv = async (id: DeletePayload['id']) => {
    await dispatch(deleteCv({ id }) as unknown as AnyAction)
  }

  return handleDeleteCv
}

export { useIsCvDeleting, useDeleteCv }
