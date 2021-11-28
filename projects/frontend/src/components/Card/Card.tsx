import { FC } from 'react'
import styled from 'styled-components'
import noop from 'lodash/noop'
import { CloseButton } from 'components/Button'
import colors from 'styles/colors'
import shadows from 'styles/shadows'
import CardPropsT from './Card.props'

const Container = styled.div<CardPropsT>`
  position: relative;
  background-color: ${colors.white};
  border-radius: 5px;
  ${({ withBorder }) =>
    withBorder &&
    `
  padding: 0.5rem;
  border: 1px solid ${colors.gray200};
  &:hover {
    box-shadow: ${shadows.sm};
  }
  `}
`

const Close = styled(CloseButton)`
  position: absolute;
  top: 0.5rem;
  right: 0.375rem;
`

const Card: FC<CardPropsT> = ({
  withBorder = true,
  hasClose = false,
  onClose = noop,
  children,
  ...props
}) => (
  <Container withBorder={withBorder} {...props}>
    {children}
    {hasClose && <Close onClick={onClose} />}
  </Container>
)

export default Card
