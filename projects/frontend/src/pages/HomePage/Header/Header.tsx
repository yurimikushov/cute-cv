import { FC, ChangeEvent, useEffect, useRef } from 'react'
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

  const handleChangeFullName = (e: ChangeEvent<HTMLInputElement>) => {
    changeFullName(e.target.value)
  }

  const handleChangPosition = (e: ChangeEvent<HTMLInputElement>) => {
    changePosition(e.target.value)
  }

  return (
    <header>
      <FullName
        ref={fullNameRef}
        size='2xl'
        readonly={!editable}
        value={fullName}
        placeholder={t('fullName.placeholder')}
        maxLength={FULL_NAME_MAX_LENGTH}
        onChange={handleChangeFullName}
      />
      <Position
        size='xl'
        readonly={!editable}
        value={position}
        placeholder={t('position.placeholder')}
        maxLength={POSITION_MAX_LENGTH}
        onChange={handleChangPosition}
      />
    </header>
  )
}

export default Header
