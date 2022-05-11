import classNames from 'classnames'
import { FC, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './features.module.scss'

function useSections() {
  const i18n = useTranslation('common')
  return useMemo(() => {
    return [
      {
        title: i18n.t('bss_features_001'),
        features: [
          {
            title: i18n.t('bss_features_002'),
            desc: i18n.t('bss_features_003'),
            picture: 'https://pub.lbkrs.com/files/202205/AJgLumJugrshwPfT/Vector__1_.png',
          },
          {
            title: i18n.t('bss_features_004'),
            desc: i18n.t('bss_features_005'),
            picture: 'https://pub.lbkrs.com/files/202205/4aPy3T1c2hBMbVhq/Vector__2_.png',
          },
          {
            title: i18n.t('bss_features_006'),
            desc: i18n.t('bss_features_007'),
            picture: 'https://pub.lbkrs.com/files/202205/drRdNRPiHkruGGQ8/Vector__3_.png',
          },
          {
            title: i18n.t('bss_features_008'),
            desc: i18n.t('bss_features_009'),
            picture: 'https://pub.lbkrs.com/files/202205/qxy48zQ8FUpmhthV/Vector__4_.png',
          },
          {
            title: i18n.t('bss_features_010'),
            desc: i18n.t('bss_features_011'),
            picture: 'https://pub.lbkrs.com/files/202205/JXUS4rjSDusvrdXi/Vector__5_.png',
          },
          {
            title: i18n.t('bss_features_012'),
            desc: i18n.t('bss_features_013'),
            picture: 'https://pub.lbkrs.com/files/202205/27TsgNFQDkdwps6R/Vector__6_.png',
          },
        ],
      },
      {
        title: i18n.t('bss_features_014'),
        features: [
          {
            title: i18n.t('bss_features_015'),
            desc: i18n.t('bss_features_016'),
            picture: 'https://pub.lbkrs.com/files/202205/NKbVHSC4MPsjYTtD/Vector__7_.png',
          },
          {
            title: i18n.t('bss_features_017'),
            desc: i18n.t('bss_features_018'),
            picture: 'https://pub.lbkrs.com/files/202205/JRr82mvwpYDoZhGL/Vector__8_.png',
          },
          {
            title: i18n.t('bss_features_019'),
            desc: i18n.t('bss_features_020'),
            picture: 'https://pub.lbkrs.com/files/202205/2qm1tuJe1JhmoWUv/Vector__9_.png',
          },
          {
            title: i18n.t('bss_features_021'),
            desc: i18n.t('bss_features_022'),
            picture: 'https://pub.lbkrs.com/files/202205/A4ZCJubtSrzL4B8Q/Vector__10_.png',
          },
          {
            title: i18n.t('bss_features_023'),
            desc: i18n.t('bss_features_024'),
            picture: 'https://pub.lbkrs.com/files/202205/5ZrUSoMDCFxXVY9Q/Vector__11_.png',
          },
        ],
      },
    ]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
type IFeature = {
  picture: string
  title: string
  desc: string
}
export const BssSection: FC<{
  title?: string
  features: IFeature[]
}> = ({ title, features }) => {
  return (
    <div className="main-container">
      <div className={classNames(styles.features, 'main-content-width')}>
        {title && <h2 className="text-section-title">{title}</h2>}
        <div className="mt-5">
          {features.map(feature => {
            return (
              <div className="feature-item" key={feature.title}>
                <div className="left">
                  <img src={feature.picture} alt={feature.title} />
                </div>
                <div className="ml-12">
                  <h4 className="title">{feature.title}</h4>
                  <p
                    className="desc"
                    dangerouslySetInnerHTML={{
                      __html: feature.desc,
                    }}
                  ></p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export const BssFeatures = () => {
  const sections = useSections()

  return (
    <div className="py-[60px]">
      {sections.map(section => {
        return <BssSection key={section.title} title={section.title} features={section.features} />
      })}
    </div>
  )
}
