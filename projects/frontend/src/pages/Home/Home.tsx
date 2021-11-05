import { FC, useState } from 'react'
import PageLayout from 'layouts/Page'
import Header from './Header'
import AvatarPicker from 'components/AvatarPicker'
import AboutMe from './AboutMe'
import Experiences from './Experiences'
import Educations from './Educations'
import Contacts from './Contacts'
import Technologies from './Technologies'

const HomePage: FC = () => {
  const [avatar, setAvatar] = useState('')

  return (
    <PageLayout className='mx-auto my-5 grid grid-cols-page grid-rows-page gap-10'>
      <Header />
      <AvatarPicker src={avatar} onPick={(src) => setAvatar(src ?? '')} />
      <main className='childs-mt-4'>
        <AboutMe />
        <Experiences />
        <Educations />
      </main>
      <aside>
        <Contacts />
        <Technologies />
      </aside>
    </PageLayout>
  )
}

export default HomePage
