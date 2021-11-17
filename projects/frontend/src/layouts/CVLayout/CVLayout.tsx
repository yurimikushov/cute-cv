import { FC } from 'react'
import cn from 'classnames'
import { CV_CONTAINER_ID } from 'services/app'
import CVLayoutPropsT from './CVLayout.props'

const CVLayout: FC<CVLayoutPropsT> = ({ className, children }) => (
  <div
    id={CV_CONTAINER_ID}
    className={cn(className, 'grid grid-cols-cv grid-rows-cv gap-10')}
  >
    {children}
  </div>
)

export default CVLayout
