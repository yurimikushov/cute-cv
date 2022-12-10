// It doesn't work for IOS devices
// Here is an example how to fix it
// https://github.com/willmcpo/body-scroll-lock/blob/master/src/bodyScrollLock.js

import { useLayoutEffect } from 'react'

const useLockBody = () => {
  useLayoutEffect(() => {
    const originalOverflow = document.body.style.overflow

    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [])
}

export default useLockBody
