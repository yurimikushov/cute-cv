const isObject = (value: unknown): value is object => {
  if (value === null) {
    return false
  }

  const type = typeof value
  return type === 'object' || type === 'function'
}

export default isObject
