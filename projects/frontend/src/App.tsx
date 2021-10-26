import { FC, useState } from 'react'
import TextArea from 'components/TextArea'
import TextInput from 'components/TextInput'

const App: FC = () => {
  const [text, setText] = useState('')

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
    </div>
  )
}

export default App
