import useEventListener from './useEventListener'

type Code = 'Escape' | 'Space' // should expand it as needed

const useKeyDown = (
  code: Code,
  listener: (e: KeyboardEvent) => void,
  altKey?: boolean
) => {
  useEventListener('keydown', (e) => {
    if (altKey && !e.altKey) {
      return
    }

    if (e.code !== code) {
      return
    }

    listener(e)
  })
}

export default useKeyDown
