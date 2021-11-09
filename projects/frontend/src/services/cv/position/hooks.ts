import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { update } from './slice'
import { selectPosition } from './selectors'
import { UpdatePayloadT } from './model'

const usePosition = () => {
  const position = useSelector(selectPosition)

  const dispatch = useDispatch()

  const handleChange = useCallback((payload: UpdatePayloadT) => {
    dispatch(update(payload))
  }, [])

  return {
    position,
    handleChange,
  }
}

export { usePosition }
