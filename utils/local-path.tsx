import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

export const LocalPath = (props: any) => {
  const { i18n } = useTranslation('common')
  const router = useRouter()

  const locale = props.locale || i18n.language || ''

  if (!locale) {
    const href = props.href || router.asPath
    return <Link {...props} href={href}></Link>
  } else {
    const href = props.href ? `/${locale}${props.href}` : router.pathname.replace('[locale]', locale)
    return <Link {...props} href={href} locale={undefined}></Link>
  }
}
