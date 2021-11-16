import { FC } from 'react'
import cn from 'classnames'
import map from 'lodash/map'
import RadioItem from './RadioItem'
import RadioPropsT from './Radio.props'

const Radio: FC<RadioPropsT> = ({
  className,
  activeOption,
  options,
  onChange,
}) => (
  <div className={cn(className, 'flex gap-1.5')}>
    {map(options, (option) => (
      <RadioItem
        key={option}
        isActive={option === activeOption}
        option={option}
        onChange={onChange}
      />
    ))}
  </div>
)

export default Radio
