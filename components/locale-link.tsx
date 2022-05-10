import { Link } from 'react-router-dom'
import { useTranslation } from 'next-i18next'

// @ts-ignore
export const LocaleLink: typeof Link = ({ to, children, ...other }) => {
  const { i18n } = useTranslation('common')
  const localePrefix = i18n.language === 'zh-HK' ? '' : `/${i18n.language}`

  return (
    <Link to={`${localePrefix}${to}`} {...other}>
      {children}
    </Link>
  )
}
