import { useEffect, useRef } from 'react'
import defer from 'lodash/defer'
import useOutsideClick from 'hooks/useOutsideClick'

const useCloseModal = <T extends HTMLElement>(onClose: () => void) => {
  const contentRef = useRef<T>(null)
  const readyToCloseRef = useRef(false)

  useEffect(() => {
    defer(() => {
      readyToCloseRef.current = true
    })
  }, [])

  useOutsideClick(contentRef, () => {
    if (!readyToCloseRef.current) {
      return
    }

    onClose()
  })

  return {
    contentRef,
  }
}

export default useCloseModal
