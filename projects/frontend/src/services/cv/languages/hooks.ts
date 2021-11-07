import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, update, erase } from './slice'
import { selectLanguages } from './selectors'

const useLanguages = () => {
  const languages = useSelector(selectLanguages)

  const dispatch = useDispatch()

  const handleAdd = useCallback(() => {
    dispatch(add())
  }, [])

  const handleUpdate = useCallback((id: string, language: string) => {
    dispatch(update(id, language))
  }, [])

  const handleDelete = useCallback((id: string) => {
    dispatch(erase(id))
  }, [])

  return {
    languages,
    handleAdd,
    handleUpdate,
    handleDelete,
  }
}

export { useLanguages }
