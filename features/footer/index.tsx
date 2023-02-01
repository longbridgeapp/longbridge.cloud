import classNames from 'classnames'
import { FC, useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './index.module.scss'
import { useMount } from 'ahooks'

const email = 'support@longbridge-inc.com'
const tel = '400-024-2688'

const Footer: FC = () => {
  const [isCN, setISCN] = useState(false)

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

  useMount(() => {
    const isCN = window.location.hostname.includes('.cn')
    setISCN(isCN)
  })

  return (
    <footer className={classNames(styles.footer, 'main-container')}>
      <div className={classNames('main-content-width')}>
        <div className="flex items-center justify-between">
          <div className="flex gap-14">
            {/* <div className="flex flex-col">
              <span className="text-sm">{i18n.t('footer_004')}</span>
              <a className="mt-2 font-medium" href={`tel:${tel}`}>
                {tel}
              </a>
            </div>
            <div className="flex flex-col">
              <span className="text-sm">{i18n.t('footer_003')}</span>
              <a className="mt-2 font-medium" href={`mailto:${email}`}>
                {email}
              </a>
            </div> */}
          </div>
          <div>
            {false &&
              socials.map(({ icon, href }) => {
                return (
                  <a className="inline-block w-5 ml-7 first:ml-0" href={href} key={href}>
                    <img src={icon} alt="" />
                  </a>
                )
              })}
          </div>
        </div>
        <div className="flex items-center justify-between mt-6">
          <div className="text-xs">
            <span>{i18n.t('footer_005')}</span>
          </div>
          {isCN && (
            <div className="text-xs">
              <a href="https://beian.miit.gov.cn" target={'_blank'} rel="noreferrer">
                浙 ICP 备 19021593 号
              </a>
            </div>
          )}
          {false && (
            <div>
              {links.map(({ label, href }) => {
                return (
                  <a className="ml-12 text-xs first:ml-0" href={href} key={label}>
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
