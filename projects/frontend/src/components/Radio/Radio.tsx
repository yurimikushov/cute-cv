import { FC, Children, cloneElement, ReactElement } from 'react'
import styled from 'styled-components'
import { RadioItemProps } from './RadioItem'
import RadioProps from './Radio.props'

const Container = styled('div')<Pick<RadioProps, 'vertical'>>`
  display: flex;
  ${({ vertical = false }) => vertical && 'flex-direction: column;'}
  gap: 0.375rem;
`

const Radio: FC<RadioProps> = ({
  value,
  disabled = false,
  children,
  onChange,
  ...props
}) => (
  <Container {...props}>
    {/* eslint-disable-next-line lodash/prefer-lodash-method */}
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
