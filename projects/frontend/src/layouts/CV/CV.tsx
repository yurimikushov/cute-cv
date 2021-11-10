import { FC } from 'react'
import cn from 'classnames'
import CVLayoutPropsT from './CV.props'

const CVLayout: FC<CVLayoutPropsT> = ({ className, children }) => (
  <div className={cn(className, 'grid grid-cols-cv grid-rows-cv gap-10')}>
    {children}
  </div>
)

export default CVLayout
