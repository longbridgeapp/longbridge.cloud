import classNames from 'classnames'
import { FC, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './index.module.scss'

const email = 'cs@longbridge.cloud'
const tel = ''

const Footer: FC = () => {
  const i18n = useTranslation('common')
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
        label: i18n.t('footer_001'),
        href: '/about',
      },
      {
        label: i18n.t('footer_002'),
        href: '/contact',
      },
    ]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <footer className={classNames(styles.footer, 'main-container')}>
      <div className={classNames('main-content-width')}>
        <div className="flex justify-between items-center">
          <div className="flex">
            {false && (
              <div className="flex flex-col">
                <span className="text-sm">{i18n.t('footer_004')}</span>
                <a className="mt-2 font-medium" href={`tel:${tel}`}>{tel}</a>
              </div>
            )}
            <div className="flex flex-col">
              <span className="text-sm">{i18n.t('footer_003')}</span>
              <a className="mt-2 font-medium" href={`mailto:${email}`}>{email}</a>
            </div>
          </div>
          <div>
            {false && socials.map(({ icon, href }) => {
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
            <span>{i18n.t('footer_005')}</span>
          </div>
          {false && (
            <div>
              {links.map(({ label, href }) => {
                return (
                  <a className="text-xs ml-12 first:ml-0" href={href} key={label}>
                    {label}
                  </a>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}

export default Footer
