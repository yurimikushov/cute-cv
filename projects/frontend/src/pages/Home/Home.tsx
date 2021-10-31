import { FC, useState } from 'react'
import PageLayout from 'layouts/Page'
import TextArea from 'components/TextArea'
import TextInput from 'components/TextInput'
import AvatarPicker from 'components/AvatarPicker'

const HomePage: FC = () => {
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
          placeholder='Full name'
          onChange={setFullName}
        />
        <TextInput
          className='block mt-3'
          size='xl'
          value={position}
          placeholder='Position'
          onChange={setPosition}
        />
      </header>
      <AvatarPicker src={avatar} onPick={(src) => setAvatar(src ?? '')} />
      <main>
        <TextArea
          className='w-full'
          value={aboutMe}
          placeholder='Say something about you'
          onChange={setAboutMe}
        />
      </main>
      <aside>Additional info</aside>
    </PageLayout>
  )
}

export default HomePage
