import { useState, useRef, useEffect } from 'react'
import defer from 'lodash/defer'
import nonNullable from 'lib/nonNullable'
import useLayoutEffectWhen from 'hooks/useLayoutEffectWhen'
import useOutsideClick from 'hooks/useOutsideClick'
import { Placement, Trigger } from '../Popup.props'
import getContentPosition from './utils/getContentPosition'

const INITIAL_TOP_POSITION = 0
const INITIAL_LEFT_POSITION = 0
const OFFSET_BETWEEN_TRIGGER_AND_CONTENT = 3

// eslint-disable-next-line max-statements
const usePopup = (trigger: Trigger, placement: Placement) => {
  const triggerElementRef = useRef<HTMLElement>(null)
  const contentElementRef = useRef<HTMLDivElement>(null)

  const [isVisible, setIsVisible] = useState(false)
  const showContent = () => setIsVisible(true)
  const hideContent = () => setIsVisible(false)

  const [top, setTop] = useState(INITIAL_TOP_POSITION)
  const [left, setLeft] = useState(INITIAL_LEFT_POSITION)

  useLayoutEffectWhen(() => {
    const { top, left } = getContentPosition(
      placement,
      nonNullable(triggerElementRef.current),
      nonNullable(contentElementRef.current),
      OFFSET_BETWEEN_TRIGGER_AND_CONTENT
    )

    setTop(top)
    setLeft(left)
  }, isVisible)

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

export default usePopup
