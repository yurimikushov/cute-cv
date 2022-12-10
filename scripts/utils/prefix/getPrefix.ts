import { PrefixesEnum } from './model'

const getPrefix = (filesPaths: Array<string>) => {
  const isFrontedChanged = filesPaths.some((path) =>
    path.includes('packages/frontend')
  )
  const isBackendChanged = filesPaths.some((path) =>
    path.includes('packages/backend')
  )

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
