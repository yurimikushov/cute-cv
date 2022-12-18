import head from 'lodash/head'
import indexOf from 'lodash/indexOf'

const getNextCurrentId = (ids: Array<string>, id: string) => {
  const idIndex = indexOf(ids, id)

  // eslint-disable-next-line no-magic-numbers
  if (idIndex === -1 && ids.length > 0) {
    return head(ids) as string
  }

  // eslint-disable-next-line no-magic-numbers
  if (idIndex === 0 && ids.length > 1) {
    // eslint-disable-next-line no-magic-numbers
    return ids[1]
  }

  // eslint-disable-next-line no-magic-numbers
  const prevIdIndex = idIndex - 1

  return ids[prevIdIndex]
}

export default getNextCurrentId
