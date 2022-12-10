import useEventListener from './useEventListener'

type Options = {
  code: 'Escape' | 'Space' // should expand it as needed
  altKey?: boolean
  listener: (e: KeyboardEvent) => void
}

const useKeyDown = (options: Options) => {
  const { code, altKey, listener } = options

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
