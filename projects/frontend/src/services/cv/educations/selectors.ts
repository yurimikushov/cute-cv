import { createSelector } from 'reselect'
import map from 'lodash/map'
import { RootStateT } from 'services/store'
import { EducationsStateT } from './model'

const selectIds = ({ cv }: RootStateT): EducationsStateT['ids'] => {
  return cv.educations.ids
}

const selectEducationsById = ({
  cv,
}: RootStateT): EducationsStateT['educationsById'] => {
  return cv.educations.educationsById
}

const selectEducations = createSelector(
  selectIds,
  selectEducationsById,
  (ids, educationsById) => {
    return map(ids, (id) => educationsById[id])
  }
)

export { selectEducations }