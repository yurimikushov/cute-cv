import { createSelector } from '@reduxjs/toolkit'
import size from 'lodash/size'
import map from 'lodash/map'
import { RootState } from 'services/store'

const selectCurrentCvId = (state: RootState) => state.cv.versions.currentId
const selectCvVersions = (state: RootState) => state.cv.versions

const selectCvCount = (state: RootState) => {
  const { ids } = selectCvVersions(state)
  return size(ids)
}

const selectCvNumbers = (state: RootState) => {
  const versions = selectCvVersions(state)
  return map(versions.ids, (id) => versions.byId[id].metadata.number)
}

const selectCurrentRawCv = (state: RootState) => {
  const id = selectCurrentCvId(state)
  const versions = selectCvVersions(state)

  return versions.byId[id]
}

const selectCurrentCv = createSelector(
  selectCurrentRawCv,
  ({ metadata, content }) => {
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
      metadata,
      content: {
        ...content,
        experiences: map(experiences.ids, (id) => experiences.byId[id]),
        educations: map(educations.ids, (id) => educations.byId[id]),
        contacts: map(contacts.ids, (id) => contacts.byId[id]),
        languages: map(languages.ids, (id) => languages.byId[id]),
      },
    }
  }
)

const selectAllCvMetadata = (state: RootState) => {
  const { ids, byId } = selectCvVersions(state)

  return map(ids, (id) => {
    const { metadata } = byId[id]
    return metadata
  })
}

const selectCvMetadata = (state: RootState) => {
  const { metadata } = selectCurrentRawCv(state)
  return metadata
}

const selectCvContent = (state: RootState) => {
  const { content } = selectCurrentCv(state)

  return content
}

type Cv = ReturnType<typeof selectCurrentCv>
type CvMetadata = ReturnType<typeof selectCvMetadata>
type CvContent = ReturnType<typeof selectCvContent>

export {
  selectCvCount,
  selectCvNumbers,
  selectAllCvMetadata,
  selectCurrentCv,
  selectCvMetadata,
  selectCvContent,
  selectCurrentCvId,
}
export type { Cv, CvMetadata, CvContent }
