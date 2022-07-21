import React, { useMemo } from 'react'
import { useTranslation } from 'next-i18next'
import { Block, BlockHeader } from '@/components/block'
import Icon from '@/components/icon'

const WhatCanOneStopDo = ({ list, name }: { list: { icon: string; title: string; desc: string }[]; name: string }) => {
  const i18n = useTranslation('common')

  return (
    <Block>
      <BlockHeader
        title={i18n.t(`使用 ${name} 一站式解决方案可以做什么？`)}
        desc={i18n.t('在您的客户需要的地方随时提供服务，并为您的团队提供更快行动所需的数字化转型支持')}
      />
      <ul className="flex flex-wrap justify-between mt-8 md:mt-14">
        {list.map(({ icon, title, desc }) => (
          <li className="flex w-full py-8 border-b md:w-2/5" key={icon}>
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

export const BrokerOneStop = () => {
  const i18n = useTranslation('common')
  const list = useMemo(() => {
    return [
      {
        icon: 'broker-1',
        title: i18n.t('LongPort'),
        desc: i18n.t('全端覆盖，包括 App、iPad、Desktop、Web'),
      },
      {
        icon: 'broker-4',
        title: i18n.t('Whale Trade Terminal'),
        desc: i18n.t('专业的交易员终端，极速、便捷的交易下单'),
      },
      {
        icon: 'broker-2',
        title: i18n.t('证券交易'),
        desc: i18n.t('涵盖港股、美股、A 股通 3 大市场，支持正股、EFT、IPO、国配、暗盘交易、牛熊证、美股期权'),
      },
      {
        icon: 'broker-5',
        title: i18n.t('客户管理'),
        desc: i18n.t('完整的客户关系管理系统，高效完成客户转化、客户关系维护'),
      },
      {
        icon: 'broker-3',
        title: i18n.t('服务计费'),
        desc: i18n.t('优惠的费率，灵活的佣金机制'),
      },
    ]
  }, [])

  return <WhatCanOneStopDo list={list} name="Introducing Broker" />
}

export const LongPortOneStop = () => {
  const i18n = useTranslation('common')
  const list = useMemo(() => {
    return [
      {
        icon: 'broker-1',
        title: i18n.t('LongPort'),
        desc: i18n.t('全端覆盖，包括 App、iPad、Desktop、Web'),
      },
      {
        icon: 'broker-4',
        title: i18n.t('Whale Trade Terminal'),
        desc: i18n.t('专业的交易员终端，极速、便捷的交易下单'),
      },
      {
        icon: 'broker-2',
        title: i18n.t('证券交易'),
        desc: i18n.t('涵盖港股、美股、A 股通 3 大市场，支持正股、EFT、IPO、国配、暗盘交易、牛熊证、美股期权'),
      },
      {
        icon: 'Union-11',
        title: i18n.t('云原生（Cloud native）证券业务系统'),
        desc: i18n.t('全平台覆盖证券交易系统，包括证券交易中台及移动端 app、桌面版、交易员终端'),
      },
      {
        icon: 'broker-5',
        title: i18n.t('客户管理'),
        desc: i18n.t('完整的客户关系管理系统，高效完成客户转化、客户关系维护'),
      },
    ]
  }, [])

  return <WhatCanOneStopDo list={list} name="LongPort" />
}

export const WhiteLabelOneStop = () => {
  const i18n = useTranslation('common')
  const list = useMemo(() => {
    return [
      {
        icon: 'broker-1',
        title: i18n.t('White Label App'),
        desc: i18n.t('快速灵活的品牌定制能力，只需基础设计即可上线 App'),
      },
      {
        icon: 'broker-4',
        title: i18n.t('Whale Trade Terminal'),
        desc: i18n.t('专业的交易员终端，极速、便捷的交易下单'),
      },
      {
        icon: 'broker-2',
        title: i18n.t('证券交易'),
        desc: i18n.t('涵盖港股、美股、A 股通 3 大市场，支持正股、EFT、IPO、国配、暗盘交易、牛熊证、美股期权'),
      },
      {
        icon: 'Union-11',
        title: i18n.t('云原生（Cloud native）证券业务系统'),
        desc: i18n.t('全平台覆盖证券交易系统，包括证券交易中台及移动端 app、桌面版、交易员终端'),
      },
      {
        icon: 'broker-5',
        title: i18n.t('客户管理'),
        desc: i18n.t('完整的客户关系管理系统，高效完成客户转化、客户关系维护'),
      },
    ]
  }, [])

  return <WhatCanOneStopDo list={list} name="White Label" />
}
