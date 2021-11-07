import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import TextInput from 'components/TextInput'

const Header: FC = () => {
  const { t } = useTranslation()
  const [fullName, setFullName] = useState('')
  const [position, setPosition] = useState('')

  return (
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
  )
}

export default Header