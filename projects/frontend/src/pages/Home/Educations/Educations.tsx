import { FC } from 'react'
import cn from 'classnames'
import { useTranslation } from 'react-i18next'
import map from 'lodash/map'
import noop from 'lodash/noop'
import H from 'components/H'
import Button from 'components/Button'
import Education from './Education'
import EducationsPropsT from './Educations.props'

const educations = [
  {
    degree: '',
    university: '',
    duration: '',
  },
]

const Educations: FC<EducationsPropsT> = ({ className, ...props }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'education' })

  return (
    <div className={cn(className, 'childs-mt-4')} {...props}>
      <H tag='1'>{t('title')}</H>
      {map(educations, ({ degree, university, duration }, i) => (
        <Education
          key={i}
          degree={degree}
          university={university}
          duration={duration}
          onDegreeChange={noop}
          onUniversityChange={noop}
          onDurationChange={noop}
          onDelete={noop}
        />
      ))}
      <Button className='block mx-auto mt-2' onClick={noop}>
        Add
      </Button>
    </div>
  )
}

export default Educations
