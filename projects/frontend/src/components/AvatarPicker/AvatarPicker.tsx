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
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const { current: inputNode } = inputRef

    if (isNull(inputNode)) {
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

    inputNode.addEventListener('change', handleChange)

    return (): void => {
      inputNode.removeEventListener('change', handleChange)
    }
  }, [onPick])

  const handleClick = () => {
    inputRef.current?.click()
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
          'focus-visible:scale-100 focus-visible:bg-white focus-visible:opacity-90',
          'focus-visible:shadow-sm'
        )}
        type='button'
        onClick={handleClick}
      >
        +
      </button>
      <input
        ref={inputRef}
        className='hidden'
        type='file'
        accept={ACCEPT_FORMATS}
      />
    </div>
  )
}

export default AvatarPicker
