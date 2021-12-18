import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import isEmpty from 'lodash/isEmpty'
import { ReactComponent as CloseIcon } from 'icons/close.svg'
import colors from 'styles/colors'
import fonts from 'styles/fonts'
import radiuses from 'styles/radiuses'
import shadows from 'styles/shadows'
import useAvatarPicker from './hooks/useAvatarPicker'
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

const PickBtn = styled.button`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  font-size: ${fonts.size.xl};
  color: ${colors.gray300};
  background-color: ${colors.white};
  border-radius: ${radiuses.full};
  box-shadow: ${shadows.sm};
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

const ClearBtn = styled.button`
  position: absolute;
  top: 0px;
  right: 0.25rem;
  height: 1.25rem;
  width: 1.25rem;
  border-radius: ${radiuses.full};
  line-height: 1.25rem;
  background-color: ${colors.white};
  box-shadow: ${shadows.sm};
  transform: scale(0);
  transition-property: transform;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);

  ${Container}:hover &,
  &:focus-visible {
    transform: scale(1);
  }
`

const CloseSvg = styled(CloseIcon)`
  height: 0.75rem;
  color: ${colors.gray300};
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
          <PickBtn ref={pickButtonRef} type='button' onClick={handlePick}>
            +
          </PickBtn>
          {!isEmpty(src) && (
            <ClearBtn type='button' onClick={handleClear}>
              <CloseSvg />
            </ClearBtn>
          )}
          <HiddenInput ref={fileInputRef} type='file' accept={ACCEPT_FORMATS} />
        </>
      )}
    </Container>
  )
}

export default AvatarPicker
