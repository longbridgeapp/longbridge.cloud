import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

export function useLocaleNavigate() {
  const { i18n } = useTranslation('common')
  const navigate = useNavigate()

  return (path: string, options?: { replace?: boolean }) => {
    return navigate(i18n.language === 'zh-CN' ? path : `/${i18n.language}${path}`, options)
  }
}
export function useWithLocalePathFn() {
  const { i18n } = useTranslation('common')

  return (path: string) => {
    return i18n.language === 'zh-CN' ? path : `/${i18n.language}${path}`
  }
}
