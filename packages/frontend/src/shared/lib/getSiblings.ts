import without from 'lodash/without'

const getSiblings = (element: HTMLElement | null) => {
  if (!element) {
    return []
  }

  return without(element?.parentNode?.childNodes, element)
}

export default getSiblings
