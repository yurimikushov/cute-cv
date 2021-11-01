import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import noop from 'lodash/noop'
import Card from 'components/Card'
import PageLayout from 'layouts/Page'
import TextArea from 'components/TextArea'
import TextInput from 'components/TextInput'
import AvatarPicker from 'components/AvatarPicker'

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
      <main>
        <TextArea
          className='w-full'
          value={aboutMe}
          placeholder={t('aboutMe.placeholder')}
          onChange={setAboutMe}
        />
        <Card className='p-2' hasClose onClose={noop}>
          <TextInput
            className='block'
            value={position}
            placeholder={t('position.placeholder')}
            onChange={setPosition}
          />
          <TextInput
            className='block mt-2'
            value={position}
            placeholder={t('position.placeholder')}
            onChange={setPosition}
          />
        </Card>
      </main>
      <aside>Additional info</aside>
    </PageLayout>
  )
}

export default HomePage
