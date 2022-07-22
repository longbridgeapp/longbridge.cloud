import React, { useMemo } from 'react'
import { useTranslation } from 'next-i18next'
import { Block, BlockHeader } from '@/components/block'
import Icon from '@/components/icon'

const WhatCanOneStopDo = ({ list, name }: { list: { icon: string; title: string; desc: string }[]; name: string }) => {
  const i18n = useTranslation('common')

  return (
    <Block>
      <BlockHeader title={i18n.t(`one-stop.what-can-do.title`, { name })} desc={i18n.t('one-stop.what-can-do.desc')} />
      <ul className="flex flex-wrap justify-between mt-8 lg:mt-14">
        {list.map(({ icon, title, desc }) => (
          <li className="flex w-full py-8 border-b lg:w-[45%]" key={icon}>
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
        title: i18n.t('one-stop.longport.title'),
        desc: i18n.t('one-stop.longport.desc'),
      },
      {
        icon: 'broker-4',
        title: i18n.t('one-stop.terminal.title'),
        desc: i18n.t('one-stop.terminal.desc'),
      },
      {
        icon: 'broker-2',
        title: i18n.t('one-stop.trade.title'),
        desc: i18n.t('one-stop.trade.desc'),
      },
      {
        icon: 'broker-5',
        title: i18n.t('one-stop.custom-manager.title'),
        desc: i18n.t('one-stop.custom-manager.desc'),
      },
      {
        icon: 'broker-3',
        title: i18n.t('one-stop.service.title'),
        desc: i18n.t('one-stop.service.desc'),
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
        title: i18n.t('one-stop.longport.title'),
        desc: i18n.t('one-stop.longport.desc'),
      },
      {
        icon: 'broker-4',
        title: i18n.t('one-stop.terminal.title'),
        desc: i18n.t('one-stop.terminal.desc'),
      },
      {
        icon: 'broker-2',
        title: i18n.t('one-stop.trade.title'),
        desc: i18n.t('one-stop.trade.desc'),
      },
      {
        icon: 'Union-11',
        title: i18n.t('one-stop.cloud.title'),
        desc: i18n.t('one-stop.cloud.desc'),
      },
      {
        icon: 'broker-5',
        title: i18n.t('one-stop.custom-manager.title'),
        desc: i18n.t('one-stop.custom-manager.desc'),
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
        title: i18n.t('one-stop.white-label.title'),
        desc: i18n.t('one-stop.white-label.desc'),
      },
      {
        icon: 'broker-4',
        title: i18n.t('one-stop.terminal.title'),
        desc: i18n.t('one-stop.terminal.desc'),
      },
      {
        icon: 'broker-2',
        title: i18n.t('one-stop.trade.title'),
        desc: i18n.t('one-stop.trade.desc'),
      },
      {
        icon: 'Union-11',
        title: i18n.t('one-stop.cloud.title'),
        desc: i18n.t('one-stop.cloud.desc'),
      },
      {
        icon: 'broker-5',
        title: i18n.t('one-stop.custom-manager.title'),
        desc: i18n.t('one-stop.custom-manager.desc'),
      },
    ]
  }, [])

  return <WhatCanOneStopDo list={list} name="White Label" />
}
