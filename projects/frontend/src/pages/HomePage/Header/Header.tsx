import { FC, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { useIsSignedIn } from 'services/auth'
import {
  useEditable,
  useCurrentCvContent,
  FULL_NAME_MAX_LENGTH,
  POSITION_MAX_LENGTH,
} from 'services/cv'
import TextInput from 'components/TextInput'

const FullName = styled(TextInput)`
  display: block;
  font-weight: bold;
`

const Position = styled(TextInput)`
  display: block;
  margin-top: 0.375rem;
`

const Header: FC = () => {
  const { t } = useTranslation()
  const { isSignedIn } = useIsSignedIn()
  const { editable } = useEditable()
  const {
    cv: { fullName, position },
    changeFullName,
    changePosition,
  } = useCurrentCvContent()
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
        maxLength={FULL_NAME_MAX_LENGTH}
        onChange={changeFullName}
      />
      <Position
        size='xl'
        disabled={!editable}
        value={position}
        placeholder={t('position.placeholder')}
        maxLength={POSITION_MAX_LENGTH}
        onChange={changePosition}
      />
    </header>
  )
}

export default Header
