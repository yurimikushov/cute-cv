import { RootStateT } from 'services/store'
import { PositionStateT } from './model'

const selectPosition = ({ cv }: RootStateT): PositionStateT['position'] => {
  return cv.position.position
}

export { selectPosition }
