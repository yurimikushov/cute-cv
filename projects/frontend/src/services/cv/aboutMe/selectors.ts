import { RootStateT } from 'services/store'
import { AboutMeStateT } from './model'

const selectAboutMe = ({ cv }: RootStateT): AboutMeStateT['aboutMe'] => {
  return cv.aboutMe.aboutMe
}

export { selectAboutMe }
