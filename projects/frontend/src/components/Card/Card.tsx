import { FC } from 'react'
import styled from 'styled-components'
import noop from 'lodash/noop'
import { CloseButton } from 'components/Button'
import CardPropsT from './Card.props'

const Wrapper = styled.div<CardPropsT>`
  position: relative;
  background-color: #fff;
  border-radius: 5px;
  ${({ withBorder }) =>
    withBorder &&
    `
  padding: 0.5rem;
  border: 1px solid #adadad;
  &:hover {
    box-shadow: 0 0 4px 0 #c7c7c7;
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
  // @ts-expect-error bad typing
  <Wrapper withBorder={withBorder} {...props}>
    {children}
    {hasClose && <Close onClick={onClose} />}
  </Wrapper>
)

export default Card
