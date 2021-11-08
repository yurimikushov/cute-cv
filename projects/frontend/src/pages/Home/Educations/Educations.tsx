import { FC } from 'react'
import cn from 'classnames'
import { useTranslation } from 'react-i18next'
import map from 'lodash/map'
import { useEducations } from 'services/cv'
import H from 'components/H'
import Button from 'components/Button'
import Education from './Education'
import EducationsPropsT from './Educations.props'

const Educations: FC<EducationsPropsT> = ({ className, ...props }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'education' })
  const { educations, handleAdd, handleUpdate, handleDelete } = useEducations()

  return (
    <div className={cn(className, 'childs-mt-4')} {...props}>
      <H tag='1'>{t('title')}</H>
      {map(educations, ({ id, degree, university, duration }, i) => (
        <Education
          key={id}
          degree={degree}
          university={university}
          duration={duration}
          onDegreeChange={(degree) =>
            handleUpdate({ id, degree, university, duration })
          }
          onUniversityChange={(university) =>
            handleUpdate({ id, degree, university, duration })
          }
          onDurationChange={(duration) =>
            handleUpdate({ id, degree, university, duration })
          }
          onDelete={() => handleDelete({ id })}
        />
      ))}
      <Button className='block mx-auto mt-2' onClick={handleAdd}>
        Add
      </Button>
    </div>
  )
}

export default Educations
