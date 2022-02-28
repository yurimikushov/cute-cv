import { FC } from 'react'
import styled from 'styled-components'
import { CloseButton } from 'components/Button'
import VersionProps from './Version.props'

const Container = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
`

const Version: FC<VersionProps> = ({ name, disabled, onDelete, ...props }) => {
  return (
    <Container {...props}>
      {name}
      <CloseButton
        disabled={disabled}
        onClick={(e) => {
          e.stopPropagation() // to not affect onChange event of radio into Versions
          onDelete()
        }}
      />
    </Container>
  )
}

export default Version
