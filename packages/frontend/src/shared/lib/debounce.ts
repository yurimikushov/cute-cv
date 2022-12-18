const debounce = <Args extends Array<unknown>>(
  func: (...args: Args) => void,
  wait: number
) => {
  let shouldSkip = false

  return (...args: Args) => {
    if (shouldSkip) {
      return
    }

    func(...args)

    shouldSkip = true

    setTimeout(() => {
      shouldSkip = false
    }, wait)
  }
}

export default debounce
