import { useDispatch, useSelector } from 'react-redux'
import { UpdatePositionPayload } from '../model'
import { selectCurrentCvId, selectCurrentCvPosition } from '../selectors'
import { updatePosition } from '../slice'

const useCurrentCvPosition = () => {
  const id = useSelector(selectCurrentCvId)
  const position = useSelector(selectCurrentCvPosition)

  const dispatch = useDispatch()

  const changePosition = (position: UpdatePositionPayload['position']) => {
    dispatch(updatePosition({ id, position }))
  }

  return {
    position,
    changePosition,
  }
}

export default useCurrentCvPosition
