const without = <T>(arr: ArrayLike<T>, ...values: Array<T>) => {
  const exceptions = new Set(values)

  const result: Array<T> = []

  for (let i = 0; i < arr.length; i++) {
    if (exceptions.has(arr[i])) {
      continue
    }

    result.push(arr[i])
  }

  return result
}

export default without
