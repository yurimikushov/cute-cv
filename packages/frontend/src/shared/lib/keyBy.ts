const keyBy = <
  I extends {
    [key in K]: string
  },
  K extends string
>(
  arr: Array<I>,
  key: K
) => {
  const result: Record<string, I> = {}

  arr.forEach((item) => {
    result[item[key]] = item
  })

  return result
}

export default keyBy
