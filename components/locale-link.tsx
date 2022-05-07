import { Link } from 'react-router-dom'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

// @ts-ignore
export const LocalLink: typeof Link = ({
  to,
  children,
  ...other
}) => {
  const { i18n } = useTranslation()
  const router = useRouter()

  const locale = i18n.language || ''

  return (
    <Link to={`/${locale}${to}`} {...other}>{children}</Link>
  )

}
