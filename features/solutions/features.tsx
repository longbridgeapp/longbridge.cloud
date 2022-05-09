import classNames from 'classnames'
import { FC, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './features.module.scss'

function useSections() {
  const i18n = useTranslation('common')
  return useMemo(() => {
    return [
      {
        title: i18n.t('solutions_features_001'),
        picture: 'https://pub.lbkrs.com/files/202205/78iwM4XxJkpDfBZk/Vector-1.png',
        features: [
          i18n.t('solutions_features_002'),
          i18n.t('solutions_features_003'),
          i18n.t('solutions_features_004'),
          i18n.t('solutions_features_005'),
          i18n.t('solutions_features_006'),
        ],
      },
      {
        title: i18n.t('solutions_features_007'),
        picture: 'https://pub.lbkrs.com/files/202205/nD8KJU7wNcny2Dh1/Vector-2.png',
        features: [
          i18n.t('solutions_features_008'),
          i18n.t('solutions_features_005'),
          i18n.t('solutions_features_009'),
          i18n.t('solutions_features_010'),
          i18n.t('solutions_features_011'),
        ],
      },
      {
        title: i18n.t('solutions_features_012'),
        picture: 'https://pub.lbkrs.com/files/202205/S1kDuN3w4EPuWjMD/Vector-3.png',
        features: [
          i18n.t('solutions_features_013'),
          i18n.t('solutions_features_014'),
          i18n.t('solutions_features_015'),
          i18n.t('solutions_features_016'),
        ],
      },
      {
        title: i18n.t('solutions_features_017'),
        picture: 'https://pub.lbkrs.com/files/202205/p6ym1pc6CQrKz6aw/Vector-4.png',
        features: [
          i18n.t('solutions_features_018'),
          i18n.t('solutions_features_019'),
          i18n.t('solutions_features_020'),
          i18n.t('solutions_features_021'),
        ],
      },
      {
        title: i18n.t('solutions_features_022'),
        picture: 'https://pub.lbkrs.com/files/202205/q8y6r4HAFL52kZUK/Vector-5.png',
        features: [
          i18n.t('solutions_features_023'),
          i18n.t('solutions_features_024'),
          i18n.t('solutions_features_025'),
          i18n.t('solutions_features_026'),
        ],
      },
      {
        title: i18n.t('solutions_features_027'),
        picture: 'https://pub.lbkrs.com/files/202205/STxVfAJAXTU7QDii/Vector-6.png',
        features: [
          i18n.t('solutions_features_028'),
          i18n.t('solutions_features_029'),
          i18n.t('solutions_features_030'),
          i18n.t('solutions_features_031'),
        ],
      },
    ]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
const SolutionSection: FC<{
  title: string
  features: string[]
  picture: string
}> = ({ title, features, picture }) => {
  return (
    <div className={classNames(styles.section)}>
      <img className="icon" src={picture} alt={title} />
      <div className="main">
        <span className="title">{title}</span>
        <ul className="features">
          {features.map(feature => {
            return (
              <li className="feature-item" key={feature}>
                <div className="dot"></div>
                {feature}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export const SolutionFeatures = () => {
  const sections = useSections()

  return (
    <div className="py-[60px] main-container">
      <div className={classNames(styles.features, 'main-content-width')}>
        {sections.map(section => {
          return (
            <SolutionSection
              picture={section.picture}
              key={section.title}
              title={section.title}
              features={section.features}
            />
          )
        })}
      </div>
    </div>
  )
}
