import React, { useMemo } from 'react'
import { useTranslation } from 'next-i18next'

import { Block, BlockHeader, BlockBetween } from '@/components/block'
import Icon from '@/components/icon'

const IMAGE_URL = 'https://pub.lbkrs.com/files/202207/H2KHstvbtQhWzHgC/Group_427318854.png'

const LongPortApp = () => {
  const i18n = useTranslation('common')

  const list = useMemo(() => {
    return [
      {
        icon: 'longport-app-1',
        desc: i18n.t('覆盖港股、美股、A 股等国际主要金融市场，提供各市场基础及高级实时行情'),
      },
      {
        icon: 'longport-app-2',
        desc: i18n.t('股票全景、多维股票评分、独有可视化供应链产业链分析工具，快速发现甄别投资机会'),
      },
      {
        icon: 'longport-app-3',
        desc: i18n.t('LongPort 资讯，7*24 小时追踪港美 A 股市场热点，时刻把握投资风向'),
      },
      {
        icon: 'longport-app-4',
        desc: i18n.t('LongPort 社区，超过 300 位 KOL 发表专业投资观点，实盘分享真实可信'),
      },
      {
        icon: 'longport-app-5',
        desc: i18n.t('海豚投研，资深研究员解读全球核心资产，独家深度分析'),
      },
    ]
  }, [])

  return (
    <Block className="bg-bg_color_2">
      <BlockHeader
        title={i18n.t('不止是拓展无线，更是助你快速触达用户')}
        desc={i18n.t('LongPort App，无论您的用户身在何处，都可以轻松满足从发现、认知、交易的全链路体验')}
        slogn={i18n.t('面向全披露介绍经纪商的最佳极速实践')}
      />
      <BlockBetween
        reverse
        left={
          <ul className="flex flex-col flex-1">
            {list.map(({ icon, desc }) => (
              <li className="flex items-center w-full py-8 md:w-4/5" key={icon}>
                <div className="mr-12">
                  <Icon type={icon} className="text-5xl" />
                </div>
                <dl>
                  <dd className="align-middle text-text_color_3">{desc}</dd>
                </dl>
              </li>
            ))}
          </ul>
        }
        right={<img src={IMAGE_URL} className="flex-1" alt="" />}
      />
    </Block>
  )
}

export default LongPortApp
