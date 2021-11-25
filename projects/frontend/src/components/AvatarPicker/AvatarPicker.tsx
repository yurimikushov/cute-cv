import { FC, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import isNull from 'lodash/isNull'
import isNil from 'lodash/isNil'
import isEmpty from 'lodash/isEmpty'
import first from 'lodash/first'
import fileToBase64 from 'lib/fileToBase64'
import { ReactComponent as CloseIcon } from 'icons/close.svg'
import placeholderSrc from './assets/placeholder.png'
import AvatarPickerPropsT from './AvatarPicker.props'
import './AvatarPicker.css'

const ACCEPT_FORMATS = ['.png', '.jpg', '.jpeg'].join(',')

const AvatarPicker: FC<AvatarPickerPropsT> = ({
  editable = true,
  src,
  onPick,
  onClear,
}) => {
  const { t } = useTranslation('translation', { keyPrefix: 'avatarPicker' })
  const openFileDialogButtonRef = useRef<HTMLButtonElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const { current: fileInputNode } = fileInputRef

    if (isNull(fileInputNode)) {
      return
    }

    const handlePick = async ({ target }: Event): Promise<void> => {
      openFileDialogButtonRef.current?.blur() // when user navigate by keyboard

      const { files } = target as HTMLInputElement
      const file = first(files)

      if (isNil(file)) {
        return
      }

      onPick(await fileToBase64(file))
    }

    fileInputNode.addEventListener('change', handlePick)

    return (): void => {
      fileInputNode.removeEventListener('change', handlePick)
    }
  }, [onPick])

  const handleOpenFileDialog = () => {
    fileInputRef.current?.click()
  }

  const handleClear = () => {
    openFileDialogButtonRef.current?.focus()

    if (window.confirm(t('confirmDelete'))) {
      onClear()
    }
  }

  return (
    <div className='avatar-picker'>
      <img
        className='avatar-picker__img'
        src={isEmpty(src) ? placeholderSrc : src}
        alt={t('img.alt')}
      />
      {editable && (
        <>
          <button
            ref={openFileDialogButtonRef}
            className='avatar-picker__pick'
            type='button'
            onClick={handleOpenFileDialog}
          >
            +
          </button>
          {!isEmpty(src) && (
            <button
              className='avatar-picker__clear'
              type='button'
              onClick={handleClear}
            >
              <CloseIcon className='avatar-picker__clear-icon' />
            </button>
          )}
          <input
            ref={fileInputRef}
            className='hidden'
            type='file'
            accept={ACCEPT_FORMATS}
          />
        </>
      )}
    </div>
  )
}

export default AvatarPicker
