import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectEditable } from './selectors'
import { SetPayloadT } from './model'
import { set } from './slice'

const useEditable = () => {
  const editable = useSelector(selectEditable)

  const dispatch = useDispatch()

  const handleSet = useCallback((payload: SetPayloadT) => {
    dispatch(set(payload))
  }, [])

  return {
    editable,
    handleSet,
  }
}

export { useEditable }
