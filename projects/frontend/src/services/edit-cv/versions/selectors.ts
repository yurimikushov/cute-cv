import { createSelector } from '@reduxjs/toolkit'
import size from 'lodash/size'
import map from 'lodash/map'
import memoizeSelectorResultDeeply from 'lib/memoizeSelectorResultDeeply'
import { RootState } from 'services/store'

const selectCurrentCvId = (state: RootState) =>
  state['edit-cv'].versions.currentId
const selectCvVersions = (state: RootState) => state['edit-cv'].versions

const selectCvCount = (state: RootState) => {
  const { ids } = selectCvVersions(state)
  return size(ids)
}

const selectCvNumbers = memoizeSelectorResultDeeply((state: RootState) => {
  const { ids, byId } = selectCvVersions(state)
  return map(ids, (id) => byId[id].metadata.number)
})

const selectCurrentRawCv = (state: RootState) => {
  const id = selectCurrentCvId(state)
  const versions = selectCvVersions(state)

  return versions.byId[id]
}

const selectRawCvMetadata = (state: RootState) => {
  const { metadata } = selectCurrentRawCv(state)
  return metadata
}

const selectRawCvContent = (state: RootState) => {
  const { content } = selectCurrentRawCv(state)
  return content
}

const selectCurrentCv = createSelector(
  selectRawCvMetadata,
  selectRawCvContent,
  (metadata, content) => {
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

    const { publicId } = metadata
    const { experiences, educations, contacts, languages } = content

    return {
      metadata: {
        ...metadata,
        publicId,
      },
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

const selectCvMetadata = selectRawCvMetadata

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
