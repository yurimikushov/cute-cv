import { FC, useEffect, useRef, useState } from 'react'
import cn from 'classnames'
import isNull from 'lodash/isNull'
import ToolbarLayoutPropsT from './ToolbarLayout.props'

const ToolbarLayout: FC<ToolbarLayoutPropsT> = ({ className, children }) => {
  const toolbarRef = useRef<HTMLDivElement>(null)
  const [toolbarWidth, setToolbarWidth] = useState('0px')

  useEffect(() => {
    if (isNull(toolbarRef.current)) {
      return
    }

    setToolbarWidth(`${toolbarRef.current.offsetWidth}px`)
  }, [])

  return (
    <div className={cn(className, 'flex gap-10')}>
      {/* left side spacer that's needed to align content to center */}
      <div style={{ width: toolbarWidth }} />
      <div>{children}</div>
      <div ref={toolbarRef}>Here toolbar</div>
    </div>
  )
}

export default ToolbarLayout
