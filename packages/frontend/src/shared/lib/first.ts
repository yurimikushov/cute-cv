const first = <T>(
  list:
    | {
        readonly [n: number]: T
        readonly length: number
      }
    | null
    | undefined
) => {
  // eslint-disable-next-line no-magic-numbers
  return list?.[0]
}

export default first
