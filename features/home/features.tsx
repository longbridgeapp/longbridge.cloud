import classNames from 'classnames'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './features.module.scss'

function useFeatures() {
  const i18n = useTranslation('common')
  return useMemo(() => {
    return [
      {
        title: i18n.t('home_features_001'),
        desc: i18n.t('home_features_002'),
        picture: 'https://pub.lbkrs.com/files/202205/SGyu9t3dXdTaUUWe/feature-1.png',
      },
      {
        title: i18n.t('home_features_003'),
        desc: i18n.t('home_features_004'),
        picture: 'https://pub.lbkrs.com/files/202205/c3BRnGpa8srEf561/feature-2.png',
      },
      {
        title: i18n.t('home_features_005'),
        desc: i18n.t('home_features_006'),
        picture: 'https://pub.lbkrs.com/files/202205/niu5D86c8maMsLeo/feature-3.png',
      },
    ]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export const HomeFeatures = () => {
  const features = useFeatures()
  return (
    <div className="main-container">
      <div className={classNames(styles.features, 'main-content-width')}>
        {features.map(feature => {
          return (
            <div className="feature-item" key={feature.title}>
              <div className="left">
                <h3 className="title">{feature.title}</h3>
                <p className="desc">{feature.desc}</p>
              </div>
              <div className="right">
                <img src={feature.picture} alt={feature.title} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
