import classNames from 'classnames'
import { FC, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './features.module.scss'

function useSections() {
  const i18n = useTranslation()
  return useMemo(() => {
    return [
      {
        title: i18n.t('产品优势'),
        features: [
          {
            title: i18n.t('云上 SaaS 系统'),
            desc: i18n.t('100% 云上 SaaS 系统，快速配置，一键上线'),
            picture: 'https://pub.lbkrs.com/files/202205/AJgLumJugrshwPfT/Vector__1_.png',
          },
          {
            title: i18n.t('覆盖香港和美国市场的股票、ETF、权证及期权交易'),
            desc: i18n.t('覆盖香港和美国市场的股票、ETF、权证及期权交易，并支持市价单、限价单、条件单、改单等订单能力'),
            picture: 'https://pub.lbkrs.com/files/202205/4aPy3T1c2hBMbVhq/Vector__2_.png',
          },
          {
            title: i18n.t('全内存交易系统'),
            desc: i18n.t('全内存交易系统，最快 10ms 的订单处理延迟'),
            picture: 'https://pub.lbkrs.com/files/202205/drRdNRPiHkruGGQ8/Vector__3_.png',
          },
          {
            title: i18n.t('毫秒级风控引擎'),
            desc: i18n.t('毫秒级的风控引擎，秒级 Margin call 处理，保证金自动化追缴，自动平仓能力'),
            picture: 'https://pub.lbkrs.com/files/202205/qxy48zQ8FUpmhthV/Vector__4_.png',
          },
          {
            title: i18n.t('多种出入金通道支持'),
            desc: i18n.t('支持 FPS、eDDA、银证等多种出入金通道，智能凭证匹配，秒级入金处理速度'),
            picture: 'https://pub.lbkrs.com/files/202205/JXUS4rjSDusvrdXi/Vector__5_.png',
          },
          {
            title: i18n.t('打新多倍融资池支持'),
            desc: i18n.t('打新多倍融资池支持，打新抢购抗压能力'),
            picture: 'https://pub.lbkrs.com/files/202205/27TsgNFQDkdwps6R/Vector__6_.png',
          },
        ],
      },
      {
        title: i18n.t('技术优势'),
        features: [
          {
            title: i18n.t('弹性吞吐量'),
            desc: i18n.t('弹性吞吐量，闲时节约成本，高峰秒级扩容'),
            picture: 'https://pub.lbkrs.com/files/202205/NKbVHSC4MPsjYTtD/Vector__7_.png',
          },
          {
            title: i18n.t('全新微服务架构'),
            desc: i18n.t('基于全新一代的云上微服务架构'),
            picture: 'https://pub.lbkrs.com/files/202205/JRr82mvwpYDoZhGL/Vector__8_.png',
          },
          {
            title: i18n.t('自动化弹性扩容'),
            desc: i18n.t('自动化弹性扩容，自动化故障转移能力'),
            picture: 'https://pub.lbkrs.com/files/202205/2qm1tuJe1JhmoWUv/Vector__9_.png',
          },
          {
            title: i18n.t('三节点灾备能力'),
            desc: i18n.t('单节点的费用享受三节点的灾备能力'),
            picture: 'https://pub.lbkrs.com/files/202205/A4ZCJubtSrzL4B8Q/Vector__10_.png',
          },
          {
            title: i18n.t('全系统隔离方案'),
            desc: i18n.t('数据库级别的全系统隔离方案，享受数据的专属权利'),
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
                  <h4 className="title">{feature.title}</h4>
                </div>
                <p
                  className="desc"
                  dangerouslySetInnerHTML={{
                    __html: feature.desc,
                  }}
                ></p>
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
