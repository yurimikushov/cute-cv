import { useState } from 'react'

const useManageModal = () => {
  const [isOpened, setIsOpened] = useState(false)

  const handleOpen = () => {
    setIsOpened(true)
  }

  const handleClose = () => {
    setIsOpened(false)
  }

  return {
    isOpened,
    open: handleOpen,
    close: handleClose,
  }
}

export default useManageModal
