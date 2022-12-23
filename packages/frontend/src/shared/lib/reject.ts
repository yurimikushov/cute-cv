const reject = <O extends object, K extends keyof O>(
  arr: Array<O>,
  predicate: Partial<Record<K, O[K]>>
) => {
  const keys = Object.keys(predicate) as Array<K>
  return arr.filter((el) => {
    let isValid = true

    for (const key of keys) {
      if (!isValid) {
        break
      }

      if (!Object.hasOwn(el, key)) {
        return true
      }

      if (isValid) {
        isValid = el[key] !== predicate[key]
      }
    }

    return isValid
  })
}

export default reject
