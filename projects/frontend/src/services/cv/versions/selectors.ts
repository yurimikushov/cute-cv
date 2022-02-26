import { createSelector } from '@reduxjs/toolkit'
import size from 'lodash/size'
import sortBy from 'lodash/sortBy'
import map from 'lodash/map'
import { RootStateT } from 'services/store'

const selectCurrentCvId = (state: RootStateT) => state.cv.versions.currentId
const selectCvVersions = (state: RootStateT) => state.cv.versions

const selectCvCount = (state: RootStateT) => {
  const { ids } = selectCvVersions(state)
  return size(ids)
}

const selectCvNumbers = (state: RootStateT) => {
  const versions = selectCvVersions(state)
  return map(versions.ids, (id) => versions.byId[id].metadata.number)
}

const selectCurrentVersion = (state: RootStateT) => {
  const id = selectCurrentCvId(state)
  const versions = selectCvVersions(state)

  return versions.byId[id]
}

const selectAllCvMetadata = (state: RootStateT) => {
  const { ids, byId } = selectCvVersions(state)

  const allCvMetadata = map(ids, (id) => {
    const { metadata } = byId[id]
    return metadata
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
  selectCvCount,
  selectCvNumbers,
  selectAllCvMetadata,
  selectCvMetadata,
  selectCvContent,
  selectCurrentCvId,
}
export type { CV }
