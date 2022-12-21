import without from 'shared/lib/without'

const getSiblings = (element: HTMLElement | null) => {
  if (!element?.parentNode?.childNodes) {
    return []
  }

  return without(element.parentNode.childNodes, element)
}

export default getSiblings
