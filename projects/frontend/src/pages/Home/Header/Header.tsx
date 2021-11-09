import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useFullName, usePosition } from 'services/cv'
import TextInput from 'components/TextInput'

const Header: FC = () => {
  const { t } = useTranslation()
  const { fullName, handleChange: handleFullNameChange } = useFullName()
  const { position, handleChange: handlePositionChange } = usePosition()

  return (
    <header>
      <TextInput
        className='block'
        size='2xl'
        value={fullName}
        placeholder={t('fullName.placeholder')}
        onChange={(fullName) => handleFullNameChange({ fullName })}
      />
      <TextInput
        className='block mt-3'
        size='xl'
        value={position}
        placeholder={t('position.placeholder')}
        onChange={(position) => handlePositionChange({ position })}
      />
    </header>
  )
}

export default Header
