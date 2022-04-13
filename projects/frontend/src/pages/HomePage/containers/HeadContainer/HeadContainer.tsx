import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { useCurrentCvFullName } from 'services/edit-cv'

const HeadContainer: FC = () => {
  const { i18n } = useTranslation()
  const { fullName } = useCurrentCvFullName()

  return (
    <Helmet htmlAttributes={{ lang: i18n.language }}>
      <title>{fullName || 'Cute CV'} </title>
    </Helmet>
  )
}

export default HeadContainer
