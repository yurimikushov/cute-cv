import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { update } from './slice'
import { selectTechnologies } from './selectors'
import { UpdatePayloadT } from './model'

const useTechnologies = () => {
  const technologies = useSelector(selectTechnologies)

  const dispatch = useDispatch()

  const handleUpdate = useCallback((payload: UpdatePayloadT) => {
    dispatch(update(payload))
  }, [])

  return {
    technologies,
    handleUpdate,
  }
}

export { useTechnologies }
