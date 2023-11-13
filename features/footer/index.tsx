import classNames from 'classnames'
import { FC, useMemo, useState } from 'react'
import { getSupportLinks } from '@/services'
import { useTranslation } from 'react-i18next'
import styles from './index.module.scss'
import { useMount, useAsyncEffect } from 'ahooks'
import { getBasenameLocale } from '@/utils/common'
import { Popover } from 'antd'

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

  const { frontSell, sellEnd } = useMemo(() => {
    const frontSell = [
      {
        label: i18n.t('features_footer_index_891117'),
        value: '+852 3851 1713',
        type: 'tel:',
      },
      {
        label: i18n.t('features_footer_index_891118'),
        value: 'bd@longbridge.cloud',
        type: 'mailto:',
      },
    ]
    const sellEnd = [
      {
        label: i18n.t('features_footer_index_891117'),
        value: '+852 3851 1712',
        type: 'tel:',
      },
      {
        label: i18n.t('features_footer_index_891118'),
        value: 'cs@longbridge.cloud',
        type: 'mailto:',
      },
    ]
    return { frontSell, sellEnd }
  }, [])

  const fetchLegalTerms = async () => {
    const key = 'legal_terms'
    const data = await getSupportLinks()
    setLegalTermsUrl(data.urls[key])
  }

  useAsyncEffect(async () => {
    await fetchLegalTerms()
  }, [getBasenameLocale()])

  useMount(() => {
    const isCN = window.location.hostname.includes('.cn')
    setISCN(isCN)
  })

  return (
    <footer className={classNames(styles.footer, 'main-container')}>
      <div className={classNames('main-content-width')}>
        <div className="flex flex-col space-y-10 md:flex-row md:space-x-10 xl:space-x-40 md:space-y-0">
          <div className="text-2xl font-semibold text-text_color_1_supplement">{i18n.t('talk-to-us')}</div>
          <div className="flex flex-col flex-1 space-y-10 md:justify-between md:flex-row md:space-y-0">
            <div className="">
              <div className="text-sm font-medium text-text_color_1_supplement">
                {i18n.t('features_footer_index_891119')}
              </div>
              <div
                className={classNames('mt-1 mb-4 text-xs text-text_color_2', {
                  'flex space-x-4': i18n.i18n.language !== 'en',
                })}
              >
                <div>{i18n.t('features_talk_to_us_891118')}</div>
                <div>{i18n.t('features_talk_to_us_891119')}</div>
                <div>{i18n.t('features_talk_to_us_891120')}</div>
              </div>
              <div className="flex flex-col space-y-3">
                {frontSell.map(({ label, value, type }) => (
                  <a className="text-xs font-normal whitespace-nowrap" href={`${type}${value}`} key={value}>
                    {label}
                    {value}
                  </a>
                ))}
              </div>
            </div>
            <div className="">
              <div className="text-sm font-medium text-text_color_1_supplement">
                {i18n.t('features_footer_index_891121')}
              </div>
              <div
                className={classNames('mt-1 mb-4 text-xs text-text_color_2', {
                  'flex space-x-4': i18n.i18n.language !== 'en',
                })}
              >
                <div>{i18n.t('features_talk_to_us_891122')}</div>
                <div>{i18n.t('features_talk_to_us_891123')}</div>
              </div>
              <div className="flex flex-col space-y-3">
                {sellEnd.map(({ label, value, type }) => (
                  <a className="text-xs font-normal whitespace-nowrap" href={`${type}${value}`} key={value}>
                    {label}
                    {value}
                  </a>
                ))}
              </div>
            </div>
            <div className="">
              <div className="mb-3 text-sm font-medium text-text_color_1_supplement">
                {i18n.t('features_footer_index_891123')}
              </div>
              <div>
                <a href="https://www.linkedin.com/company/longbridgewhale" target="_blank" rel="noreferrer">
                  <img className="h-5" alt="" src="https://pub.lbkrs.com/files/202307/dgDMvF2uhbvCAkUf/linkin.svg" />
                </a>
              </div>
            </div>
            <div className="">
              <div className="mb-3 text-sm font-medium text-text_color_1_supplement">
                {i18n.t('features_footer_index_891124')}
              </div>
              <div>
                <img
                  src="https://assets.lbkrs.com/uploads/ca78ddab-b8a5-4ae8-881b-e08b4a8df37f/whale-official.png"
                  alt=""
                  className="w-24"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classNames('main-content-width')}>
        <hr className="mt-6 border-[#EAEBEC]"></hr>
        <div className="flex items-center justify-between mt-6">
          <div className="text-xs text-text_color_3_supplement">
            <span>{i18n.t('footer_005')}</span>
          </div>
          {isCN && (
            <div className="text-xs text-text_color_3_supplement">
              <a href="https://beian.miit.gov.cn" target={'_blank'} rel="noreferrer">
                浙 ICP 备 19021593 号 -11
              </a>
            </div>
          )}
          {legalTermsUrl && (
            <a href={legalTermsUrl} target="_blank" rel="noreferrer">
              {i18n.t('footer_008')}
            </a>
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
