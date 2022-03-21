import { FC } from 'react'
import styled from 'styled-components'
import isEmpty from 'lodash/isEmpty'
import focusMixin from 'styles/mixins/focus'
import useAvatarPicker from './hooks/useAvatarPicker'
import AvatarImg from './components/AvatarImg'
import PickBtn from './components/PickBtn'
import ClearBtn from './components/ClearBtn'
import HiddenImgInput from './components/HiddenImgInput'
import AvatarPickerProps from './AvatarPicker.props'

const Container = styled.div`
  position: relative;
  height: 5.5rem;
  width: 5.5rem;
`

const Pick = styled(PickBtn)`
  ${focusMixin}

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
  ${focusMixin}

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

const AvatarPicker: FC<AvatarPickerProps> = ({
  editable = true,
  src,
  onPick,
  onClear,
}) => {
  const { pickButtonRef, fileInputRef, handlePick, handleClear } =
    useAvatarPicker(onPick, onClear)

  return (
    <Container>
      <AvatarImg src={src} />
      {editable && (
        <>
          <Pick ref={pickButtonRef} onClick={handlePick} />
          {!isEmpty(src) && <Clear onClick={handleClear} />}
          <HiddenImgInput ref={fileInputRef} />
        </>
      )}
    </Container>
  )
}

export default AvatarPicker
