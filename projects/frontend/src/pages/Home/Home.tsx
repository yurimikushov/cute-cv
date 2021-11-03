import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import PageLayout from 'layouts/Page'
import TextArea from 'components/TextArea'
import TextInput from 'components/TextInput'
import AvatarPicker from 'components/AvatarPicker'
import Experiences from './Experiences'
import H from 'components/H'

const HomePage: FC = () => {
  const { t } = useTranslation()
  const [fullName, setFullName] = useState('')
  const [position, setPosition] = useState('')
  const [avatar, setAvatar] = useState('')
  const [aboutMe, setAboutMe] = useState('')

  return (
    <PageLayout className='mx-auto my-5 grid grid-cols-page grid-rows-page gap-10'>
      <header>
        <TextInput
          className='block'
          size='2xl'
          value={fullName}
          placeholder={t('fullName.placeholder')}
          onChange={setFullName}
        />
        <TextInput
          className='block mt-3'
          size='xl'
          value={position}
          placeholder={t('position.placeholder')}
          onChange={setPosition}
        />
      </header>
      <AvatarPicker src={avatar} onPick={(src) => setAvatar(src ?? '')} />
      <main className='childs-mt-4'>
        <TextArea
          className='w-full'
          value={aboutMe}
          placeholder={t('aboutMe.placeholder')}
          onChange={setAboutMe}
        />
        <Experiences />
      </main>
      <aside>
        <H tag='2'>{t('contacts.title')}</H>
      </aside>
    </PageLayout>
  )
}

export default HomePage
