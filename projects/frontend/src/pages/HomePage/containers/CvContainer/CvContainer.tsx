import { FC } from 'react'
import { CV_CONTAINER_ID } from 'services/download-cv'
import CvLayout from 'layouts/CvLayout'
import HeaderContainer from './containers/HeaderContainer'
import AvatarContainer from './containers/AvatarContainer'
import AboutMeContainer from './containers/AboutMeContainer'
import ExperiencesContainer from './containers/ExperiencesContainer'
import EducationsContainer from './containers/EducationsContainer'
import ContactsContainer from './containers/ContactsContainer'
import TechnologiesContainer from './containers/TechnologiesContainer'
import LanguagesContainer from './containers/LanguagesContainer'
import CvContainerProps from './CvContainer.props'

const CvContainer: FC<CvContainerProps> = (props) => {
  return (
    <CvLayout
      {...props}
      id={CV_CONTAINER_ID}
      header={<HeaderContainer />}
      avatar={<AvatarContainer />}
      main={
        <>
          <AboutMeContainer />
          <ExperiencesContainer />
          <EducationsContainer />
        </>
      }
      aside={
        <>
          <ContactsContainer />
          <TechnologiesContainer />
          <LanguagesContainer />
        </>
      }
    />
  )
}

export default CvContainer
