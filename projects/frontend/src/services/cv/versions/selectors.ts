import { createSelector } from '@reduxjs/toolkit'
import map from 'lodash/map'
import { RootStateT } from 'services/store'

const selectCurrentCvId = (state: RootStateT) => state.cv.versions.currentId
const selectCvVersions = (state: RootStateT) => state.cv.versions

const selectCurrentVersion = (state: RootStateT) => {
  const id = selectCurrentCvId(state)
  const versions = selectCvVersions(state)

  return versions.byId[id]
}

const selectRawCvContent = (state: RootStateT) => {
  const { content } = selectCurrentVersion(state)
  return content
}

const selectCV = createSelector(selectRawCvContent, (content) => {
  content ??= {
    fullName: '',
    position: '',
    aboutMe: '',
    avatar: null,
    experiences: { ids: [], byId: {} },
    educations: { ids: [], byId: {} },
    contacts: { ids: [], byId: {} },
    technologies: '',
    languages: { ids: [], byId: {} },
  }

  const { experiences, educations, contacts, languages } = content

  return {
    ...content,
    experiences: map(experiences.ids, (id) => experiences.byId[id]),
    educations: map(educations.ids, (id) => educations.byId[id]),
    contacts: map(contacts.ids, (id) => contacts.byId[id]),
    languages: map(languages.ids, (id) => languages.byId[id]),
  }
})

type CV = ReturnType<typeof selectCV>

export { selectCV, selectCurrentCvId }
export type { CV }
