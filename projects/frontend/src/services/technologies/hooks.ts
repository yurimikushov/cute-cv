import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateTechnologies } from './actions'
import { selectTechnologies } from './selectors'

const useTechnologies = () => {
  const technologies = useSelector(selectTechnologies)

  const dispatch = useDispatch()

  const handleUpdate = useCallback((technologies: string) => {
    dispatch(updateTechnologies(technologies))
  }, [])

  return {
    technologies,
    handleUpdate,
  }
}

export { useTechnologies }
