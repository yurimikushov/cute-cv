import { FC, useRef, useEffect } from 'react'
import isNull from 'lodash/isNull'
import isNil from 'lodash/isNil'
import isEmpty from 'lodash/isEmpty'
import first from 'lodash/first'
import fileToBase64 from 'lib/fileToBase64'
import placeholderSrc from './assets/placeholder.png'
import AvatarPickerPropsT from './AvatarPicker.props'

const ACCEPT_FORMATS = ['.png', '.jpg', '.jpeg'].join(',')

const AvatarPicker: FC<AvatarPickerPropsT> = ({ src, onPick }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const { current: inputNode } = inputRef

    if (isNull(inputNode)) {
      return
    }

    const handleChange = async ({ target }: Event): Promise<void> => {
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
    <div className='h-20 w-20' onClick={handleClick}>
      <img
        className='rounded-full'
        src={isEmpty(src) ? placeholderSrc : src}
        alt='Avatar picker.'
      />
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
