import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const html = document.querySelector('html') as HTMLElement

const useUpdateLangAttr = () => {
  const { i18n } = useTranslation()

  useEffect(() => {
    html.setAttribute('lang', i18n.language)
  }, [i18n.language])
}

export default useUpdateLangAttr
