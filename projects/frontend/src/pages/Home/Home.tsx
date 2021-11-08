import { FC } from 'react'
import PageLayout from 'layouts/Page'
import Header from './Header'
import Avatar from './Avatar'
import AboutMe from './AboutMe'
import Experiences from './Experiences'
import Educations from './Educations'
import Contacts from './Contacts'
import Technologies from './Technologies'
import Languages from './Languages'

const HomePage: FC = () => (
  <PageLayout className='mx-auto my-5 grid grid-cols-page grid-rows-page gap-10'>
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
  </PageLayout>
)

export default HomePage
