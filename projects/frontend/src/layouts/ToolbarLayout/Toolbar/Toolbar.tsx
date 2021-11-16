import { FC } from 'react'
import cn from 'classnames'
import Download from './Download'
import Language from './Language'
import ToolbarPropsT from './Toolbar.props'

const Toolbar: FC<ToolbarPropsT> = ({ className }) => (
  <div
    className={cn(
      className,
      'mt-6 py-1 px-2 w-24 childs-mt-2',
      'rounded border-2 border-gray-200'
    )}
  >
    <Download />
    <Language />
  </div>
)

export default Toolbar
