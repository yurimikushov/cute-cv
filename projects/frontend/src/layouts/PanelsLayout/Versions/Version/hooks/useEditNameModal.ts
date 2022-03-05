import { useState } from 'react'
import useManageModal from 'hooks/useManageModal'

const useEditNameModal = (onUpdateCvName: (name: string) => Promise<void>) => {
  const {
    isOpened: isEditNameModalOpened,
    open: handleOpenEditNameModal,
    close: handleCloseEditNameModal,
  } = useManageModal()

  const [isSaving, setIsSaving] = useState(false)

  const handleUpdateCvName = (name: string) => {
    setIsSaving(true)

    onUpdateCvName(name)
      .then(() => handleCloseEditNameModal())
      .finally(() => setIsSaving(false))
  }

  return {
    isEditNameModalOpened,
    handleOpenEditNameModal,
    handleCloseEditNameModal,
    isSaving,
    handleUpdateCvName,
  }
}

export default useEditNameModal
