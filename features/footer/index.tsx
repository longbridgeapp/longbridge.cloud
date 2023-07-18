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
        <div className="text-text_color_1_supplement text-2xl font-semibold">联系我们，共同迈向数字化未来</div>
        <div className="text-text_color_2 text-base mt-2">如您有更多需求，可直接联系我们，将及时为您解答</div>
        <div className="flex items-end justify-between mt-10 flex-wrap">
          <div className="flex gap-x-24 gap-y-8 flex-wrap">
            <div className="flex flex-col">
              <span className="text-sm">{i18n.t('footer_004')}</span>
              <div className="flex">
                {telList.map(({ value }) => (
                  <a className="mt-2 font-medium whitespace-nowrap mr-6" href={`tel:${value}`} key={value}>
                    {value}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm">{i18n.t('footer_003')}</span>
              <div className="flex flex-wrap">
                {emailList.map(({ label, value }) => (
                  <div key={value} className="flex flex-wrap mt-2 mr-6 flex-nowrap">
                    <span className="mr-2">{label}:</span>
                    <a className=" font-medium" href={`mailto:${value}`}>
                      {value}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {
            false && <div>
              {
                socials.map(({ icon, href }) => {
                  return (
                    <a className="inline-block w-5 ml-7 first:ml-0" href={href} key={href}>
                      <img src={icon} alt="" />
                    </a>
                  )
                })
              }
            </div>
          }
          <div className='flex mt-10 justify-end'>
            <img className='h-5' src="https://assets.lbkrs.com/uploads/8d8724e7-26a5-4528-9f89-d59a4d193e35/aim.png" />
            <Popover content={111}>
              <img className='h-5 ml-6' src="https://assets.lbkrs.com/uploads/8d8724e7-26a5-4528-9f89-d59a4d193e35/aim.png" />
            </Popover>
          </div>
        </div>
        <hr className="mt-6 border-[#EAEBEC]"></hr>
        <div className="flex items-center justify-between mt-6">
          <div className="text-xs text-text_color_3_supplement">
            <span>{i18n.t('footer_005')}</span>
          </div>
          {isCN && (
            <div className="text-xs text-text_color_3_supplement">
              <a href="https://beian.miit.gov.cn" target={'_blank'} rel="noreferrer">
                浙 ICP 备 19021593 号
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
