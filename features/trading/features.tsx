import classNames from 'classnames'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { PictureTextCard } from '../common/picture-text-card'
import styles from './features.module.scss'

function useFeatures() {
  const i18n = useTranslation('common')
  return useMemo(() => {
    return [
      {
        title: i18n.t('trading_features_001'),
        desc: i18n.t('trading_features_002'),
        picture: 'https://pub.lbctrl.com/files/202205/Yn7V5uB8HwfU6Bxv/trading_01.png',
      },
      {
        title: i18n.t('trading_features_003'),
        desc: i18n.t('trading_features_004'),
        picture: 'https://pub.lbctrl.com/files/202205/s6sc711cqvkgotT8/trading_02.png',
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
        <div className="flex flex-col justify-between gap-6 lg:flex-row">
          {features.map(({ title, desc, picture }) => {
            return <PictureTextCard desc={desc} picture={picture} key={title} title={title} />
          })}
        </div>
      </div>
    </div>
  )
}
