import { createSelector } from '@reduxjs/toolkit'
import map from 'lodash/map'
import { RootStateT } from 'services/store'

const selectCurrentCvId = (state: RootStateT) => state.cv.versions.currentId
const selectCvVersions = (state: RootStateT) => state.cv.versions

const selectCV = createSelector(
  selectCurrentCvId,
  selectCvVersions,
  (cvId, cvVersions) => {
    const { content } = cvVersions.byId[cvId] ?? {
      content: {
        fullName: '',
        position: '',
        aboutMe: '',
        avatar: null,
        experiences: { ids: [], byId: {} },
        educations: { ids: [], byId: {} },
        contacts: { ids: [], byId: {} },
        technologies: '',
        languages: { ids: [], byId: {} },
      },
    }

    const {
      fullName,
      position,
      aboutMe,
      avatar,
      experiences,
      educations,
      contacts,
      technologies,
      languages,
    } = content

    return {
      fullName,
      position,
      aboutMe,
      avatar,
      experiences: map(experiences.ids, (id) => experiences.byId[id]),
      educations: map(educations.ids, (id) => educations.byId[id]),
      contacts: map(contacts.ids, (id) => contacts.byId[id]),
      technologies,
      languages: map(languages.ids, (id) => languages.byId[id]),
    }
  }
)

type CV = ReturnType<typeof selectCV>

export { selectCV, selectCurrentCvId }
export type { CV }
