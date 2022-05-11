import React, { FC, useState, useMemo, useEffect } from 'react'
import { getBasenameLocale, getLocaleHref, getRootDomain } from '@/utils/common'
import Cookies from 'js-cookie'
import Dropdown from '@/components/dropdown'
import { useTranslation } from 'next-i18next'

export const LocaleDropdown: FC = () => {
  // 为了方便复制粘贴，就不用组件了
  const items = useMemo(() => {
    return [
      {
        label: '简体中文',
        shortLabel: '简',
        value: 'zh-CN',
      },
      {
        label: '繁体中文',
        shortLabel: '繁',
        value: 'zh-HK',
      },
      {
        label: 'English',
        shortLabel: 'EN',
        value: 'en',
      },
    ]
  }, [])
  const { i18n } = useTranslation('common')
  const [locale, setLocale] = useState(i18n.language || Cookies.get('locale'))
  const onChange = (value: string) => {
    const pathLocale = getBasenameLocale()
    Cookies.set('locale', value, {
      domain: getRootDomain(location.hostname),
      expires: 7,
    })
    setLocale(value)
    location.href = getLocaleHref(pathLocale!, value)
  }

  return <Dropdown trigger="hover" items={items} value={locale} onChange={onChange} />
}
