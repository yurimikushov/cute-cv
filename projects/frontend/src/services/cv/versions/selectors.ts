import { createSelector } from '@reduxjs/toolkit'
import map from 'lodash/map'
import { RootStateT } from 'services/store'

// TODO: should add cv versions feature
// and pass dynamically id of cv version
const CV_VERSION_ID = 'o9uHJNX4AkTao9uHJNX4A'

const selectCurrentCvId = () => CV_VERSION_ID

const selectCvVersions = (state: RootStateT) => state.cv.versions

const selectCV = createSelector(
  selectCurrentCvId,
  selectCvVersions,
  (cvId, cvVersions) => {
    const { content } = cvVersions.byId[cvId]
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

export { selectCV }
export type { CV }
