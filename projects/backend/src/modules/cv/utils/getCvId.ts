import { first, flow, last, split } from 'lodash'

const splitBySlash = (str: string) => split(str, '/')
const splitByDot = (str: string) => split(str, '.')

const getCvId = (fileName: string) => {
  return flow([splitBySlash, last, splitByDot, first])(fileName) as string
}

export default getCvId
