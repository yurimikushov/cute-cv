import { FC } from 'react'
import cn from 'classnames'
import { CV_CONTAINER_ID } from 'services/cv'
import CVLayoutPropsT from './CVLayout.props'
import './CVLayout.css'

const CVLayout: FC<CVLayoutPropsT> = ({ className, children }) => (
  <div id={CV_CONTAINER_ID} className={cn(className, 'cv-layout')}>
    {children}
  </div>
)

export default CVLayout
