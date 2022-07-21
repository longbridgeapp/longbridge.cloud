import React, { useMemo } from 'react'
import { useTranslation } from 'next-i18next'

import { Block, BlockHeader } from '@/components/block'
import Icon from '@/components/icon'

const PremiumRate = ({
  list,
  title,
}: {
  list: Array<{ icon: string; title: string; desc: string }>
  title: string
}) => {
  const i18n = useTranslation('common')

  return (
    <Block>
      <BlockHeader title={title} />
      <ul className="flex flex-wrap justify-between mt-14">
        {list.map(({ icon, title, desc }) => (
          <li className="flex w-[480px] py-8 border-b" key={icon}>
            <div className="mr-12">
              <Icon type={icon} className="text-5xl" />
            </div>
            <dl>
              <dt className="text-xl font-semibold">{title}</dt>
              <dd className="mt-4 text-text_color_3">{desc}</dd>
            </dl>
          </li>
        ))}
      </ul>
    </Block>
  )
}

export const BrokerPremiumRate = () => {
  const i18n = useTranslation('common')

  const list = useMemo(() => {
    return [
      {
        icon: 'Union-5',
        title: '佣金费率',
        desc: i18n.t('港股交易佣金、美股交易佣金、港股融资费率、美股融资费率'),
      },
      {
        icon: 'Union-6',
        title: '灵活的经纪人分佣机制',
        desc: i18n.t('针对不同经纪人分组灵活调整分佣比例'),
      },
      {
        icon: 'Union-7',
        title: '分级费率',
        desc: i18n.t('针对不同客户分级配置费率，灵活计费结算'),
      },
    ]
  }, [])
  return <PremiumRate list={list} title={i18n.t('优惠的费率，灵活的佣金机制')} />
}

export const LongPortPremiumRate = () => {
  const i18n = useTranslation('common')

  const list = useMemo(() => {
    return [
      {
        icon: 'Union-15',
        title: i18n.t('全平台覆盖证券交易系统'),
        desc: i18n.t('包括证券交易中台及移动端 app、桌面版、交易员终端'),
      },
      {
        icon: 'Union-6',
        title: i18n.t('便捷的证券账户系统'),
        desc: i18n.t('包括快速的线上开户、KYC、AML 服务'),
      },
      {
        icon: 'Union-16',
        title: i18n.t('极速的出入金系统'),
        desc: i18n.t('支持多家银行，对客户提供 eDDA、FPS、银证转帐等多种方式，快至分钟级入账'),
      },
      {
        icon: 'Union-17',
        title: i18n.t('完整的结算交收系统'),
        desc: i18n.t('覆盖多市场多产品多币种，全面的业务报表'),
      },
    ]
  }, [])

  return <PremiumRate list={list} title={i18n.t('云原生（Cloud native）证券业务系统')} />
}

export const WhiteLabelPremiumRate = () => <LongPortPremiumRate />
