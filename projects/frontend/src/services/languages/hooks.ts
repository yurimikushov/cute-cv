import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addLanguage, updateLanguage, deleteLanguage } from './actions'
import { selectLanguages } from './selectors'

const useLanguages = () => {
  const languages = useSelector(selectLanguages)

  const dispatch = useDispatch()

  const handleAdd = useCallback(() => {
    dispatch(addLanguage())
  }, [])

  const handleUpdate = useCallback((id: string, language: string) => {
    dispatch(updateLanguage(id, language))
  }, [])

  const handleDelete = useCallback((id: string) => {
    dispatch(deleteLanguage(id))
  }, [])

  return {
    languages,
    handleAdd,
    handleUpdate,
    handleDelete,
  }
}

export { useLanguages }
