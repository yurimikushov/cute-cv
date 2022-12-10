import { useState, useRef, useEffect, useCallback } from 'react'
import defer from 'lodash/defer'
import nonNullable from 'shared/lib/nonNullable'
import useModal from 'shared/hooks/useModal'
import useWindowResizeObserver from 'shared/hooks/useWindowResizeObserver'
import useLayoutEffectWhen from 'shared/hooks/useLayoutEffectWhen'
import useOutsideClick from 'shared/hooks/useOutsideClick'
import useKeyDown from 'shared/hooks/useKeyDown'
import { Placement, Trigger } from '../Dropdown.props'
import getContentPosition from './utils/getContentPosition'

const INITIAL_TOP_POSITION = 0
const INITIAL_LEFT_POSITION = 0
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

  const [top, setTop] = useState(INITIAL_TOP_POSITION)
  const [left, setLeft] = useState(INITIAL_LEFT_POSITION)

  const updateContentPosition = useCallback(() => {
    const { top, left } = getContentPosition(
      placement,
      nonNullable(triggerElementRef.current),
      nonNullable(contentElementRef.current),
      OFFSET_BETWEEN_TRIGGER_AND_CONTENT
    )

    setTop(top)
    setLeft(left)
  }, [])

  useWindowResizeObserver(updateContentPosition, [])
  useLayoutEffectWhen(updateContentPosition, isVisible)

  const readyToHideRef = useRef(false)

  useEffect(() => {
    defer(() => {
      readyToHideRef.current = isVisible
    })
  }, [isVisible])

  useOutsideClick(contentElementRef, () => {
    if (!readyToHideRef.current || !isVisible) {
      return
    }

    if (trigger !== 'click') {
      return
    }

    hideContent()
  })

  useKeyDown({
    code: 'Escape',
    listener: hideContent,
  })

  return {
    isVisible,
    triggerProps: {
      ref: triggerElementRef,
      // eslint-disable-next-line no-undefined
      onClick: trigger === 'click' ? showContent : undefined,
    },
    contentProps: {
      ref: contentElementRef,
      top,
      left,
    },
  }
}

export default useDropdown
