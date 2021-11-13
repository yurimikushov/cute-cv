import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectLoading } from './selectors'
import { begin, complete } from './slice'

const useLoading = () => {
  const isLoading = useSelector(selectLoading)

  const dispatch = useDispatch()

  const handleBegin = useCallback(() => {
    dispatch(begin())
  }, [])

  const handleComplete = useCallback(() => {
    dispatch(complete())
  }, [])

  return {
    isLoading,
    handleBegin,
    handleComplete,
  }
}

export { useLoading }
