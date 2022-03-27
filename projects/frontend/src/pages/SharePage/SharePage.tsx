import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import styled from 'styled-components'
import isUndefined from 'lodash/isUndefined'
import { useSharableCv } from 'services/share-cv'
import PanelsLayout from 'layouts/PanelsLayout'
import PageLayout from 'layouts/PageLayout'
import Loader from 'components/ui/Loader'
import CvContainer from './containers/CvContainer'
import ToolbarPanelContainer from './containers/ToolbarPanelContainer'
import ErrorStub from './ErrorStub'

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
  const { i18n } = useTranslation()
  const { id } = useParams<{ id: string }>()

  if (isUndefined(id)) {
    throw new Error('[SharePage] Required `id` param is missed')
  }

  const { isLoading, cv, error } = useSharableCv(id)

  return (
    <>
      <Helmet htmlAttributes={{ lang: i18n.language }}>
        <title>{cv?.content.fullName || 'Cute CV'} </title>
      </Helmet>
      <Container>
        {isLoading && <Loader.FullScreen />}
        {error && <ErrorStub />}
        {!isLoading && !error && cv && (
          <PanelsLayout
            main={
              <PageLayout>
                <CvWrapper>
                  <CvContainer cv={cv} />
                </CvWrapper>
              </PageLayout>
            }
            rightSide={<ToolbarPanelContainer />}
          />
        )}
      </Container>
    </>
  )
}

export default SharePage
