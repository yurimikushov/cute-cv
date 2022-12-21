const pick = <O extends object, K extends keyof O>(
  object: O,
  ...keys: Array<K>
) => {
  const result = {} as Pick<O, K>

  keys.forEach((key) => {
    result[key] = object[key]
  })

  return result
}

export default pick
