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
  return (
    <Block>
      <BlockHeader title={title} />
      <ul className="flex flex-wrap justify-between mt-14">
        {list.map(({ icon, title, desc }) => (
          <li className="flex w-full lg:w-[45%] py-8 border-b" key={icon}>
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
        title: i18n.t('rate.item-1'),
        desc: i18n.t('rate.item-2'),
      },
      {
        icon: 'Union-6',
        title: i18n.t('rate.item-3'),
        desc: i18n.t('rate.item-4'),
      },
      {
        icon: 'Union-7',
        title: i18n.t('rate.item-5'),
        desc: i18n.t('rate.item-6'),
      },
    ]
  }, [])
  return <PremiumRate list={list} title={i18n.t('one-stop.service.desc')} />
}

export const LongPortPremiumRate = () => {
  const i18n = useTranslation('common')

  const list = useMemo(() => {
    return [
      {
        icon: 'Union-15',
        title: i18n.t('rate.item-7'),
        desc: i18n.t('rate.item-8'),
      },
      {
        icon: 'Union-6',
        title: i18n.t('rate.item-9'),
        desc: i18n.t('rate.item-10'),
      },
      {
        icon: 'Union-16',
        title: i18n.t('rate.item-11'),
        desc: i18n.t('rate.item-12'),
      },
      {
        icon: 'Union-17',
        title: i18n.t('rate.item-13'),
        desc: i18n.t('rate.item-14'),
      },
    ]
  }, [])

  return <PremiumRate list={list} title={i18n.t('one-stop.cloud.title')} />
}

export const WhiteLabelPremiumRate = () => <LongPortPremiumRate />
