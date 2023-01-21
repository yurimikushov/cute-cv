import { useRef } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useFunctionRef = <T extends (...args: Array<any>) => any>(fn: T) => {
  const functionRef = useRef(fn)
  functionRef.current = fn

  return functionRef
}

export default useFunctionRef
