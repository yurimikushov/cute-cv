import useEffectWhen from 'hooks/useEffectWhen'
import { useIsThereCvOfUnsignedInUser } from 'services/cv'
import { useNotification } from 'components/Notifications'
import ThereIsCvOfUnsignedInUserNotification from './ThereIsCvOfUnsignedInUserNotification'

const useNotifyWhenThereIsCvOfUnsignedInUser = (onSave: () => void) => {
  const { show: notify } = useNotification()
  const { isThereCvOfUnsignedInUser } = useIsThereCvOfUnsignedInUser()

  useEffectWhen(() => {
    notify(<ThereIsCvOfUnsignedInUserNotification onSave={onSave} />)
  }, isThereCvOfUnsignedInUser)
}

export default useNotifyWhenThereIsCvOfUnsignedInUser
