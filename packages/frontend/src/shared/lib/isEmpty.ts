const isEmpty = <T>(value: T) => {
  if (!value) {
    return true
  }

  if (Array.isArray(value)) {
    // eslint-disable-next-line no-magic-numbers
    return value.length === 0
  }

  // eslint-disable-next-line no-magic-numbers
  return Object.keys(value).length === 0
}

export default isEmpty
