import DivideDot from '@/components/divide-dot'
import classNames from 'classnames'
import { useTranslation } from 'next-i18next'
import { FC, useMemo } from 'react'
import styles from './apps.module.scss'

const AppCard: FC<{
  name: string
  desc: string
  services: {
    name: string
    children?: string[]
  }[]
  className?: string
}> = ({ name, desc, services, className }) => {
  const i18n = useTranslation('common')

  return (
    <div className={classNames(styles.card, className, i18n.i18n.language)}>
      <div className="pb-10">
        <h3 className="name">{name}</h3>
        <DivideDot />
        <p className="desc">{desc}</p>
      </div>
      <div className="services">
        <span className="title">{i18n.t('solutions_apps_001')}</span>
        <ul className="service-list">
          {services.map(service => {
            return (
              <li key={service.name} className="service-item">
                <div className="flex">
                  <div className="dot"></div>
                  {service.name}
                </div>
                {service.children && (
                  <ul className="sub-service-list">
                    {service.children.map(child => {
                      return (
                        <li className="sub-service-item" key={child}>
                          <div className="sub-dot"></div>
                          {child}
                        </li>
                      )
                    })}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
function useApps() {
  const i18n = useTranslation('common')

  return useMemo(() => {
    return [
      {
        name: i18n.t('solutions_apps_002'),
        className: 'flex-1',
        desc: i18n.t('solutions_apps_003'),
        services: [
          {
            name: i18n.t('solutions_apps_004'),
          },
          {
            name: i18n.t('solutions_apps_005'),
          },
          {
            name: i18n.t('solutions_apps_006'),
          },
          {
            name: i18n.t('solutions_apps_007'),
          },
          {
            name: i18n.t('solutions_apps_008'),
            children: [
              i18n.t('solutions_apps_009'),
              i18n.t('solutions_apps_010'),
              i18n.t('solutions_apps_011'),
              i18n.t('solutions_apps_012'),
              i18n.t('solutions_apps_013'),
              i18n.t('solutions_apps_014'),
              i18n.t('solutions_apps_015'),
              i18n.t('solutions_apps_016'),
              i18n.t('solutions_apps_017'),
            ],
          },
        ],
      },
      {
        name: i18n.t('solutions_apps_018'),
        className: 'flex-1 brand-theme',
        desc: i18n.t('solutions_apps_019'),
        services: [
          {
            name: i18n.t('solutions_apps_020'),
          },
          {
            name: i18n.t('solutions_apps_021'),
          },
          {
            name: i18n.t('solutions_apps_022'),
          },
          {
            name: i18n.t('solutions_apps_023'),
          },
          {
            name: i18n.t('solutions_apps_024'),
            children: [
              i18n.t('solutions_apps_009'),
              i18n.t('solutions_apps_010'),
              i18n.t('solutions_apps_011'),
              i18n.t('solutions_apps_012'),
              i18n.t('solutions_apps_013'),
              i18n.t('solutions_apps_015'),
              i18n.t('solutions_apps_016'),
              i18n.t('solutions_apps_026'),
            ],
          },
        ],
      },
    ]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export const SolutionApps = () => {
  const apps = useApps()

  return (
    <div className="py-[60px] main-container">
      <div className={classNames(styles.apps, 'main-content-width flex')}>
        {apps.map(({ name, services, className, desc }) => {
          return <AppCard key={name} className={className} name={name} services={services} desc={desc} />
        })}
      </div>
    </div>
  )
}
