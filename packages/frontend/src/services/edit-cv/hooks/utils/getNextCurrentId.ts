import first from 'shared/lib/first'

const getNextCurrentId = (ids: Array<string>, id: string) => {
  const idIndex = ids.indexOf(id)

  if (idIndex === -1 && ids.length > 0) {
    return first(ids) as string
  }

  if (idIndex === 0 && ids.length > 1) {
    return ids[1]
  }

  const prevIdIndex = idIndex - 1

  return ids[prevIdIndex]
}

export default getNextCurrentId
