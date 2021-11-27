import { FC, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { useIsSignedIn } from 'services/auth'
import { useEditable, useFullName, usePosition } from 'services/cv'
import TextInput from 'components/TextInput'

const FullName = styled(TextInput)`
  display: block;
  font-weight: bold;
`

const Position = styled(TextInput)`
  display: block;
  margin-top: 0.75rem;
`

const Header: FC = () => {
  const { t } = useTranslation()
  const { isSignedIn } = useIsSignedIn()
  const { editable } = useEditable()
  const { fullName, handleChange: handleFullNameChange } = useFullName()
  const { position, handleChange: handlePositionChange } = usePosition()
  const fullNameRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!isSignedIn) {
      return
    }

    fullNameRef.current?.focus()
  }, [isSignedIn])

  return (
    <header>
      <FullName
        ref={fullNameRef}
        size='2xl'
        disabled={!editable}
        value={fullName}
        placeholder={t('fullName.placeholder')}
        onChange={(fullName) => handleFullNameChange({ fullName })}
      />
      <Position
        size='xl'
        disabled={!editable}
        value={position}
        placeholder={t('position.placeholder')}
        onChange={(position) => handlePositionChange({ position })}
      />
    </header>
  )
}

export default Header
