import { Placement } from '../../Dropdown.props'

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
      top: triggerBottom + offset + window.scrollY,
      left:
        triggerLeft - half(contentWidth) + half(triggerWidth) + window.scrollX,
    }
  }

  throw new Error(`'${placement}' isn't implement yet`)
}

export default getContentPosition
