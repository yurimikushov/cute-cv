import { RefObject } from 'react'
import useWindowEventListener from './useWindowEventListener'

const useOutsideClick = (ref: RefObject<HTMLElement>, onClick: () => void) => {
  useWindowEventListener('click', (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as HTMLElement)) {
      onClick()
    }
  })
}

export default useOutsideClick
