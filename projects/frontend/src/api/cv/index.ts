import axios from 'axios'
import isNull from 'lodash/isNull'
import { CV } from 'services/cv'

const load = async () => {
  try {
    const { data: cv } = await axios.get<CV | null>('/cv')

    if (isNull(cv)) {
      return null
    }

    return cv
  } catch (error) {
    // TODO: should handle any error
    return null
  }
}

const save = (cv: CV): Promise<void> => {
  localStorage.setItem('cv', JSON.stringify(cv))

  return new Promise((resolve) => {
    resolve()
  })
}

export { load, save }
