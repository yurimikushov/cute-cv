const once = <Args extends Array<unknown>, Result>(
  cb: (...args: Args) => Result
) => {
  let fired = false
  // eslint-disable-next-line init-declarations
  let result: Result

  return (...args: Args) => {
    if (fired) {
      return result
    }

    result = cb(...args)
    fired = true
    return result
  }
}

export default once
