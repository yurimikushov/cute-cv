import { FC } from 'react'
import ToolbarLayout from 'layouts/ToolbarLayout'
import PageLayout from 'layouts/PageLayout'
import CVLayout from 'layouts/CVLayout'
import Panel from './Panel'
import Header from './Header'
import Avatar from './Avatar'
import AboutMe from './AboutMe'
import Experiences from './Experiences'
import Educations from './Educations'
import Contacts from './Contacts'
import Technologies from './Technologies'
import Languages from './Languages'

const HomePage: FC = () => (
  <ToolbarLayout className='my-5 flex justify-center'>
    <PageLayout>
      <Panel className='p-4' />
      <CVLayout className='p-12 -mt-11'>
        <Header />
        <Avatar />
        <main className='childs-mt-4'>
          <AboutMe />
          <Experiences />
          <Educations />
        </main>
        <aside className='childs-mt-4'>
          <Contacts />
          <Technologies />
          <Languages />
        </aside>
      </CVLayout>
    </PageLayout>
  </ToolbarLayout>
)

export default HomePage
