import { RefObject } from 'react'
import useEventListener from './useEventListener'

const useOutsideClick = (ref: RefObject<HTMLElement>, onClick: () => void) => {
  useEventListener('click', (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as HTMLElement)) {
      onClick()
    }
  })
}

export default useOutsideClick
