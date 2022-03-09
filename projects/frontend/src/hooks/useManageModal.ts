import { useRef, useState } from 'react'
import defer from 'lodash/defer'

const useManageModal = () => {
  const [isOpened, setIsOpened] = useState(false)
  const prevActiveElementRef = useRef<HTMLElement | null>(null)

  const handleOpen = () => {
    prevActiveElementRef.current = document.activeElement as HTMLElement
    setIsOpened(true)
  }

  const handleClose = () => {
    setIsOpened((isOpened) => {
      if (isOpened) {
        defer(() => {
          prevActiveElementRef.current?.focus()
        })
      }

      return false
    })
  }

  return {
    isOpened,
    open: handleOpen,
    close: handleClose,
  }
}

export default useManageModal
