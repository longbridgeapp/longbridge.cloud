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
        descList: [
          {
            icon: 'https://pub.lbkrs.com/files/202205/reubR26xbGa1RTnG/Vector-2.png',
            text: i18n.t('home_features_002'),
          },
          {
            icon: 'https://pub.lbkrs.com/files/202205/mFNuiUbcScnEcpwd/Vector-4.png',
            text: i18n.t('home_features_002_2'),
          },
          {
            icon: 'https://pub.lbkrs.com/files/202205/LvxeJkgDcK8Sn6VL/Vector-5.png',
            text: i18n.t('home_features_002_3'),
          },
          {
            icon: 'https://pub.lbkrs.com/files/202205/y6ZqqnSVQftKQNsa/Vector-3.png',
            text: i18n.t('home_features_002_4'),
          },
        ],
        picture: 'https://pub.lbkrs.com/files/202205/aXYAZTGwmuHQ8H3x/01.png',
      },
      {
        title: i18n.t('home_features_003'),
        descList: [
          {
            icon: 'https://pub.lbkrs.com/files/202205/tesS1cgTQyNAo98W/Vector-6.png',
            text: i18n.t('home_features_004'),
          },
          {
            icon: 'https://pub.lbkrs.com/files/202205/kzuByaLHaXwqbFot/Vector-9.png',
            text: i18n.t('home_features_004_2'),
          },
          {
            icon: 'https://pub.lbkrs.com/files/202205/QXHpc4zibnvo7388/Vector-7.png',
            text: i18n.t('home_features_004_3'),
          },
          {
            icon: 'https://pub.lbkrs.com/files/202205/yj9YoSgRSTBv5bG8/Vector-8.png',
            text: i18n.t('home_features_004_4'),
          },
        ],
        picture: 'https://pub.lbkrs.com/files/202205/ERHi6CkxKPta3tQC/02.png',
      },
      {
        title: i18n.t('home_features_005'),
        descList: [
          {
            icon: 'https://pub.lbkrs.com/files/202205/vaukh5PLh8a1cCYb/Vector-1.png',
            text: i18n.t('home_features_006'),
          },
          {
            icon: 'https://pub.lbkrs.com/files/202205/tsu54ZS1Q71QpdBj/Vector.png',
            text: i18n.t('home_features_006_2'),
          },
        ],
        picture: 'https://pub.lbkrs.com/files/202205/6Uuaz6d642ZCj6XX/03.png',
      },
    ]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export const HomeFeatures = () => {
  const features = useFeatures()
  return (
    <div>
      {
        features.map(feature => {
          return (
            <div className={classNames(styles['feature-item-container'], 'main-container')} key={feature.title}>
              <div className="main-content-width">
                <div>
                  <h3 className="title">{feature.title}</h3>
                  <div className="flex justify-between items-center mt-[60px]">
                    <div className="left">
                      <div className="desc-list">
                        {feature.descList.map(desc => {
                          return (
                            <div className="desc-item" key={desc.text}>
                              <img className="icon" src={desc.icon || 'https://pub.lbkrs.com/files/202205/JRr82mvwpYDoZhGL/Vector__8_.png'} alt="" />
                              <div className="text">{desc.text}</div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                    <div className="right">
                      <img className="cover" src={feature.picture} alt={feature.title} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
