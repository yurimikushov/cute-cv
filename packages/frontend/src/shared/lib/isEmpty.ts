const isEmpty = <T>(value: T) => {
  if (!value) {
    return true
  }

  if (Array.isArray(value)) {
    return value.length === 0
  }

  return Object.keys(value).length === 0
}

export default isEmpty
