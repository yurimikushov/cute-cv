import { FC } from 'react'
import cn from 'classnames'
import PageLayoutPropsT from './PageLayout.props'
import './PageLayout.css'

const PageLayout: FC<PageLayoutPropsT> = ({ className, children }) => (
  <div
    className={cn(
      className,
      'max-w-page min-h-page bg-white',
      'border-t-4 border-solid border-black'
    )}
  >
    {children}
  </div>
)

export default PageLayout
