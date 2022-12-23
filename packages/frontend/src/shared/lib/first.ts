const first = <T>(
  list:
    | {
        readonly [n: number]: T
        readonly length: number
      }
    | null
    | undefined
) => {
  return list?.[0]
}

export default first
