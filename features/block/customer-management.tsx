import React, { useMemo } from 'react'
import { useTranslation } from 'next-i18next'

import { Block, BlockHeader, BlockBetween } from '@/components/block'
import { TalkToUs } from '../talk-to-us'
import Icon from '@/components/icon'
import Styles from './customer-management.module.scss'

const BACKGROUND_URL = 'https://pub.lbctrl.com/files/202207/4HBZ4vvcEniJQXur/Group_427318856.png'

const IMAGE_URL =
  'https://assets.lbctrl.com/uploads/a99641f2-03a8-4f4e-a404-40d5f951a6e3/img_v2_9a346330-7aa2-4cb8-a38d-cb128cc7fadg.png'
const IMAGE_URL_HK =
  'https://assets.lbctrl.com/uploads/778b1866-c29b-4ac8-aaaf-a3d4453e1c2a/img_v2_9e4c45de-5a4a-4618-9ad1-0ee112398e4g.png'
const IMAGE_URL_EN =
  'https://assets.lbctrl.com/uploads/1d732acd-69a7-439d-b622-9c87bfeedf4e/img_v2_403ee996-de80-4035-bbe9-274454571e5g.png'

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

  const isEn = i18n.i18n?.language === 'en'
  const isHK = i18n.i18n?.language === 'zh-HK'

  const list = useMemo(() => {
    return [
      {
        icon: 'Union-8',
        title: i18n.t('customer-management.item-1'),
        desc: i18n.t('customer-management.item-2'),
      },
      {
        icon: 'Union-9',
        title: i18n.t('customer-management.item-3'),
        desc: i18n.t('customer-management.item-14'),
      },
      {
        icon: 'Union-10',
        title: i18n.t('customer-management.item-4'),
        desc: i18n.t('customer-management.item-5'),
      },
    ]
  }, [])

  return <CustomerManagement list={list} imageUrl={isEn ? IMAGE_URL_EN : isHK ? IMAGE_URL_HK : IMAGE_URL} />
}

export const LongPortManagement = () => <BrokerManagement />

const IMAGE_URL_WHITE_LABEL = 'https://pub.lbctrl.com/files/202207/9qmLkU3d53VTM3H3/Group_627339.png'

export const WhiteLabelManagement = () => {
  const i18n = useTranslation('common')

  const list = useMemo(() => {
    return [
      {
        icon: 'Union-9',
        title: i18n.t('customer-management.item-6'),
        desc: i18n.t('customer-management.item-7'),
      },
      {
        icon: 'Union-12',
        title: i18n.t('customer-management.item-8'),
        desc: i18n.t('customer-management.item-9'),
      },
      {
        icon: 'Union-13',
        title: i18n.t('customer-management.item-10'),
        desc: i18n.t('customer-management.item-11'),
      },
      {
        icon: 'Union-14',
        title: i18n.t('customer-management.item-12'),
        desc: i18n.t('customer-management.item-13'),
      },
    ]
  }, [])

  return <CustomerManagement list={list} imageUrl={IMAGE_URL_WHITE_LABEL} />
}
