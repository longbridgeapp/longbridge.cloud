import Dropdown from '@/components/dropdown'
import { LocaleLink } from '@/components/locale-link'
import { useLocaleNavigate } from '@/hooks/use-locale-navigate'
import { usePurePathname } from '@/hooks/use-pure-pathname'
import classNames from 'classnames'
import { FC, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './index.module.scss'
import { LocaleDropdown } from './locale-dropdown'

function useNavs() {
  const i18n = useTranslation('common')
  return useMemo(() => {
    return [
      {
        value: '/',
        label: i18n.t('header_nav_001'),
        children: [
          {
            value: '/market',
            label: i18n.t('header_nav_002'),
          },
          {
            value: '/bss',
            label: i18n.t('header_nav_003'),
          },
          {
            value: '/trading',
            label: i18n.t('header_nav_004'),
          },
          {
            value: '/crm',
            label: i18n.t('header_nav_005'),
          },
        ],
      },
      {
        value: '/solutions ',
        label: i18n.t('header_nav_006'),
        children: [
          {
            value: '/solutions',
            label: i18n.t('solutions_page_001'),
          },
          {
            value: '/solutions/app',
            label: i18n.t('solutions_app_page_001'),
          },
        ],
      },
      {
        value: '/about',
        label: i18n.t('header_nav_007'),
        children: [],
      },
    ]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
const Navs = () => {
  const navs = useNavs()
  const pathname = usePurePathname()
  const navigate = useLocaleNavigate()
  const selectedNav = useMemo(() => {
    return navs.find(nav => nav.value === pathname || nav.children.find(child => child.value === pathname))
  }, [navs, pathname])

  return (
    <div className={classNames(styles.navs, 'flex', 'items-center')}>
      {navs.map(nav => {
        return (
          <div
            key={nav.value}
            className={classNames('nav-item', {
              'nav-item__selected': nav.value === selectedNav?.value,
            })}
          >
            {nav.children.length > 0 && (
              <Dropdown
                trigger="hover"
                onChange={path => navigate(path)}
                className="nav-item__dropdown"
                alwaysChildren
                value={pathname}
                items={nav.children}
                renderItem={item => {
                  return <LocaleLink to={item.value as string}>{item.label}</LocaleLink>
                }}
              >
                <LocaleLink to={nav.value} className="flex items-center">
                  <span>{nav.label}</span>
                  <div className="text-[8px] ml-1">
                    <img
                      src="https://pub.lbkrs.com/static/offline/202111/oPFw5UmKNxErcZsQ/caret-down.svg"
                      alt="caret-down"
                    />
                  </div>
                </LocaleLink>
              </Dropdown>
            )}
            {nav.children.length === 0 && <LocaleLink to={nav.value}>{nav.label}</LocaleLink>}
          </div>
        )
      })}
    </div>
  )
}

const Header: FC = () => {
  return (
    <div className={classNames(styles.header, 'flex px-10 py-8')}>
      <LocaleLink className="logo" to="/">
        <img
          className="w-[73px]"
          src="https://pub.lbkrs.com/files/202205/bq1Bo5fTP6XyqoZH/longbridge-whale-logo.png"
          alt="logo"
        />
      </LocaleLink>
      <div className="main-content-width flex-1">
        <Navs />
      </div>
      <div className="w-[73px]">
        <LocaleDropdown />
      </div>
    </div>
  )
}

export default Header
