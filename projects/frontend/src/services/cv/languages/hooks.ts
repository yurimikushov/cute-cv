import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, update, erase } from './slice'
import { selectLanguages } from './selectors'
import { DeletePayloadT, UpdatePayloadT } from './model'

const useLanguages = () => {
  const languages = useSelector(selectLanguages)

  const dispatch = useDispatch()

  const handleAdd = useCallback(() => {
    dispatch(add())
  }, [])

  const handleChange = useCallback((payload: UpdatePayloadT) => {
    dispatch(update(payload))
  }, [])

  const handleDelete = useCallback((payload: DeletePayloadT) => {
    dispatch(erase(payload))
  }, [])

  return {
    languages,
    handleAdd,
    handleChange,
    handleDelete,
  }
}

export { useLanguages }
