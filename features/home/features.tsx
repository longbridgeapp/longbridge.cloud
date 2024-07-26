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
            icon: 'https://pub.lbctrl.com/files/202205/reubR26xbGa1RTnG/Vector-2.png',
            text: i18n.t('home_features_002'),
          },
          {
            icon: 'https://pub.lbctrl.com/files/202205/mFNuiUbcScnEcpwd/Vector-4.png',
            text: i18n.t('home_features_002_2'),
          },
          {
            icon: 'https://pub.lbctrl.com/files/202205/LvxeJkgDcK8Sn6VL/Vector-5.png',
            text: i18n.t('home_features_002_3'),
          },
          {
            icon: 'https://pub.lbctrl.com/files/202205/y6ZqqnSVQftKQNsa/Vector-3.png',
            text: i18n.t('home_features_002_4'),
          },
        ],
        picture: 'https://pub.lbctrl.com/files/202207/sM4h3JKELaG6JDSg/img_1.png',
      },
      {
        title: i18n.t('home_features_003'),
        descList: [
          {
            icon: 'https://pub.lbctrl.com/files/202205/kzuByaLHaXwqbFot/Vector-9.png',
            text: i18n.t('home_features_004_2'),
          },
          {
            icon: 'https://pub.lbctrl.com/files/202205/QXHpc4zibnvo7388/Vector-7.png',
            text: i18n.t('home_features_004_3'),
          },
          {
            icon: 'https://pub.lbctrl.com/files/202205/yj9YoSgRSTBv5bG8/Vector-8.png',
            text: i18n.t('home_features_004_4'),
          },
        ],
        picture: 'https://pub.lbctrl.com/files/202205/ERHi6CkxKPta3tQC/02.png',
      },
      {
        title: i18n.t('home_features_005'),
        descList: [
          {
            icon: 'https://pub.lbctrl.com/files/202205/vaukh5PLh8a1cCYb/Vector-1.png',
            text: i18n.t('home_features_006'),
          },
          {
            icon: 'https://pub.lbctrl.com/files/202205/tsu54ZS1Q71QpdBj/Vector.png',
            text: i18n.t('home_features_006_2'),
          },
        ],
        picture: 'https://pub.lbctrl.com/files/202207/XsGgnV2wjAUbS2Gk/img_3.png',
      },
    ]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export const HomeFeatures = () => {
  const features = useFeatures()
  return (
    <div>
      {features.map(feature => {
        return (
          <div className={classNames(styles['feature-item-container'], 'main-container')} key={feature.title}>
            <div className="main-content-width">
              <div>
                <h3
                  className="title"
                  dangerouslySetInnerHTML={{
                    __html: feature.title,
                  }}
                ></h3>
                <div className="flex flex-col xl:flex-row justify-center xl:justify-between items-center mt-5 xl:mt-[60px]">
                  <div className="left">
                    <div className="desc-list">
                      {feature.descList.map(desc => {
                        return (
                          <div className="gap-4 md:gap-8 desc-item" key={desc.text}>
                            <img
                              className="mx-auto icon"
                              src={desc.icon || 'https://pub.lbctrl.com/files/202205/JRr82mvwpYDoZhGL/Vector__8_.png'}
                              alt=""
                            />
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
      })}
    </div>
  )
}
