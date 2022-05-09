import { Link } from 'react-router-dom'
import { useTranslation } from 'next-i18next'

// @ts-ignore
export const LocaleLink: typeof Link = ({ to, children, ...other }) => {
  const { i18n } = useTranslation('common')
  const locale = i18n.language || ''

  return (
    <Link to={`/${locale}${to}`} {...other}>
      {children}
    </Link>
  )
}
