import { createSelector } from '@reduxjs/toolkit'
import sortBy from 'lodash/sortBy'
import map from 'lodash/map'
import { RootStateT } from 'services/store'

const selectCurrentCvId = (state: RootStateT) => state.cv.versions.currentId
const selectCvVersions = (state: RootStateT) => state.cv.versions

const selectCurrentVersion = (state: RootStateT) => {
  const id = selectCurrentCvId(state)
  const versions = selectCvVersions(state)

  return versions.byId[id]
}

const selectAllCvMetadata = (state: RootStateT) => {
  const { ids, byId } = selectCvVersions(state)

  const allCvMetadata = map(ids, (id) => {
    const { metadata } = byId[id]
    const { name, number } = metadata

    return {
      id,
      name,
      number,
    }
  })

  return sortBy(allCvMetadata, 'number')
}

const selectCvMetadata = (state: RootStateT) => {
  const { metadata } = selectCurrentVersion(state)
  return metadata
}

const selectRawCvContent = (state: RootStateT) => {
  const { content } = selectCurrentVersion(state)
  return content
}

const selectCvContent = createSelector(selectRawCvContent, (content) => {
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

type CV = ReturnType<typeof selectCvContent>

export {
  selectAllCvMetadata,
  selectCvMetadata,
  selectCvContent,
  selectCurrentCvId,
}
export type { CV }
