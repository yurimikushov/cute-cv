import { createSelector } from '@reduxjs/toolkit'
import map from 'lodash/map'

const createArraySelector = <S, Id extends string, Item>(
  selector: (state: S) => {
    ids: Array<Id>
    byId: Record<Id, Item>
  }
) => {
  return createSelector(selector, ({ ids, byId }) => {
    return map(ids, (id) => byId[id])
  })
}

export default createArraySelector
