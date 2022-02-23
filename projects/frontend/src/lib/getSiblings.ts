import isNull from 'lodash/isNull'
import without from 'lodash/without'

const getSiblings = (element: HTMLElement | null) => {
  if (isNull(element)) {
    return []
  }

  return without(element?.parentNode?.childNodes, element)
}

export default getSiblings
