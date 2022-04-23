import { FRONTEND_PATH, BACKEND_PATH } from '../../constants'
import { PrefixesEnum } from './model'

const getPrefix = (filesPaths: Array<string>) => {
  const isFrontedChanged = filesPaths.some(path => path.includes(FRONTEND_PATH))
  const isBackendChanged = filesPaths.some(path => path.includes(BACKEND_PATH))

  if (isFrontedChanged && isBackendChanged) {
    return PrefixesEnum.Front_Back
  }

  if (isFrontedChanged) {
    return PrefixesEnum.Front
  }

  if (isBackendChanged) {
    return PrefixesEnum.Back
  }

  return ''
}

export default getPrefix
