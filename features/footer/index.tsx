import classNames from 'classnames'
import { FC, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './index.module.scss'



const Footer: FC = () => {
  const i18n = useTranslation()
  const socials = useMemo(() => {
    return [
      {
        icon: 'https://pub.lbkrs.com/files/202205/sBLHLyL1a9FVES4t/facebook.png',
        href: '',
      },
      {
        icon: 'https://pub.lbkrs.com/files/202205/itdFKSrQxHZCyuXD/twiiter.png',
        href: '',
      },
    ]
  }, [])
  const links = useMemo(() => {
    return [
      {
        label: i18n.t('隐私政策'),
        href: '/about',
      },
      {
        label: i18n.t('条款'),
        href: '/contact',
      }
    ]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <footer className="main-container">
      <div className={classNames(styles.footer, 'main-content-width')}>
        <div className="flex justify-between items-center">
          <div className="flex">
            <div className="flex flex-col">
              <span className="text-sm">{i18n.t('Tel')}</span>
              <span className="mt-2 font-medium">400-024-2688</span>
            </div>
            <div className="flex flex-col ml-12">
              <span className="text-sm">{i18n.t('Mail')}</span>
              <span className="mt-2 font-medium">Support@Longbridge-inc.com</span>
            </div>
          </div>
          <div>
            {socials.map(({ icon, href }) => {
              return (
                <a className="w-5 inline-block ml-7 first:ml-0" href={href} key={href}>
                  <img src={icon} alt="" />
                </a>
              )
            })}
          </div>
        </div>
        <div className="flex justify-between items-center mt-6">
          <div className="text-xs">
            <span>{i18n.t('© 2022 LONGBRIDGE WHALE. All rights reserved.')}</span>
          </div>
          <div>
            {links.map(({ label, href }) => {
              return (
                <a className="text-xs ml-12 first:ml-0" href={href} key={label}>{label}</a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
