import Button from '@/components/button'
import Icon from '@/components/icon'
import classNames from 'classnames'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import styles from './live-modal.module.scss'
import { LocaleLink } from '@/components/locale-link'
import { useLive } from '@/hooks/use-live'
import { isServer } from '@/utils/common'

const pictures = {
  mobile: {
    'en': 'https://pub.lbkrs.com/files/202205/58N3i6hsJhtjeFFC/PopupMobileEnglish.png',
    'zh-CN': 'https://pub.lbkrs.com/files/202205/hWtBfroqoeL4LMiS/PopupMobileChinese.png',
    'zh-HK': 'https://pub.lbkrs.com/files/202205/hmYBrCbJXjy2JXWk/PopupMobileChineseTr.png',
  },
  pc: {
    'en': 'https://pub.lbkrs.com/files/202205/v1vyXGyJCPrCxREw/PopupWebEnglish.png',
    'zh-CN': 'https://pub.lbkrs.com/files/202205/GB6WinBd5sCaDuBc/PopupWebChinese.png',
    'zh-HK': 'https://pub.lbkrs.com/files/202205/aW6Q6FdjaB1Emhmb/PopupWebChineseTr.png',
  },
} as any

export const LiveModal = () => {
  const [visible, setVisible] = useState(true)
  const i18n = useTranslation('common')
  const isEn = i18n.i18n.language === 'en'
  const { started, ended } = useLive()
  if (!visible || isServer() || ended) {
    return null
  }
  // 以 768 为分界线
  const picture = pictures[window.innerWidth > 768 ? 'pc' : 'mobile'][i18n.i18n.language]

  return (
    <div className={classNames(styles['live-modal'])}>
      <div>
        <img src={picture} alt="" />
      </div>
      <LocaleLink to="/live" className="block absolute left-10 bottom-10">
        <Button className="md:w-full !text-base">
          <Icon type="play-2" className="mr-2" />
          {started ? i18n.t('现在观看') : i18n.t('立即登记')}
        </Button>
      </LocaleLink>
      <div onClick={() => setVisible(false)} className="absolute cursor-pointer right-6 top-6 md:right-3">
        <Icon type="close" className="text-2xl md:text-xl text-black hover:text-brand_color" />
      </div>
    </div>
  )
}
export const LiveModal2 = () => {
  const [visible, setVisible] = useState(true)
  const i18n = useTranslation('common')
  const isEn = i18n.i18n.language === 'en'
  const { started, ended } = useLive()

  if (!visible || isServer() || ended) {
    return null
  }

  return (
    <div className={classNames(styles['live-modal'])}>
      <div className="flex justify-between items-center">
        <div className="flex-[1.5] flex flex-col justify-between">
          <div className="">
            <div className="flex md:justify-center items-center font-medium">
              <img className="w-12" src="https://pub.lbkrs.com/files/202205/T159aMqCsYzAFFkv/Group_627342.png" alt="" />
              &nbsp;
              <span className="text-xs translate-y-[1px]">LONGBRIDGE WHALE</span>
            </div>
            <div className="font-bold leading-[1.1]">{i18n.t('live_modal_001')}</div>
          </div>
          <div
            className={classNames('whitespace-nowrap text-[28px] leading-[1.2] font-bold mt-8 md:mt-4', {
              '!text-4xl': isEn,
            })}
          >
            <p
              dangerouslySetInnerHTML={{
                __html: i18n.t('live_modal_002'),
              }}
            ></p>
            <p>{i18n.t('live_modal_003')}</p>
          </div>
          <div className="hidden md:block my-4">
            <img
              className="w-[88px] inline-block"
              src="https://pub.lbkrs.com/files/202205/GWgSjEj1rjc54U4R/Group_66.png"
              alt=""
            />
          </div>
          <LocaleLink to="/live" className="block mt-8 md:mt-0">
            <Button className="md:w-full !text-base">
              <Icon type="play-2" className="mr-2" />
              {started ? i18n.t('现在观看') : i18n.t('立即登记')}
            </Button>
          </LocaleLink>
        </div>
        <div className="flex-1 md:hidden ml-16">
          <img className="w-full" src="https://pub.lbkrs.com/files/202205/GWgSjEj1rjc54U4R/Group_66.png" alt="" />
        </div>
      </div>
      <div onClick={() => setVisible(false)} className="absolute cursor-pointer right-6 top-6 md:right-3">
        <Icon type="close" className="text-2xl md:text-xl text-black hover:text-brand_color" />
      </div>
    </div>
  )
}
