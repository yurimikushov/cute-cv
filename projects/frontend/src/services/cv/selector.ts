import { createSelector } from 'reselect'
import { selectFullName } from './name'
import { selectPosition } from './position'
import { selectAvatar } from './avatar'
import { selectAboutMe } from './aboutMe'
import { selectExperiences } from './experiences'
import { selectEducations } from './educations'
import { selectContacts } from './contacts'
import { selectTechnologies } from './technologies'
import { selectLanguages } from './languages'

const selectCV = createSelector(
  selectFullName,
  selectPosition,
  selectAvatar,
  selectAboutMe,
  selectExperiences,
  selectEducations,
  selectContacts,
  selectTechnologies,
  selectLanguages,
  (
    fullName,
    position,
    avatar,
    aboutMe,
    experiences,
    educations,
    contacts,
    technologies,
    languages
    // eslint-disable-next-line max-params
  ) =>
    ({
      fullName,
      position,
      avatar,
      aboutMe,
      experiences,
      educations,
      contacts,
      technologies,
      languages,
    } as const)
)

export { selectCV }
