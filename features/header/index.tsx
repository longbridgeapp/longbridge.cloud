import Dropdown from '@/components/dropdown'
import Icon from '@/components/icon'
import { LocaleLink } from '@/components/locale-link'
import { useLocaleNavigate } from '@/hooks/use-locale-navigate'
import { usePurePathname } from '@/hooks/use-pure-pathname'
import { useReports } from '@/hooks/use-reports'
import classNames from 'classnames'
import { t } from 'i18next'
import { FC, MouseEvent, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './index.module.scss'
import { LocaleDropdown } from './locale-dropdown'

function useNavs() {
  const [reports] = useReports()

  const i18n = useTranslation('common')
  return useMemo(() => {
    return [
      {
        value: '/',
        label: i18n.t('features_header_index_2'),
        children: [],
      },
      {
        value: 'product',
        label: i18n.t('header_nav_001'),
        children: [
          // {
          //   value: '/bss',
          //   label: i18n.t('header_nav_003'),
          // },
          // {
          //   value: '/trading',
          //   label: i18n.t('header_nav_004'),
          // },
          // {
          //   value: '/market',
          //   label: i18n.t('header_nav_002'),
          // },
          // {
          //   value: '/crm',
          //   label: i18n.t('header_nav_005'),
          // },
          {
            value: '/front-desk',
            label: i18n.t('whale-middle-desk-001'),
          },
          {
            value: '/backoffice',
            label: i18n.t('whale-backoffice-001'),
          },
          {
            value: '/longport',
            label: i18n.t('whale-community-001'),
          },
          {
            value: '/delivery-system',
            label: i18n.t('whale-delivery-system-001'),
          },
          {
            value: '/marketing',
            label: i18n.t('whale-marketing-001'),
          },
          {
            value: '/product/retail',
            label: i18n.t('features_header_index_3'),
          },
        ],
      },
      {
        value: '/solutions/introducing-broker',
        label: i18n.t('header_nav_006'),
        children: [
          {
            value: '/solutions/app-plus',
            label: i18n.t('features_header_index_4'),
          },
          {
            value: '/solutions/securities-market',
            label: i18n.t('pages_locale_solutions_securities_market_8769'),
          },
          {
            value: '/solutions/virtual-assets',
            label: i18n.t('features_header_index_891113')
          },
          // {
          //   value: '/solutions',
          //   label: i18n.t('solutions_page_001'),
          // },
          // {
          //   value: '/solutions/app',
          //   label: i18n.t('solutions_app_page_001'),
          // },
          /** 20230216 - 三三说屏蔽的
          {
            value: '/solutions/introducing-broker',
            label: i18n.t('introducing-broker.page-title'),
          },
          {
            value: '/solutions/longport',
            label: i18n.t('longport.page-title'),
          },
          {
            value: '/solutions/white-label',
            label: i18n.t('white-label.page-title'),
          }, */
        ],
      },
      {
        value: '/about',
        suffix: '',
        label: i18n.t('header_nav_007'),
        children: [],
      },
      {
        value: '/whale-reports',
        suffix: '',
        label: i18n.t('header_nav_009'),
        children: [],
      },
      // {
      //   value: '/live',
      //   label: i18n.t('header_nav_008'),
      //   suffix: <div className="relative flex items-center justify-center">
      //     <Icon type="live" />
      //     <Icon type="play" className="absolute text-xs left-1/2 top-1/2 play-icon" />
      //   </div>,
      //   children: [],
      // },
    ]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reports])
}
const Navs = () => {
  const [expandKeys, setExpandKeys] = useState<string[]>([])
  const navs = useNavs()
  const pathname = usePurePathname()
  const navigate = useLocaleNavigate()
  const i18n = useTranslation('common')
  const selectedNav = useMemo(() => {
    return navs.find(nav => nav.value === pathname || nav.children.find(child => child.value === pathname))
  }, [navs, pathname])

  const expandChange = (key: string, e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    e.stopPropagation()
    if (expandKeys.includes(key)) {
      setExpandKeys(expandKeys.filter(k => k !== key))
    } else {
      setExpandKeys([...expandKeys, key])
    }
  }

  return (
    <>
      <div className={classNames(styles.navs, 'items-center gap-14 xl:gap-20 hidden md:flex')}>
        {navs.map(nav => {
          return (
            <div
              key={nav.value}
              className={classNames('nav-item text-[16px] leading-4', {
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
                    return (
                      <LocaleLink to={item.value as string} className="hover:text-white">
                        {item.label}
                      </LocaleLink>
                    )
                  }}
                >
                  <div className="flex items-center">
                    <span>{nav.label}</span>
                    <div
                      className={classNames('text-[8px] ml-1')}
                      style={{
                        transform: `translateY(-${i18n.i18n.language === 'en' ? 1 : 2}px)`,
                      }}
                    >
                      <Icon type="cart-down" />
                    </div>
                  </div>
                </Dropdown>
              )}
              {nav.children.length === 0 && (
                <LocaleLink className="flex items-center" to={nav.value}>
                  <span>{nav.label}</span>
                  {nav.suffix && <span className="ml-2">{nav.suffix}</span>}
                </LocaleLink>
              )}
            </div>
          )
        })}
      </div>
      <div className="md:hidden">
        <Dropdown
          trigger="click"
          onChange={path => navigate(path)}
          className="!bg-transparent !text-black"
          alwaysChildren
          value={pathname}
          items={navs}
          renderItem={item => {
            return item?.children?.length ? (
              <div className="flex flex-col">
                <div className="flex items-center" onClick={e => expandChange(String(item.value), e)}>
                  <span>{item.label}</span>
                  <div
                    className={classNames('text-[8px] ml-1')}
                    style={{
                      transform: `translateY(-${i18n.i18n.language === 'en' ? 1 : 2}px)`,
                    }}
                  >
                    <Icon type="cart-down" />
                  </div>
                </div>
                {expandKeys.includes(String(item.value)) && (
                  <div className="flex flex-col xl:pl-2">
                    {item?.children?.map((i: any) => (
                      <LocaleLink to={i.value as string} key={i.label} className="py-3">
                        {i.label}
                      </LocaleLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <LocaleLink to={item.value as string} key={item.label}>
                {item.label}
              </LocaleLink>
            )
          }}
        >
          <img src="https://pub.lbkrs.com/static/offline/202111/oSbQhwMyjvFQzoHQ/menu.svg" alt="" />
        </Dropdown>
      </div>
    </>
  )
}

const Header: FC = () => {
  return (
    <div className={classNames(styles.header, 'flex px-6 xl:px-10 py-4')}>
      <div className="logo-wrap">
        <LocaleLink className="logo" to="/">
          <Icon type="cloud-logo" className="align-top" />
        </LocaleLink>
      </div>
      <div className="flex-1 main-content-width">
        <Navs />
      </div>
      <div className="w-[73px]">
        <LocaleDropdown />
      </div>
    </div>
  )
}

export default Header
