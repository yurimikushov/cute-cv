import { FC, useRef, useEffect } from 'react'
import cn from 'classnames'
import isNull from 'lodash/isNull'
import isNil from 'lodash/isNil'
import isEmpty from 'lodash/isEmpty'
import first from 'lodash/first'
import fileToBase64 from 'lib/fileToBase64'
import placeholderSrc from './assets/placeholder.png'
import AvatarPickerPropsT from './AvatarPicker.props'

const ACCEPT_FORMATS = ['.png', '.jpg', '.jpeg'].join(',')

const AvatarPicker: FC<AvatarPickerPropsT> = ({ src, onPick }) => {
  const pickButtonRef = useRef<HTMLButtonElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const { current: fileInputNode } = fileInputRef

    if (isNull(fileInputNode)) {
      return
    }

    const handleChange = async ({ target }: Event): Promise<void> => {
      pickButtonRef.current?.blur() // when user navigate by keyboard

      const { files } = target as HTMLInputElement
      const file = first(files)

      if (isNil(file)) {
        return
      }

      onPick(await fileToBase64(file))
    }

    fileInputNode.addEventListener('change', handleChange)

    return (): void => {
      fileInputNode.removeEventListener('change', handleChange)
    }
  }, [onPick])

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  const handleClear = () => {
    pickButtonRef.current?.focus()
    onPick(null)
  }

  return (
    <div className='relative h-20 w-20 group'>
      <img
        className='h-full w-full rounded-full'
        src={isEmpty(src) ? placeholderSrc : src}
        alt='Avatar picker.'
      />
      <button
        ref={pickButtonRef}
        className={cn(
          'absolute top-0 left-0',
          'h-full w-full rounded-full text-lg text-gray-300 outline-none',
          'transform scale-0 transition-transform duration-200 ease-out',
          'group-hover:scale-100 group-hover:bg-white group-hover:opacity-90',
          'focus-visible:scale-100 focus-visible:bg-white focus-visible:opacity-90 focus-visible:shadow-sm'
        )}
        type='button'
        onClick={handleClick}
      >
        +
      </button>
      {!isEmpty(src) && (
        <button
          className={cn(
            'absolute top-0 right-1',
            'h-5 w-5 leading-5 rounded-full',
            'text-base text-gray-300 bg-white',
            'outline-none shadow-xs',
            'transform scale-0 transition-transform duration-200 ease-out',
            'group-hover:scale-100',
            'focus-visible:scale-100 focus-visible:shadow-sm'
          )}
          type='button'
          onClick={handleClear}
        >
          x
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
