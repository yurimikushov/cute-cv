import { useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import first from 'shared/lib/first'
import fileToBase64 from 'shared/lib/fileToBase64'

const useAvatarPicker = (
  onPick: (src: string) => void,
  onClear: () => void
) => {
  const { t } = useTranslation('translation', { keyPrefix: 'avatarPicker' })
  const pickButtonRef = useRef<HTMLButtonElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const { current: fileInputNode } = fileInputRef

    if (!fileInputNode) {
      return
    }

    const handleFileChange = async ({ target }: Event): Promise<void> => {
      pickButtonRef.current?.blur() // when user navigate by keyboard

      const { files } = target as HTMLInputElement
      const file = first(files)

      if (!file) {
        return
      }

      onPick(await fileToBase64(file))
    }

    fileInputNode.addEventListener('change', handleFileChange)

    return (): void => {
      fileInputNode.removeEventListener('change', handleFileChange)
    }
  }, [onPick])

  const handlePick = () => {
    fileInputRef.current?.click()
  }

  const handleClear = () => {
    pickButtonRef.current?.focus()

    if (window.confirm(t('confirmDelete'))) {
      onClear()
    }
  }

  return {
    pickButtonRef,
    fileInputRef,
    handlePick,
    handleClear,
  }
}

export default useAvatarPicker
