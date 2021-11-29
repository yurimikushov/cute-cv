import { FC, useLayoutEffect } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import isEmpty from 'lodash/isEmpty'
import map from 'lodash/map'
import { useEditable, useEducations } from 'services/cv'
import { H1 } from 'components/H'
import Button from 'components/Button'
import Education from './Education'
import EducationsPropsT from './Educations.props'

const Container = styled.div`
  & > * + * {
    margin-top: 1rem;
  }
`

const Add = styled(Button)`
  display: block;
  margin: 0.5rem auto 0;
`

const Educations: FC<EducationsPropsT> = (props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'education' })
  const { editable } = useEditable()
  const {
    educations,
    handleAdd,
    handleDegreeChange,
    handleUniversityChange,
    handleDurationChange,
    handleDelete,
  } = useEducations()

  useLayoutEffect(() => {
    if (isEmpty(educations)) {
      handleAdd()
    }
  }, [isEmpty(educations)])

  return (
    <Container {...props}>
      <H1>{t('title')}</H1>
      {map(educations, ({ id, degree, university, duration }) => (
        <Education
          key={id}
          degree={degree}
          university={university}
          duration={duration}
          onDegreeChange={(degree) => handleDegreeChange({ id, degree })}
          onUniversityChange={(university) =>
            handleUniversityChange({ id, university })
          }
          onDurationChange={(duration) =>
            handleDurationChange({ id, duration })
          }
          onDelete={() => handleDelete({ id })}
        />
      ))}
      {editable && <Add onClick={handleAdd}>Add</Add>}
    </Container>
  )
}

export default Educations
