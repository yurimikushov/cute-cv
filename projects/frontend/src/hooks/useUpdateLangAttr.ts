import { useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

const useUpdateLangAttr = () => {
  const { i18n } = useTranslation()

  const html = useMemo(() => {
    return document.querySelector('html') as HTMLElement
  }, [])

  useEffect(() => {
    html.setAttribute('lang', i18n.language)
  }, [html, i18n.language])
}

export default useUpdateLangAttr
