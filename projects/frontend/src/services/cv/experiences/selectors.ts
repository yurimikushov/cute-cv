import { createSelector } from 'reselect'
import map from 'lodash/map'
import { RootStateT } from 'services/store'
import { ExperiencesStateT } from './model'

const selectIds = ({ cv }: RootStateT): ExperiencesStateT['ids'] => {
  return cv.experiences.ids
}

const selectExperiencesById = ({
  cv,
}: RootStateT): ExperiencesStateT['experiencesById'] => {
  return cv.experiences.experiencesById
}

const selectExperiences = createSelector(
  selectIds,
  selectExperiencesById,
  (ids, experiencesById) => {
    return map(ids, (id) => experiencesById[id])
  }
)

export { selectExperiences }
