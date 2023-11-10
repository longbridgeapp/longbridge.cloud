import { Link } from 'react-router-dom'
import { useTranslation } from 'next-i18next'

// @ts-ignore
export const LocaleLink: typeof Link = ({ to, children, rawValue, ...other }) => {
  const { i18n } = useTranslation('common')
  const localePrefix = i18n.language === 'zh-HK' ? '' : `/${i18n.language}`

  if (rawValue) {
    return (
      <a href={`${to}`} target="_blank" rel="noreferrer" {...other}>
        {children}
      </a>
    )
  }
  return (
    <Link to={`${localePrefix}${to}`} {...other}>
      {children}
    </Link>
  )
}
