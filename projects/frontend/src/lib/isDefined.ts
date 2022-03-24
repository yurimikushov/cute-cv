import isUndefined from 'lodash/isUndefined'

const isDefined = <T>(value?: T): value is T => {
  return !isUndefined(value)
}

export default isDefined
