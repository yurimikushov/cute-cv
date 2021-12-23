import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import size from 'lodash/size'
import { selectLanguages } from './selectors'
import { DeletePayloadT, UpdatePayloadT } from './model'
import { add, update, erase } from './slice'
import { MAX_LANGUAGES_SIZE } from './constants'

const useLanguages = () => {
  const languages = useSelector(selectLanguages)

  const dispatch = useDispatch()

  const handleAdd = useCallback(() => {
    if (MAX_LANGUAGES_SIZE <= size(languages)) {
      return
    }

    dispatch(add())
  }, [size(languages)])

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
