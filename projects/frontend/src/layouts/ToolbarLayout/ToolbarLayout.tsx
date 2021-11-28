import { FC, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import isNull from 'lodash/isNull'
import Toolbar from './Toolbar'
import ToolbarLayoutPropsT from './ToolbarLayout.props'

const Container = styled.div`
  display: flex;
  gap: 2.5rem;
`

const ToolbarLayout: FC<ToolbarLayoutPropsT> = ({ children, ...props }) => {
  const toolbarRef = useRef<HTMLDivElement>(null)
  const [toolbarWidth, setToolbarWidth] = useState('0px')

  useEffect(() => {
    if (isNull(toolbarRef.current)) {
      return
    }

    setToolbarWidth(`${toolbarRef.current.offsetWidth}px`)
  }, [])

  return (
    <Container {...props}>
      {/* left side spacer that's needed to align content to center */}
      <div style={{ width: toolbarWidth }} />
      <div>{children}</div>
      <div ref={toolbarRef}>
        <Toolbar />
      </div>
    </Container>
  )
}

export default ToolbarLayout
