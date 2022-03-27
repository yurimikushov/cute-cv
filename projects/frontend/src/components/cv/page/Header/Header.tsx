import { FC, ChangeEvent } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import useAutoFocusWhen from 'hooks/useAutoFocusWhen'
import TextInput from 'components/ui/TextInput'
import HeaderProps from './Header.props'

const FullName = styled(TextInput)`
  display: block;
  font-weight: bold;
`

const Position = styled(TextInput)`
  display: block;
  margin-top: 0.375rem;
`

const Header: FC<HeaderProps> = ({
  editable,
  fullName,
  position,
  fullNameMaxLength,
  positionMaxLength,
  onChangeFullName,
  onChangePosition,
}) => {
  const { t } = useTranslation('translation')

  const fullNameRef = useAutoFocusWhen<HTMLInputElement>({
    predicate: editable,
  })

  const handleChangeFullName = (e: ChangeEvent<HTMLInputElement>) => {
    if (editable) {
      onChangeFullName(e.target.value)
    }
  }

  const handleChangPosition = (e: ChangeEvent<HTMLInputElement>) => {
    if (editable) {
      onChangePosition(e.target.value)
    }
  }

  return (
    <header>
      <FullName
        ref={fullNameRef}
        size='2xl'
        readonly={!editable}
        value={fullName}
        placeholder={t('fullName.placeholder')}
        maxLength={fullNameMaxLength}
        onChange={handleChangeFullName}
      />
      <Position
        size='xl'
        readonly={!editable}
        value={position}
        placeholder={t('position.placeholder')}
        maxLength={positionMaxLength}
        onChange={handleChangPosition}
      />
    </header>
  )
}

export default Header
