import { RootStateT } from 'services/store'
import { TechnologiesStateT } from './model'

const selectTechnologies = ({
  technologies,
}: RootStateT): TechnologiesStateT['technologies'] => {
  return technologies.technologies
}

export { selectTechnologies }
