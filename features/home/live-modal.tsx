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
    'en': 'https://pub.pbkrs.com/files/202205/ozAiPfqNHb4WuFeT/PopupMobileEnglish.png',
    'zh-CN': 'https://pub.pbkrs.com/files/202205/1GUZ7UJHtB5DV63J/PopupMobileChinese.png',
    'zh-HK': 'https://pub.pbkrs.com/files/202205/K7xkvP5Wi11Au5BP/PopupMobileChineseTr.png',
  },
  pc: {
    'en': 'https://pub.pbkrs.com/files/202205/1hTPugDXvqG9vPb2/PopupWebEnglish.png',
    'zh-CN': 'https://pub.pbkrs.com/files/202205/uxLZPiVtgnYsTBAN/PopupWebChinese.png',
    'zh-HK': 'https://pub.pbkrs.com/files/202205/QUX5kNpgghaWRDrd/PopupWebChineseTr.png',
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
      <LocaleLink to="/live" className="block absolute bottom-6 left-10 md:bottom-4 md:left-1/2 md:translate-x-[-50%]">
        <Button className="md:w-full md:!text-sm md:!py-2 whitespace-nowrap" size="medium">
          <Icon type="play-2" className="mr-2" />
          {started ? i18n.t('live_modal_001') : i18n.t('live_modal_002')}
        </Button>
      </LocaleLink>
      <div onClick={() => setVisible(false)} className="absolute cursor-pointer right-4 top-3 md:top-1">
        <Icon type="close" className="text-xl md:text-sm text-black hover:text-brand_color" />
      </div>
    </div>
  )
}
