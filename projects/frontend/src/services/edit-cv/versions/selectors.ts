import size from 'lodash/size'
import map from 'lodash/map'
import memoizeSelectorResultDeeply from 'shared/lib/memoizeSelectorResultDeeply'
import createArraySelector from 'shared/lib/createArraySelector'
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

const selectAllCvMetadata = memoizeSelectorResultDeeply((state: RootState) => {
  const { ids, byId } = selectCvVersions(state)
  return map(ids, (id) => byId[id].metadata)
})

const selectCurrentRawCv = (state: RootState) => {
  const id = selectCurrentCvId(state)
  const versions = selectCvVersions(state)

  return versions.byId[id]
}

const selectCvMetadata = (state: RootState) => {
  const { metadata } = selectCurrentRawCv(state)
  return metadata
}

const createCurrentCvContentSelector = <
  P extends keyof ReturnType<typeof selectCurrentRawCv>['content']
>(
  path: P
) => {
  return (state: RootState) => {
    return selectCurrentRawCv(state).content[path]
  }
}

const selectCurrentCvFullName = createCurrentCvContentSelector('fullName')

const selectCurrentCvPosition = createCurrentCvContentSelector('position')

const selectCurrentCvAvatar = createCurrentCvContentSelector('avatar')

const selectCurrentCvAboutMe = createCurrentCvContentSelector('aboutMe')

const selectCurrentCvExperiences = createArraySelector(
  createCurrentCvContentSelector('experiences')
)

const selectCurrentCvEducations = createArraySelector(
  createCurrentCvContentSelector('educations')
)

const selectCurrentCvContacts = createArraySelector(
  createCurrentCvContentSelector('contacts')
)

const selectCurrentCvTechnologies =
  createCurrentCvContentSelector('technologies')

const selectCurrentCvLanguages = createArraySelector(
  createCurrentCvContentSelector('languages')
)

const selectCurrentCvContent = (state: RootState) => ({
  fullName: selectCurrentCvFullName(state),
  position: selectCurrentCvPosition(state),
  avatar: selectCurrentCvAvatar(state),
  aboutMe: selectCurrentCvAboutMe(state),
  experiences: selectCurrentCvExperiences(state),
  educations: selectCurrentCvEducations(state),
  contacts: selectCurrentCvContacts(state),
  technologies: selectCurrentCvTechnologies(state),
  languages: selectCurrentCvLanguages(state),
})

const selectCurrentCv = (state: RootState) => ({
  metadata: selectCvMetadata(state),
  content: selectCurrentCvContent(state),
})

type Cv = ReturnType<typeof selectCurrentCv>
type CvMetadata = ReturnType<typeof selectCvMetadata>
type CvContent = ReturnType<typeof selectCurrentCvContent>

export {
  selectCvCount,
  selectCvNumbers,
  selectAllCvMetadata,
  selectCurrentCv,
  selectCurrentCvFullName,
  selectCurrentCvPosition,
  selectCurrentCvAvatar,
  selectCurrentCvAboutMe,
  selectCurrentCvExperiences,
  selectCurrentCvEducations,
  selectCurrentCvContacts,
  selectCurrentCvTechnologies,
  selectCurrentCvLanguages,
  selectCvMetadata,
  selectCurrentCvId,
}
export type { Cv, CvMetadata, CvContent }
