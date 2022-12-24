import isNumber from './isNumber'
import isObject from './isObject'

// TODO: it doesn't test objects like Map, Set, etc
// testing them should be implemented

// eslint-disable-next-line @typescript-eslint/no-explicit-any, max-statements
const isEqual = (value1: any, value2: any): boolean => {
  if (value1 === value2) {
    return true
  }

  if (isNumber(value1) && isNumber(value2) && isNaN(value1) && isNaN(value2)) {
    return true
  }

  if (!isObject(value1) || !isObject(value2)) {
    return false
  }

  if (Array.isArray(value1) && Array.isArray(value2)) {
    return (
      value1.length === value2.length &&
      value1.every((_, i) => isEqual(value1[i], value2[i]))
    )
  }

  if (value1 instanceof Date && value2 instanceof Date) {
    return value1.getTime() === value2.getTime()
  }
  if (value1 instanceof RegExp && value2 instanceof RegExp) {
    return value1.toString() === value2.toString()
  }

  const keys1 = Object.keys(value1)
  const keys2 = Object.keys(value2)

  return (
    keys1.length === keys2.length &&
    keys1.every((key) =>
      isEqual(
        (value1 as Record<string, unknown>)[key],
        (value2 as Record<string, unknown>)[key]
      )
    )
  )
}

export default isEqual
