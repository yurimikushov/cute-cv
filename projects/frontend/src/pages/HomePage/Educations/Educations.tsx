import { FC, useLayoutEffect } from 'react'
import cn from 'classnames'
import { useTranslation } from 'react-i18next'
import isEmpty from 'lodash/isEmpty'
import map from 'lodash/map'
import { useEditable, useEducations } from 'services/cv'
import { H1 } from 'components/H'
import Button from 'components/Button'
import Education from './Education'
import EducationsPropsT from './Educations.props'

const Educations: FC<EducationsPropsT> = ({ className, ...props }) => {
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
    <div className={cn(className, 'childs-mt-4')} {...props}>
      <H1>{t('title')}</H1>
      {map(educations, ({ id, degree, university, duration }, i) => (
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
      {editable && (
        <Button className='block mx-auto mt-2' onClick={handleAdd}>
          Add
        </Button>
      )}
    </div>
  )
}

export default Educations
