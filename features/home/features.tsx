import classNames from 'classnames'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './features.module.scss'

function useFeatures() {
  const i18n = useTranslation()
  return useMemo(() => {
    return [
      {
        title: i18n.t('One Stop'),
        desc: i18n.t(
          'WHALE 为券商提供 App，前、中、后台的一站式券商产品及解决方案，同时涵盖行情，资讯，基本面等数据服务，结合 WHALE 提供的互联网券商运营能力，WHALE 客户可以获得最具竞争力的产品体验，同时可以获得最先进的互联网券商的运营能力；对于定制化需求的开发，客户无需再与 App 和系统不同的供应商分别对接，提高效率的同时，解决了系统稳定性以及售后的问题。'
        ),
        picture: 'https://pub.lbkrs.com/files/202205/SGyu9t3dXdTaUUWe/feature-1.png',
      },
      {
        title: i18n.t('Cloud Native'),
        desc: i18n.t(
          'WHALE 所有系统都是基于云端架构，并且 WHALE 是 SFC 目前唯一颁发 EDSP 之机构。Cloud Native 保障了系统运营的高可靠性，同时免去了本地机房运维的高成本，每用户云资源月成本低于 5 港币；借助于亚马逊云以及阿里云科技巨头的强大的科技能力，有效的保护了系统以及数据的安全性；智能的三地实时灾备系统，可以在一分钟内自动切换线路；不用在非交易日做系统更新，WHALE 可以随时热发布，以确保系统问题的实时修复，以及更优的产品体验第一时间触达用户。'
        ),
        picture: 'https://pub.lbkrs.com/files/202205/c3BRnGpa8srEf561/feature-2.png',
      },
      {
        title: i18n.t('Strategy and Pricing'),
        desc: i18n.t(
          'WHALE 不仅提供了完整解决方案，同时可以订阅每一个原子化的产品，如 App，行情服务，供应链数据，海豚投研内容，数据中台，CRM，智能广告等高级内容提供实时订阅的能力，以及在线计费的方式。WHALE 不以高额的 setup fee 作为主要的盈利模式，而是通过与客户的交易收入中分佣来实现与客户的共同成长。'
        ),
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
