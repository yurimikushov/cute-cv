declare interface ArrayLike<T> {
  [n: number]: T
  length: number
}

type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
