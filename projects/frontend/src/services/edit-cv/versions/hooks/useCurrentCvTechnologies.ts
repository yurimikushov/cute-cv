import { useDispatch, useSelector } from 'react-redux'
import { UpdateTechnologiesPayload } from '../model'
import { selectCurrentCvId, selectCurrentCvTechnologies } from '../selectors'
import { updateTechnologies } from '../slice'

const useCurrentCvTechnologies = () => {
  const id = useSelector(selectCurrentCvId)
  const technologies = useSelector(selectCurrentCvTechnologies)

  const dispatch = useDispatch()

  const handleChangeTechnologies = (
    technologies: UpdateTechnologiesPayload['technologies']
  ) => {
    dispatch(updateTechnologies({ id, technologies }))
  }

  return {
    technologies,
    changeTechnologies: handleChangeTechnologies,
  }
}

export default useCurrentCvTechnologies
