import { RootStateT } from 'services/store'
import { TechnologiesStateT } from './model'

const selectTechnologies = ({
  cv,
}: RootStateT): TechnologiesStateT['technologies'] => {
  return cv.content.technologies.technologies
}

export { selectTechnologies }
