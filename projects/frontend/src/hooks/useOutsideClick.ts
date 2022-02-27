import { RefObject, useEffect } from 'react'
import isNull from 'lodash/isNull'

const useOutsideClick = (ref: RefObject<HTMLElement>, onClick: () => void) => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (isNull(ref.current)) {
        return
      }

      if (!ref.current.contains(e.target as HTMLElement)) {
        onClick()
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [onClick])
}

export default useOutsideClick
