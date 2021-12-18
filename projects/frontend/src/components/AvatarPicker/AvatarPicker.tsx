import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import isEmpty from 'lodash/isEmpty'
import radiuses from 'styles/radiuses'
import useAvatarPicker from './hooks/useAvatarPicker'
import PickBtn from './components/PickBtn'
import ClearBtn from './components/ClearBtn'
import placeholderSrc from './assets/placeholder.png'
import AvatarPickerPropsT from './AvatarPicker.props'

const Container = styled.div`
  position: relative;
  height: 5.5rem;
  width: 5.5rem;
`

const Img = styled.img`
  height: 100%;
  width: 100%;
  border-radius: ${radiuses.full};
`

const Pick = styled(PickBtn)`
  position: absolute;
  top: 0px;
  left: 0px;
  transform: scale(0);
  transition-property: transform;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);

  ${Container}:hover &,
  &:focus-visible {
    opacity: 0.9;
    transform: scale(1);
  }
`

const Clear = styled(ClearBtn)`
  position: absolute;
  top: 0px;
  right: 0.25rem;
  transform: scale(0);
  transition-property: transform;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);

  ${Container}:hover &,
  &:focus-visible {
    transform: scale(1);
  }
`

const HiddenInput = styled.input`
  display: none;
`

const ACCEPT_FORMATS = ['.png', '.jpg', '.jpeg'].join(',')

const AvatarPicker: FC<AvatarPickerPropsT> = ({
  editable = true,
  src,
  onPick,
  onClear,
}) => {
  const { t } = useTranslation('translation', { keyPrefix: 'avatarPicker' })

  const { pickButtonRef, fileInputRef, handlePick, handleClear } =
    useAvatarPicker(onPick, onClear)

  return (
    <Container>
      <Img src={src ?? placeholderSrc} alt={t('img.alt')} />
      {editable && (
        <>
          <Pick ref={pickButtonRef} onClick={handlePick} />
          {!isEmpty(src) && <Clear onClick={handleClear} />}
          <HiddenInput ref={fileInputRef} type='file' accept={ACCEPT_FORMATS} />
        </>
      )}
    </Container>
  )
}

export default AvatarPicker
