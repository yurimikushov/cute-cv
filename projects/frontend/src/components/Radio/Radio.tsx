import { FC } from 'react'
import styled from 'styled-components'
import map from 'lodash/map'
import RadioItem from './RadioItem'
import RadioPropsT from './Radio.props'

const RadioContainer = styled.div`
  display: flex;
  gap: 0.375rem;
`

const Radio: FC<RadioPropsT> = ({
  activeOption,
  options,
  disabled = false,
  onChange,
  ...props
}) => (
  <RadioContainer {...props}>
    {map(options, (option) => (
      <RadioItem
        key={option}
        isActive={option === activeOption}
        option={option}
        disabled={disabled}
        onChange={onChange}
      />
    ))}
  </RadioContainer>
)

export default Radio
