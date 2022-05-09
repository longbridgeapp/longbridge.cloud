import classNames from 'classnames'
import { FC, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './features.module.scss'

function useSections() {
  const i18n = useTranslation()
  return useMemo(() => {
    return [
      {
        title: i18n.t('最佳体验的交易终端'),
        picture: 'https://pub.lbkrs.com/files/202205/78iwM4XxJkpDfBZk/Vector-1.png',
        features: [
          i18n.t('面向 Global 用户设计'),
          i18n.t('基于算法的信息步速分层分发'),
          i18n.t('分层用户交易体验'),
          i18n.t('全平台支持'),
          i18n.t('屡获殊荣'),
        ],
      },
      {
        title: i18n.t('极速交易系统'),
        picture: 'https://pub.lbkrs.com/files/202205/nD8KJU7wNcny2Dh1/Vector-2.png',
        features: [
          i18n.t('全内存可弹性伸缩交易系统'),
          i18n.t('全平台支持'),
          i18n.t('多上手订单路由执行能力'),
          i18n.t('自动灵活的风控能力'),
          i18n.t('最快 10 ms 的订单处理能力'),
        ],
      },
      {
        title: i18n.t('高效清结算体系'),
        picture: 'https://pub.lbkrs.com/files/202205/S1kDuN3w4EPuWjMD/Vector-3.png',
        features: [
          i18n.t('连接数十家银行机构'),
          i18n.t('灵活全面的公司行动支持'),
          i18n.t('极具效率的对唱和财务系统支持'),
          i18n.t('准实时的自动化出入金'),
        ],
      },
      {
        title: i18n.t('智能业务系统'),
        picture: 'https://pub.lbkrs.com/files/202205/p6ym1pc6CQrKz6aw/Vector-4.png',
        features: [
          i18n.t('互联网用户增长最佳实践'),
          i18n.t('多市场渠道归因获客来源'),
          i18n.t('实时用户标签分群和广告投放'),
          i18n.t('丰富的市场及用户运营手段，如卡券权益，拼团等产品化的运营工具'),
        ],
      },
      {
        title: i18n.t('数据支撑中台'),
        picture: 'https://pub.lbkrs.com/files/202205/q8y6r4HAFL52kZUK/Vector-5.png',
        features: [
          i18n.t('实时、离线报表服务'),
          i18n.t('股票资产治理'),
          i18n.t('客户数据管理平台'),
          i18n.t('算法中台'),
        ],
      },
      {
        title: i18n.t('资产管理系统'),
        picture: 'https://pub.lbkrs.com/files/202205/STxVfAJAXTU7QDii/Vector-6.png',
        features: [i18n.t('多资产支持'), i18n.t('高效仓位管理'), i18n.t('资产异动检测'), i18n.t('佣金及税费管理')],
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
