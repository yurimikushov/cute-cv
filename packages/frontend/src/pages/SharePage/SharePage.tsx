import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import styled from 'styled-components'
import { useSharableCv } from 'services/share-cv'
import { withReactQuery } from 'shared/react-query'
import PanelsLayout from 'shared/ui/layouts/PanelsLayout'
import PageLayout from 'shared/ui/layouts/PageLayout'
import Loader from 'shared/ui/Loader'
import ErrorStub from 'shared/ui/ErrorStub'
import CvContainer from './containers/CvContainer'
import ToolbarPanelContainer from './containers/ToolbarPanelContainer'

const Container = styled.div`
  margin-top: 1.25rem;
  margin-bottom: 3.5rem;
  display: flex;
  justify-content: center;
`

// Wrapper needed to correctly download pdf
const CvWrapper = styled.div`
  padding: 4rem;
`

const SharePage: FC = () => {
  const { i18n, t } = useTranslation('translation', { keyPrefix: 'share' })
  const { id } = useParams<{ id: string }>()

  if (!id) {
    throw new Error('[SharePage] Required `id` param is missed')
  }

  const { isLoading, data: cv, error } = useSharableCv(id)

  return (
    <>
      <Helmet htmlAttributes={{ lang: i18n.language }}>
        <title>{cv?.content.fullName || 'Cute CV'} </title>
      </Helmet>
      <Container>
        {isLoading && <Loader.FullScreen />}
        {error && <ErrorStub message={t('error')} />}
        {!isLoading && !error && (
          <PanelsLayout
            main={
              <PageLayout>
                <CvWrapper>
                  <CvContainer id={id} />
                </CvWrapper>
              </PageLayout>
            }
            rightSide={<ToolbarPanelContainer id={id} />}
          />
        )}
      </Container>
    </>
  )
}

export default withReactQuery(SharePage)
