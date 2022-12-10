import head from 'lodash/head'
import indexOf from 'lodash/indexOf'
import size from 'lodash/size'

const getNextCurrentId = (ids: Array<string>, id: string) => {
  const idIndex = indexOf(ids, id)

  // eslint-disable-next-line no-magic-numbers
  if (idIndex === -1 && size(ids) > 0) {
    return head(ids) as string
  }

  // eslint-disable-next-line no-magic-numbers
  if (idIndex === 0 && size(ids) > 1) {
    // eslint-disable-next-line no-magic-numbers
    return ids[1]
  }

  // eslint-disable-next-line no-magic-numbers
  const prevIdIndex = idIndex - 1

  return ids[prevIdIndex]
}

export default getNextCurrentId
