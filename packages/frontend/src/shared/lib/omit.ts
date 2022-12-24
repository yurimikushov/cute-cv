const omit = <O extends object, K extends keyof O>(
  object: O,
  ...keys: Array<K>
): Omit<O, K> => {
  const result = {} as O

  for (const key of Object.keys(object) as Array<K>) {
    if (keys.includes(key)) {
      continue
    }

    result[key] = object[key]
  }

  return result
}

export default omit
