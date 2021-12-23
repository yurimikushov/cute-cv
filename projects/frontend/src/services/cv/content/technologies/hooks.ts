import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectTechnologies } from './selectors'
import { UpdatePayloadT } from './model'
import { update } from './slice'

const useTechnologies = () => {
  const technologies = useSelector(selectTechnologies)

  const dispatch = useDispatch()

  const handleChange = useCallback((payload: UpdatePayloadT) => {
    dispatch(update(payload))
  }, [])

  return {
    technologies,
    handleChange,
  }
}

export { useTechnologies }
