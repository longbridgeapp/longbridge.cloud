import classNames from 'classnames'
import { FC, useMemo, useState } from 'react'
import { getSupportLinks } from '@/services'
import { useTranslation } from 'react-i18next'
import styles from './index.module.scss'
import { useMount, useAsyncEffect } from 'ahooks'

const Footer: FC = () => {
  const [isCN, setISCN] = useState(false)
  const [legalTermsUrl, setLegalTermsUrl] = useState()

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

  const { emailList, telList } = useMemo(() => {
    const emailList = [
      {
        label: i18n.t('footer_006'),
        value: 'cs@longbridge.cloud',
      },
      {
        label: i18n.t('footer_007'),
        value: 'bd@longbridge.cloud',
      },
    ]
    const telList = [
      {
        label: '',
        value: '+852 38511712',
      },
      {
        label: '',
        value: '+852 38511713',
      },
    ]
    return { emailList, telList }
  }, [])

  const fetchLegalTerms = async () => {
    const key = 'legal_terms'
    const data = await getSupportLinks(i18n.i18n.language)
    setLegalTermsUrl(data.urls[key])
  }

  useAsyncEffect(async () => {
    await fetchLegalTerms()
  }, [i18n.i18n.language])

  useMount(() => {
    const isCN = window.location.hostname.includes('.cn')
    setISCN(isCN)
  })

  return (
    <footer className={classNames(styles.footer, 'main-container')}>
      <div className={classNames('main-content-width')}>
        <div className="flex items-center justify-between">
          <div className="flex gap-16">
            <div className="flex flex-col">
              <span className="text-sm">{i18n.t('footer_004')}</span>
              {telList.map(({ value }) => (
                <a className="mt-2 font-medium whitespace-nowrap" href={`tel:${value}`} key={value}>
                  {value}
                </a>
              ))}
            </div>
            <div className="flex flex-col">
              <span className="text-sm">{i18n.t('footer_003')}</span>
              {emailList.map(({ label, value }) => (
                <div key={value} className="flex flex-wrap mt-2">
                  <span className="mr-2">{label}:</span>
                  <a className=" font-medium" href={`mailto:${value}`}>
                    {value}
                  </a>
                </div>
              ))}
            </div>
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
            {legalTermsUrl && (
              <a href={legalTermsUrl} target="_blank" rel="noreferrer">
                {i18n.t('footer_008')}
              </a>
            )}
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
