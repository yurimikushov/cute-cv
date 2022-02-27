import { Placement } from '../../Popup.props'

// eslint-disable-next-line no-magic-numbers
const half = (num: number) => Math.floor(num / 2)

const getContentPosition = (
  placement: Placement,
  triggerElement: HTMLElement,
  contentElement: HTMLElement,
  offset: number
  // eslint-disable-next-line max-params
) => {
  const triggerElementRect = triggerElement.getBoundingClientRect()
  const contentElementRect = contentElement.getBoundingClientRect()

  if (placement === 'bottom') {
    const {
      bottom: triggerBottom,
      left: triggerLeft,
      width: triggerWidth,
    } = triggerElementRect
    const { width: contentWidth } = contentElementRect

    return {
      top: triggerBottom + offset,
      left: triggerLeft - half(contentWidth) + half(triggerWidth),
    }
  }

  throw new Error(`'${placement}' isn't implement yet`)
}

export default getContentPosition
