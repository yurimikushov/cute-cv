import { ReactElement } from 'react'

type PopupProps = {
  trigger?: Trigger
  placement?: Placement
  content: ReactElement
  children: ReactElement
}

type Trigger = 'click'
type Placement = 'bottom'

export default PopupProps
export type { Trigger, Placement }
