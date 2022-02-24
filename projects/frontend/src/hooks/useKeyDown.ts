import { useEffect } from 'react'

type Options = {
  code: 'Space' // should expand it as needed
  altKey?: boolean
  listener: (e: KeyboardEvent) => void
}

const useKeyDown = (options: Options) => {
  const { code, altKey, listener } = options

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (altKey && !e.altKey) {
        return
      }

      if (e.code !== code) {
        return
      }

      listener(e)
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [code, altKey, listener])
}

export default useKeyDown
