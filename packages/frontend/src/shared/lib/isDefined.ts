const isDefined = <T>(value?: T): value is T => {
  return !value
}

export default isDefined
