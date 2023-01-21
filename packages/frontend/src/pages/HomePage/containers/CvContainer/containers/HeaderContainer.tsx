import { VFC } from 'react'
import {
  useEditable,
  useCurrentCvFullName,
  useCurrentCvPosition,
  FULL_NAME_MAX_LENGTH,
  POSITION_MAX_LENGTH,
} from 'services/edit-cv'
import Header from 'shared/ui/cv/page/Header'

const HeaderContainer: VFC = () => {
  const { editable } = useEditable()
  const { fullName = '', updateFullName } = useCurrentCvFullName()
  const { position = '', updatePosition } = useCurrentCvPosition()

  return (
    <Header
      editable={editable}
      fullName={fullName}
      position={position}
      fullNameMaxLength={FULL_NAME_MAX_LENGTH}
      positionMaxLength={POSITION_MAX_LENGTH}
      onChangeFullName={updateFullName}
      onChangePosition={updatePosition}
    />
  )
}

export default HeaderContainer
