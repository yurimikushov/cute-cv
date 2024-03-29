import { FC } from 'react'
import styled from 'styled-components'
import noop from 'shared/lib/noop'
import { CloseButton } from 'shared/ui/Button'
import colors from 'shared/styles/colors'
import radiuses from 'shared/styles/radiuses'
import shadows from 'shared/styles/shadows'
import CardProps from './Card.props'

const Container = styled.div<CardProps>`
  position: relative;
  background-color: ${colors.white};
  border-radius: ${radiuses.md};
  ${({ withBorder, hoverable }) =>
    withBorder &&
    `
  padding: 0.5rem;
  border: 1px solid ${colors.gray200};
  ${
    hoverable &&
    `&:hover {
    box-shadow: ${shadows.sm};
  }`
  }
  `}
`

const Close = styled(CloseButton)`
  position: absolute;
  top: 0.5rem;
  right: 0.375rem;
`

const Card: FC<CardProps> = ({
  withBorder = true,
  hasClose = false,
  hoverable = false,
  onClose = noop,
  children,
  ...props
}) => (
  <Container withBorder={withBorder} hoverable={hoverable} {...props}>
    {children}
    {hasClose && <Close onClick={onClose} />}
  </Container>
)

export default Card
