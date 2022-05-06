import Dropdown from '@/components/dropdown'
import classNames from 'classnames'
import { FC, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styles from './index.module.scss'

function useNavs() {
  const i18n = useTranslation()
  return [
    {
      value: '/',
      label: i18n.t('Products'),
      children: [
        {
          value: '/',
          label: i18n.t('首页')
        }
      ]
    },
    {
      to: '/2',
      label: i18n.t('Products'),
      children: [
        {
          value: '/2/3',
          label: 'xxx'
        }
      ]
    }
  ]
}
const Navs = () => {
  const navs = useNavs()
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const selectedNav = useMemo(() => {
    return navs.find(nav => nav.value === pathname || nav.children.find(child => child.value === pathname))
  }, [pathname])

  return (
    <div className={classNames(styles.navs, 'flex')}>
      {navs.map(nav => {
        return <div className={classNames('nav-item', {
          'nav-item__selected': nav.value === selectedNav?.value
        })}>
          <Dropdown onChange={path => navigate(path)} className="nav-item__dropdown" alwaysChildren value={pathname} items={nav.children}>
            <div className="flex items-center">
              <span>{nav.label}</span>
              <div className="text-[8px] ml-1">
                <img src="https://pub.lbkrs.com/static/offline/202111/oPFw5UmKNxErcZsQ/caret-down.svg" alt="caret-down" />
              </div>
            </div>
          </Dropdown>
        </div>
      })}
    </div>
  )

}

const Header: FC = () => {
  return (
    <div className={classNames(styles.header, 'flex px-10 py-8')}>
      <Link className="logo" to="/">
        <img
          className="w-[73px]"
          src="https://pub.lbkrs.com/files/202205/bq1Bo5fTP6XyqoZH/longbridge-whale-logo.png"
          alt="logo"
        />
      </Link>
      <div className="main-content-width flex-1">
        <Navs />
      </div>
      <div className="w-[73px]"></div>
    </div>
  )
}

export default Header
