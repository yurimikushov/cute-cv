import { createSelector } from '@reduxjs/toolkit'

const createArraySelector = <S, Id extends string, Item>(
  selector: (state: S) => {
    ids: Array<Id>
    byId: Record<Id, Item>
  }
) => {
  return createSelector(selector, ({ ids, byId }) => {
    return ids.map((id) => byId[id])
  })
}

export default createArraySelector
