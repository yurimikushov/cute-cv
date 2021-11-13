import { FC } from 'react'
import cn from 'classnames'
import Loader from '../Loader'
import FullScreenPropsT from './FullScreen.props'

const FullScreen: FC<FullScreenPropsT> = ({ className }) => (
  <div
    className={cn(
      className,
      'fixed top-0 right-0 bottom-0 left-0 z-10',
      'flex justify-center items-center',
      'bg-white opacity-95'
    )}
  >
    <Loader />
  </div>
)

export default FullScreen
