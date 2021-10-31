import { FC, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import cn from 'classnames'
import isNull from 'lodash/isNull'
import isNil from 'lodash/isNil'
import isEmpty from 'lodash/isEmpty'
import first from 'lodash/first'
import fileToBase64 from 'lib/fileToBase64'
import { ReactComponent as CloseIcon } from 'icons/close.svg'
import placeholderSrc from './assets/placeholder.png'
import AvatarPickerPropsT from './AvatarPicker.props'

const ACCEPT_FORMATS = ['.png', '.jpg', '.jpeg'].join(',')

const AvatarPicker: FC<AvatarPickerPropsT> = ({ src, onPick }) => {
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
      onPick(null)
    }
  }

  return (
    <div className='relative h-22 w-22 group'>
      <img
        className='h-full w-full rounded-full'
        src={isEmpty(src) ? placeholderSrc : src}
        alt={t('img.alt')}
      />
      <button
        ref={openFileDialogButtonRef}
        className={cn(
          'absolute top-0 left-0',
          'h-full w-full rounded-full text-xl text-gray-300 outline-none',
          'transform scale-0 transition-transform duration-200 ease-out',
          'group-hover:scale-100 group-hover:bg-white group-hover:opacity-90',
          'focus-visible:scale-100 focus-visible:bg-white focus-visible:opacity-90 focus-visible:shadow-sm'
        )}
        type='button'
        onClick={handleOpenFileDialog}
      >
        +
      </button>
      {!isEmpty(src) && (
        <button
          className={cn(
            'absolute top-0 right-1',
            'h-5 w-5 leading-5 rounded-full',
            'bg-white',
            'outline-none shadow-xs',
            'transform scale-0 transition-transform duration-200 ease-out',
            'group-hover:scale-100',
            'focus-visible:scale-100 focus-visible:shadow-sm'
          )}
          type='button'
          onClick={handleClear}
        >
          <CloseIcon className='h-3 text-gray-300' />
        </button>
      )}
      <input
        ref={fileInputRef}
        className='hidden'
        type='file'
        accept={ACCEPT_FORMATS}
      />
    </div>
  )
}

export default AvatarPicker
