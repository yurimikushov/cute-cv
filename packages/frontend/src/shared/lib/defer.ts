const defer = <Args extends Array<unknown>, Result>(
  cb: (...args: Args) => Result,
  ...args: Args
) => {
  const timerId = setTimeout(cb, 0, ...args)

  return () => {
    clearTimeout(timerId)
  }
}

export default defer
