import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { update } from './slice'
import { selectTechnologies } from './selectors'

const useTechnologies = () => {
  const technologies = useSelector(selectTechnologies)

  const dispatch = useDispatch()

  const handleUpdate = useCallback((technologies: string) => {
    dispatch(update(technologies))
  }, [])

  return {
    technologies,
    handleUpdate,
  }
}

export { useTechnologies }
