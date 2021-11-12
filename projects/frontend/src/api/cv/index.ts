import isNull from 'lodash/isNull'
import { CV } from 'services/cv'

const load = (): Promise<CV | null> => {
  const cv = localStorage.getItem('cv')

  return new Promise((resolve) => {
    resolve(isNull(cv) ? null : JSON.parse(cv))
  })
}

const save = (cv: CV): Promise<void> => {
  localStorage.setItem('cv', JSON.stringify(cv))

  return new Promise((resolve) => {
    resolve()
  })
}

export { load, save }
