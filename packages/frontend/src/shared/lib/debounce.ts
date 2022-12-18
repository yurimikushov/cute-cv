const debounce = <Args extends Array<unknown>>(
  func: (...args: Args) => void,
  wait: number
) => {
  // eslint-disable-next-line init-declarations
  let timerId: ReturnType<typeof setTimeout>

  return (...args: Args) => {
    if (timerId) {
      clearTimeout(timerId)
    }

    timerId = setTimeout(func, wait, ...args)
  }
}

export default debounce
