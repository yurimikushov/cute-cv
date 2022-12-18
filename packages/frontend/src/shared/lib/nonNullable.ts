const nonNullable = <T>(value: T): NonNullable<T> => {
  if (!value) {
    throw new Error('Unexpected nullable value')
  }

  return value as NonNullable<T>
}

export default nonNullable
