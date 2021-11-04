import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import PageLayout from 'layouts/Page'
import Header from './Header'
import AvatarPicker from 'components/AvatarPicker'
import AboutMe from './AboutMe'
import Experiences from './Experiences'
import Educations from './Educations'
import H from 'components/H'

const HomePage: FC = () => {
  const { t } = useTranslation()
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
        <H tag='2'>{t('contacts.title')}</H>
      </aside>
    </PageLayout>
  )
}

export default HomePage
