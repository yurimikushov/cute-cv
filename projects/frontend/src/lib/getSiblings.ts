import filter from 'lodash/filter'

const getSiblings = (element: HTMLElement | null) => {
  return filter(element?.parentNode?.childNodes, (node) => node !== element)
}

export default getSiblings
