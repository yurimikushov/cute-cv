import { RootStateT } from 'services/store'
import { TechnologiesStateT } from './model'

const selectTechnologies = ({
  cv,
}: RootStateT): TechnologiesStateT['technologies'] => {
  return cv.technologies.technologies
}

export { selectTechnologies }
