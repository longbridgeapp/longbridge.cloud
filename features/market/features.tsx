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
        desc: i18n.t('market_features_001'),
        picture: 'https://pub.lbkrs.com/files/202205/LVsNBrP3ompLpDgd/Vector-2.png',
      },
      {
        desc: i18n.t('market_features_002'),
        picture: 'https://pub.lbkrs.com/files/202205/23g4qBbMdubKuuyy/Vector.png',
      },
      {
        desc: i18n.t('market_features_003'),
        picture: 'https://pub.lbkrs.com/files/202205/WbN7RYmYgDnN4nP7/Vector-1.png',
      },
      {
        desc: i18n.t('market_features_004'),
        picture: 'https://pub.lbkrs.com/files/202205/RhiQGzGZSsn2rB8P/Vector-3.png',
      },
    ]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export const MarketFeatures = () => {
  const features = useFeatures()
  const i18n = useTranslation('common')

  return (
    <div className="main-container">
      <div className={classNames(styles.features, 'main-content-width')}>
        <h2
          className="text-section-title"
          dangerouslySetInnerHTML={{
            __html: i18n.t('market_features_005'),
          }}
        ></h2>
        <div className="flex justify-between mt-14 pl-8">
          {features.map(feature => {
            return (
              <div key={feature.desc} className="feature-item">
                 <img src={feature.picture} alt="" />
                 <div className="desc" dangerouslySetInnerHTML={{
                    __html: feature.desc,
                 }}></div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
function useServices() {
  const i18n = useTranslation('common')
  return useMemo(() => {
    return [
      {
        title: i18n.t('market_features_006'),
        desc: i18n.t('market_features_007'),
        picture: 'https://pub.lbkrs.com/files/202205/tBYE9zxz9wvojoHb/Vector.png',
      },
      {
        title: i18n.t('market_features_008'),
        desc: i18n.t('market_features_009'),
        picture: 'https://pub.lbkrs.com/files/202205/ipYi7bC7b9rkm6gR/Vector__1_.png',
      },
      {
        title: i18n.t('market_features_010'),
        desc: i18n.t('market_features_011'),
        picture: 'https://pub.lbkrs.com/files/202205/hkk7u7VYvA1223Kt/Vector__2_.png',
      },
      {
        title: i18n.t('market_features_012'),
        desc: i18n.t('market_features_013'),
        picture: 'https://pub.lbkrs.com/files/202205/3p1Qa4T8k3rLN6LL/Vector__3_.png',
      },
    ]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
export const MarketServices = () => {
  const services = useServices()
  const i18n = useTranslation('common')

  return (
    <div className="main-container">
      <div className={classNames(styles.services, 'main-content-width')}>
        <h2
          className="text-section-title"
          dangerouslySetInnerHTML={{
            __html: i18n.t('market_features_014'),
          }}
        ></h2>
        <div className="flex justify-between items-center mt-14">
          <div className="flex-1">
            {services.map(service => {
              return (
                <div className="service-item" key={service.title}>
                  <div className="cover">
                    <img src={service.picture} alt={service.title} />
                  </div>
                  <div className="ml-9 flex-1">
                    <h3 className="title">{service.title}</h3>
                    <p className="desc">{service.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="flex-1 ml-40">
            <img src="https://pub.lbkrs.com/files/202205/sZodMjdoZiq5MRif/Group_626641.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
