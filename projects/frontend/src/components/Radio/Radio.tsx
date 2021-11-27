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
  onChange,
  ...props
}) => (
  // @ts-expect-error bad typing
  <RadioContainer {...props}>
    {map(options, (option) => (
      <RadioItem
        key={option}
        isActive={option === activeOption}
        option={option}
        onChange={onChange}
      />
    ))}
  </RadioContainer>
)

export default Radio
