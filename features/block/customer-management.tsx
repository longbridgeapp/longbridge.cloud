import React, { useMemo } from 'react'
import { useTranslation } from 'next-i18next'

import { Block, BlockHeader, BlockBetween } from '@/components/block'
import { TalkToUs } from '../talk-to-us'
import Icon from '@/components/icon'
import Styles from './customer-management.module.scss'

const BACKGROUND_URL = 'https://pub.lbkrs.com/files/202207/4HBZ4vvcEniJQXur/Group_427318856.png'
const IMAGE_URL =
  'https://pub.lbkrs.com/files/202207/s8YS4kvkQevSUt6C/origin_img_v2_d453af00-8404-4e97-b3e8-28c6676a4e3g_1.png'

const CustomerManagement = ({
  list,
  imageUrl,
}: {
  list: Array<{ icon: string; title: string; desc: string }>
  imageUrl: string
}) => {
  const i18n = useTranslation('common')

  return (
    <Block
      className={Styles.scope}
      style={{
        backgroundImage: `url(${BACKGROUND_URL})`,
      }}
    >
      <BlockBetween
        reverse
        left={
          <div className="mt-5 lg:pr-20 lg:mt-0">
            <dl className="text-white">
              <dt className="text-3xl">{i18n.t('customer-management.title')}</dt>
              <dd className="mt-4 text-xl opacity-70">{i18n.t('customer-management.desc')}</dd>
            </dl>
            <div className="talk-to-us">
              <TalkToUs
                className="text-brand_color"
                style={{
                  backgroundColor: '#fff',
                  color: '#5622CF',
                }}
              />
            </div>
          </div>
        }
        right={<img src={imageUrl} alt="" />}
      />
      <ul className="text-white lg:flex">
        {list.map(({ icon, title, desc }) => (
          <li className="w-full lg:flex-1 lg:w-auto" key={icon}>
            <div
              className="my-8 text-[92px]"
              style={{
                lineHeight: 0,
              }}
            >
              <Icon type={icon} />
            </div>
            <dl className="w-full lg:w-2/3 lg:p-0">
              <dt className="text-xl">{title}</dt>
              <dd className="mt-3 text-base opacity-70">{desc}</dd>
            </dl>
          </li>
        ))}
      </ul>
    </Block>
  )
}

export const BrokerManagement = () => {
  const i18n = useTranslation('common')

  const list = useMemo(() => {
    return [
      {
        icon: 'Union-8',
        title: 'customer-management.item-1',
        desc: i18n.t('customer-management.item-2'),
      },
      {
        icon: 'Union-9',
        title: 'customer-management.item-3',
        desc: i18n.t('one-stop.custom-manager.desc'),
      },
      {
        icon: 'Union-10',
        title: 'customer-management.item-4',
        desc: i18n.t('customer-management.item-5'),
      },
    ]
  }, [])

  return <CustomerManagement list={list} imageUrl={IMAGE_URL} />
}

export const LongPortManagement = () => <BrokerManagement />

const IMAGE_URL_WHITE_LABEL = 'https://pub.lbkrs.com/files/202207/9qmLkU3d53VTM3H3/Group_627339.png'

export const WhiteLabelManagement = () => {
  const i18n = useTranslation('common')

  const list = useMemo(() => {
    return [
      {
        icon: 'Union-9',
        title: 'customer-management.item-6',
        desc: i18n.t('customer-management.item-7'),
      },
      {
        icon: 'Union-12',
        title: 'customer-management.item-8',
        desc: i18n.t('customer-management.item-9'),
      },
      {
        icon: 'Union-13',
        title: 'customer-management.item-10',
        desc: i18n.t('customer-management.item-11'),
      },
      {
        icon: 'Union-14',
        title: 'customer-management.item-12',
        desc: i18n.t('customer-management.item-13'),
      },
    ]
  }, [])

  return <CustomerManagement list={list} imageUrl={IMAGE_URL_WHITE_LABEL} />
}
