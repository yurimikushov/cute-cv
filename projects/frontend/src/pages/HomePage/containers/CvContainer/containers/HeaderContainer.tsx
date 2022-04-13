import { FC } from 'react'
import {
  useEditable,
  useCurrentCvFullName,
  useCurrentCvPosition,
  FULL_NAME_MAX_LENGTH,
  POSITION_MAX_LENGTH,
} from 'services/edit-cv'
import Header from 'components/cv/page/Header'

const HeaderContainer: FC = () => {
  const { editable } = useEditable()
  const { fullName, changeFullName } = useCurrentCvFullName()
  const { position, changePosition } = useCurrentCvPosition()

  return (
    <Header
      editable={editable}
      fullName={fullName}
      position={position}
      fullNameMaxLength={FULL_NAME_MAX_LENGTH}
      positionMaxLength={POSITION_MAX_LENGTH}
      onChangeFullName={changeFullName}
      onChangePosition={changePosition}
    />
  )
}

export default HeaderContainer
