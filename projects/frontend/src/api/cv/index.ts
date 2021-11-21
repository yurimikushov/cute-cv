import axios, { AxiosError } from 'axios'
import { right, left } from '@sweet-monads/either'
import isNull from 'lodash/isNull'
import { CV } from 'services/cv'

const load = async () => {
  try {
    const { data: cv } = await axios.get<CV | null>('/cv')

    if (isNull(cv)) {
      return right(null)
    }

    return right(cv)
  } catch (error) {
    return left(error as AxiosError)
  }
}

const save = async (cv: CV) => {
  try {
    await axios.put('/cv', cv)
    return right(null)
  } catch (error) {
    return left(error as AxiosError)
  }
}

export { load, save }
