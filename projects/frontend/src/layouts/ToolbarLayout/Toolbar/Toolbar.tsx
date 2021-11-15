import { FC } from 'react'
import cn from 'classnames'
import ToolbarPropsT from './Toolbar.props'

const Toolbar: FC<ToolbarPropsT> = ({ className }) => (
  <div
    className={cn(
      className,
      'mt-6 py-1 px-2 childs-mt-2',
      'rounded border-2 border-gray-200'
    )}
  >
    Here toolbar
  </div>
)

export default Toolbar
