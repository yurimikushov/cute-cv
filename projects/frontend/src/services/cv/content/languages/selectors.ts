import { createSelector } from 'reselect'
import map from 'lodash/map'
import { RootStateT } from 'services/store'
import { LanguagesStateT } from './model'

const selectIds = ({ cv }: RootStateT): LanguagesStateT['ids'] => {
  return cv.content.languages.ids
}

const selectLanguagesById = ({
  cv,
}: RootStateT): LanguagesStateT['languagesById'] => {
  return cv.content.languages.languagesById
}

const selectLanguages = createSelector(
  selectIds,
  selectLanguagesById,
  (ids, languagesById) => {
    return map(ids, (id) => languagesById[id])
  }
)

export { selectLanguages }
