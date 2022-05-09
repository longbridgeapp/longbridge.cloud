import classNames from 'classnames'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { PictureTextCard } from '../common/picture-text-card'
import styles from './features.module.scss'

function useFeatures() {
  const i18n = useTranslation()
  return useMemo(() => {
    return [
      {
        title: i18n.t('多端支持'),
        desc: i18n.t('支持 Windows、macOS、Linux、iOS、Android、Web'),
        picture: 'https://pub.lbkrs.com/files/202205/wSRoysh88oprXzTU/20220509-134745.png',
      },
      {
        title: i18n.t('极佳的性能'),
        desc: i18n.t('核心引擎采用 Rust 实现，健壮、小巧、安全，同时提供了极佳的性能'),
        picture: 'https://pub.lbkrs.com/files/202205/V6ohUmpmiXhTCrEt/20220509-134805.png',
      },
    ]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export const TradingFeatures = () => {
  const features = useFeatures()

  return (
    <div className="main-container">
      <div className={classNames(styles.features, 'main-content-width')}>
        <div className="flex justify-between">
          {features.map(({ title, desc, picture }) => {
            return <PictureTextCard desc={desc} picture={picture} key={title} title={title} />
          })}
        </div>
      </div>
    </div>
  )
}
