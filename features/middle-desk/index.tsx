import classNames from 'classnames'
import { FC, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import MainContain from '@/features/market/components/main-contain'
import ProductAdvantage from '@/features/market/components/product-advantage'
import TradingDeskSystem from '@/features/market/components/trading-desk-system'
import Risk from '@/features/market/components/risk'
import Atm from '@/features/market/components/atm'
import FooterBanner from '@/features/footer-banner'

import styles from './features.module.scss'

export const MiddleDeskContain = () => {
  const i18n = useTranslation('common')
  const list = useMemo(() => {
    return [
      {
        title: '成本高昂',
        desc: '互联网工具日新月异，社区服务已成为标配，但从 0 到 1 成本高昂',
        picture: 'https://pub.lbkrs.com/files/202205/LVsNBrP3ompLpDgd/Vector-2.png',
      },
      {
        title: '竞争力弱',
        desc: '新兴的互联网券商快速试错迭代，传统券商在产品力上很难与之竞争',
        picture: 'https://pub.lbkrs.com/files/202205/23g4qBbMdubKuuyy/Vector.png',
      },
      {
        title: '合规繁琐',
        desc: '各地区对网络社区合规要求尽不相同，需处理各种棘手的运营、法务问题',
        picture: 'https://pub.lbkrs.com/files/202205/WbN7RYmYgDnN4nP7/Vector-1.png',
      },
      {
        title: '团队复杂',
        desc: '社区建设需要兼具金融和互联网双重认知的产品、研发、运营、法务团队',
        picture: 'https://pub.lbkrs.com/files/202205/RhiQGzGZSsn2rB8P/Vector-3.png',
      },
    ]
  }, [])

  return (
    <div>
      <MainContain />
      <ProductAdvantage />
      <TradingDeskSystem />
      <Risk />
      <Atm />
      <FooterBanner
        title={i18n.t('footer-banner.1m')}
        desc={
          'LongPort 一站式解决方案，是面向中等规模零售经纪商一站式解决方案。零售经纪商可以通过 SaaS 服务快速搭建完整的证券业务系统，完成开户、交易、风控、出入金、清结算等业务，便捷的管理客户。并且可以使用新一代的 LongPort App 及 Whale Trade Terminal 交易员终端'
        }
      />
    </div>
  )
}
