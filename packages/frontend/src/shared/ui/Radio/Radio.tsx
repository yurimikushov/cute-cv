import { FC, Children, cloneElement, ReactElement } from 'react'
import styled from 'styled-components'
import { RadioItemProps } from './RadioItem'
import RadioProps from './Radio.props'

const Container = styled.ul<Pick<RadioProps, 'vertical'>>`
  display: flex;
  ${({ vertical = false }) => vertical && 'flex-direction: column;'}
  ${({ vertical = false }) => vertical && ' align-items: flex-start;'}
  gap: 0.375rem;

  /* reset list styles */
  padding: 0;
  list-style: none;
`

const Radio: FC<RadioProps> = ({
  value,
  disabled = false,
  children,
  onChange,
  ...props
}) => (
  <Container {...props}>
    {Children.map(children, (child: ReactElement<RadioItemProps>) =>
      cloneElement(child, {
        isActive: child.props.value === value,
        disabled,
        onClick: () => onChange(child.props.value),
      })
    )}
  </Container>
)

export default Radio
