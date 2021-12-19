import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import radiuses from 'styles/radiuses'
import placeholderSrc from './assets/placeholder.png'
import AvatarImgPropsT from './AvatarImg.props'

const Img = styled.img`
  height: 100%;
  width: 100%;
  border-radius: ${radiuses.full};
`

const AvatarImg: FC<AvatarImgPropsT> = ({ src, ...props }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'avatarPicker' })

  return <Img {...props} src={src ?? placeholderSrc} alt={t('img.alt')} />
}

export default AvatarImg