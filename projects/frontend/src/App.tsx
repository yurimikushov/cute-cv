import { FC, useState } from 'react'
import TextArea from 'components/TextArea'
import TextInput from 'components/TextInput'
import AvatarPicker from 'components/AvatarPicker'

const App: FC = () => {
  const [text, setText] = useState('')
  const [avatar, setAvatar] = useState('')

  return (
    <div className='flex flex-col p-6'>
      <TextInput
        size='sm'
        value={text}
        onChange={setText}
        placeholder='Название поля'
      />
      <TextInput value={text} onChange={setText} placeholder='Название поля' />
      <TextInput
        size='lg'
        value={text}
        onChange={setText}
        placeholder='Название поля'
      />
      <TextInput
        size='xl'
        value={text}
        onChange={setText}
        placeholder='Название поля'
      />
      <TextInput
        disabled
        size='2xl'
        value={text}
        onChange={setText}
        placeholder='Название поля'
      />
      <TextArea value={text} onChange={setText} placeholder='Название поля' />
      <TextArea
        disabled
        value={text}
        onChange={setText}
        placeholder='Название поля'
      />
      <AvatarPicker src={avatar} onPick={setAvatar} />
    </div>
  )
}

export default App
