import { FC } from 'react'
import InternalRadio from './Radio'
import RadioItem, { RadioItemProps } from './RadioItem'

type ExternalRadioItemInterface = FC<
  Omit<RadioItemProps, 'disabled' | 'isActive' | 'onClick'>
>

type RadioInterface = typeof InternalRadio & {
  Item: ExternalRadioItemInterface
}

const Radio = InternalRadio as RadioInterface

Radio.Item = RadioItem as ExternalRadioItemInterface

export default Radio
