import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectEditable } from './selectors'
import { toggle } from './slice'

const useEditable = () => {
  const editable = useSelector(selectEditable)

  const dispatch = useDispatch()

  const handleToggle = useCallback(() => {
    dispatch(toggle())
  }, [])

  return {
    editable,
    handleToggle,
  }
}

export { useEditable }
