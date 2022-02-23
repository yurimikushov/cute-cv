/* eslint-disable no-magic-numbers */
import replace from 'lodash/replace'
import map from 'lodash/map'
import { VERSION_PREFIX } from '../constants'

const getVersionNumber = (name: string) => {
  return parseInt(replace(name, VERSION_PREFIX, ''), 10)
}

const getNextCvName = (names: Array<string>) => {
  const maxVersionNum = Math.max(...map(names, getVersionNumber))

  return `${VERSION_PREFIX}${maxVersionNum + 1}`
}

export default getNextCvName
