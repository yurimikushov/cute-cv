import { createSelector } from 'reselect'
import map from 'lodash/map'
import { RootStateT } from 'services/store'
import { LanguagesStateT } from './model'

const selectIds = ({ languages }: RootStateT): LanguagesStateT['ids'] => {
  return languages.ids
}

const selectLanguagesById = ({
  languages,
}: RootStateT): LanguagesStateT['languagesById'] => {
  return languages.languagesById
}

const selectLanguages = createSelector(
  selectIds,
  selectLanguagesById,
  (ids, languagesById) => {
    return map(ids, (id) => languagesById[id])
  }
)

export { selectLanguages }
