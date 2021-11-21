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

const save = (cv: CV): Promise<void> => {
  localStorage.setItem('cv', JSON.stringify(cv))

  return new Promise((resolve) => {
    resolve()
  })
}

export { load, save }
