import { useRef, useCallback } from 'react'
import useModal from 'shared/hooks/useModal'
import useWindowEventListener from 'shared/hooks/useWindowEventListener'
import useLayoutEffectWhen from 'shared/hooks/useLayoutEffectWhen'
import useOutsideClick from 'shared/hooks/useOutsideClick'
import useKeyDown from 'shared/hooks/useKeyDown'
import { Placement, Trigger } from '../Dropdown.props'
import getContentPosition from './utils/getContentPosition'

const OFFSET_BETWEEN_TRIGGER_AND_CONTENT = 3

// eslint-disable-next-line max-statements
const useDropdown = (trigger: Trigger, placement: Placement) => {
  const {
    isOpened: isVisible,
    open: showContent,
    close: hideContent,
  } = useModal()
  const triggerElementRef = useRef<HTMLElement>(null)
  const contentElementRef = useRef<HTMLDivElement>(null)

  const updateContentPosition = useCallback(() => {
    const { current: triggerElement } = triggerElementRef
    const { current: contentElement } = contentElementRef

    if (!isVisible || !triggerElement || !contentElement) {
      return
    }

    const { top, left } = getContentPosition(
      placement,
      triggerElement,
      contentElement,
      OFFSET_BETWEEN_TRIGGER_AND_CONTENT
    )

    contentElement.style.top = `${top}px`
    contentElement.style.left = `${left}px`
  }, [isVisible])

  useWindowEventListener('resize', updateContentPosition)
  useWindowEventListener('scroll', updateContentPosition)
  useLayoutEffectWhen(updateContentPosition, isVisible)

  useOutsideClick(contentElementRef, () => {
    if (!isVisible || trigger !== 'click') {
      return
    }

    hideContent()
  })

  useKeyDown('Escape', hideContent)

  return {
    isVisible,
    triggerProps: {
      ref: triggerElementRef,
      // eslint-disable-next-line no-undefined
      onClick: trigger === 'click' ? showContent : undefined,
    },
    contentProps: {
      ref: contentElementRef,
    },
  }
}

export default useDropdown
