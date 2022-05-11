import DivideDot from '@/components/divide-dot'
import classNames from 'classnames'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './gallery.module.scss'

function useFeatures() {
  const i18n = useTranslation('common')
  return useMemo(() => {
    return [
      {
        desc: i18n.t('trading_gallery_001'),
        picture: 'https://pub.lbkrs.com/files/202205/bPJymyB54gXuempu/trading_03.png',
      },
      {
        desc: i18n.t('trading_gallery_002'),
        picture: 'https://pub.lbkrs.com/files/202205/ZwPGQKodXsg1tssZ/trading_04.png',
      },
    ]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export const TradingGallery = () => {
  const features = useFeatures()
  return (
    <div className="main-container">
      <div className={classNames(styles.features, 'main-content-width')}>
        {features.map(feature => {
          return (
            <div className="feature-item" key={feature.desc}>
              <div className="feature-left">
                <img src={feature.picture} alt={feature.desc} />
              </div>
              <div className="feature-right">
                <p
                  className="desc"
                  dangerouslySetInnerHTML={{
                    __html: feature.desc,
                  }}
                ></p>
                <div className="mt-8">
                  <DivideDot size="medium" />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
