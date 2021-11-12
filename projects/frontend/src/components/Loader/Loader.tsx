import { FC } from 'react'
import cn from 'classnames'
import { ReactComponent as LoaderIcon } from 'icons/loader.svg'
import LoaderPropsT from './Loader.props'

const Loader: FC<LoaderPropsT> = ({ className }) => (
  <LoaderIcon className={cn(className, 'w-12 h-12 text-black animate-spin')} />
)

export default Loader
