import { FC } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import isEmpty from 'lodash/isEmpty'
import useLayoutEffectWhen from 'hooks/useLayoutEffectWhen'
import { useAuth, useIsSignedIn, useIsSignInChecking } from 'services/auth'
import {
  useAutoLoadAllCv,
  useAutoLoadCurrentCv,
  useCleanUpAllCvAfterSignOut,
  useEditable,
  useCurrentCvContent,
  useIsCVLoading,
  FULL_NAME_MAX_LENGTH,
  POSITION_MAX_LENGTH,
  ABOUT_ME_MAX_LENGTH,
  EXPERIENCES_MAX_COUNT,
  EXPERIENCE_POSITION_MAX_LENGTH,
  EXPERIENCE_COMPANY_MAX_LENGTH,
  EXPERIENCE_DURATION_MAX_LENGTH,
  EXPERIENCE_DESCRIPTION_MAX_LENGTH,
  EDUCATIONS_MAX_COUNT,
  EDUCATION_DEGREE_MAX_LENGTH,
  EDUCATION_UNIVERSITY_MAX_LENGTH,
  EDUCATION_DURATION_MAX_LENGTH,
} from 'services/cv'
import BasePanelsLayout from 'layouts/PanelsLayout'
import PageLayout from 'layouts/PageLayout'
import CVLayout from 'layouts/CVLayout'
import Loader from 'components/ui/Loader'
import Panel from './Panel'
import Header from 'components/cv/Header'
import Avatar from 'components/cv/Avatar'
import AboutMe from 'components/cv/AboutMe'
import Experiences from 'components/cv/Experiences'
import Educations from 'components/cv/Educations'
import Contacts from './Contacts'
import Technologies from './Technologies'
import Languages from './Languages'

const PanelsLayout = styled(BasePanelsLayout)`
  margin-top: 1.25rem;
  margin-bottom: 3.5rem;
  display: flex;
  justify-content: center;
`

const StyledPanel = styled(Panel)`
  padding: 1rem;
`

const StyledCVLayout = styled(({ children, ...props }) => (
  <div {...props}>
    <CVLayout>{children}</CVLayout>
  </div>
))`
  padding: 4rem;
  margin-top: -3rem;
`

const Main = styled.main`
  & > * + * {
    margin-top: 1.5rem;
  }
`

const Aside = styled.aside`
  & > * + * {
    margin-top: 1rem;
  }
`

// eslint-disable-next-line max-statements
const HomePage: FC = () => {
  useAuth()
  useAutoLoadAllCv()
  useAutoLoadCurrentCv()
  useCleanUpAllCvAfterSignOut()

  const { i18n } = useTranslation()
  const { isSignedIn } = useIsSignedIn()
  const { editable } = useEditable()
  const {
    cv,
    changeFullName,
    changePosition,
    changeAvatar,
    deleteAvatar,
    changeAboutMe,
    changeExperience,
    reorderExperience,
    deleteExperience,
    addExperience,
    changeEducation,
    reorderEducation,
    deleteEducation,
    addEduction,
  } = useCurrentCvContent()
  const { isCVLoading } = useIsCVLoading()
  const { isSignInChecking } = useIsSignInChecking()

  const { fullName, position, avatar, aboutMe, experiences, educations } = cv

  useLayoutEffectWhen(addExperience, isEmpty(experiences))
  useLayoutEffectWhen(addEduction, isEmpty(educations))

  return (
    <>
      <Helmet htmlAttributes={{ lang: i18n.language }}>
        <title>{cv.fullName || 'Cute CV'} </title>
      </Helmet>
      {(isSignInChecking || isCVLoading) && <Loader.FullScreen />}
      <PanelsLayout>
        <PageLayout>
          <StyledPanel />
          <StyledCVLayout>
            <Header
              editable={editable}
              autoFocusFullName={isSignedIn && editable}
              fullName={fullName}
              position={position}
              fullNameMaxLength={FULL_NAME_MAX_LENGTH}
              positionMaxLength={POSITION_MAX_LENGTH}
              onChangeFullName={changeFullName}
              onChangePosition={changePosition}
            />
            <Avatar
              src={avatar}
              editable={editable}
              onPick={changeAvatar}
              onClear={deleteAvatar}
            />
            <Main>
              <AboutMe
                value={aboutMe}
                editable={editable}
                maxLength={ABOUT_ME_MAX_LENGTH}
                onChange={changeAboutMe}
              />
              <Experiences
                editable={editable}
                experiences={experiences}
                maxCount={EXPERIENCES_MAX_COUNT}
                positionMaxLength={EXPERIENCE_POSITION_MAX_LENGTH}
                companyMaxLength={EXPERIENCE_COMPANY_MAX_LENGTH}
                durationMaxLength={EXPERIENCE_DURATION_MAX_LENGTH}
                descriptionMaxLength={EXPERIENCE_DESCRIPTION_MAX_LENGTH}
                onChange={changeExperience}
                onReorder={reorderExperience}
                onDelete={deleteExperience}
                onAdd={addExperience}
              />
              <Educations
                editable={editable}
                educations={educations}
                maxCount={EDUCATIONS_MAX_COUNT}
                degreeMaxLength={EDUCATION_DEGREE_MAX_LENGTH}
                universityMaxLength={EDUCATION_UNIVERSITY_MAX_LENGTH}
                durationMaxLength={EDUCATION_DURATION_MAX_LENGTH}
                onChange={changeEducation}
                onReorder={reorderEducation}
                onDelete={deleteEducation}
                onAdd={addEduction}
              />
            </Main>
            <Aside>
              <Contacts />
              <Technologies />
              <Languages />
            </Aside>
          </StyledCVLayout>
        </PageLayout>
      </PanelsLayout>
    </>
  )
}

export default HomePage
