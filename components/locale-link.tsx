import { Link, LinkProps } from 'react-router-dom'
import { isServer } from '@/utils/common'
import { useTranslation } from 'next-i18next'
import { useEffect, useState } from 'react'

// @ts-ignore
export const LocaleLink = (props: LinkProps & { pageUrl?: string }) => {
  const { to, children, pageUrl, ...other } = props
  const { i18n } = useTranslation('common')
  const localePrefix = i18n.language === 'zh-HK' ? '' : `/${i18n.language}`
  const [pageUrlLink, setPageUrlLink] = useState('')

  useEffect(() => {
    const isLocal = location.hostname
    const origin = isLocal ? 'https://cloud.longbridge.xyz' : ''
    setPageUrlLink(`${origin}/${i18n.language}${pageUrl}`)
  }, [])

  if (!pageUrl || isServer()) {
    return (
      <Link to={`${localePrefix}${to}`} {...other}>
        {children}
      </Link>
    )
  }

  return (
    <a href={pageUrlLink} target="_self">
      {children}
    </a>
  )
}
