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
          <div className="mt-5 md:pr-20 md:mt-0">
            <dl className="text-white">
              <dt className="text-3xl">{i18n.t('掌握精准客户数据，进行有效服务')}</dt>
              <dd className="mt-4 text-xl opacity-70">
                {i18n.t(
                  '客户管理不再是盲测，利用专业工具帮助您真正了解客户需求，寻找并定位您最有价值的客户，高效完成客户转化、客户关系维护，令回报最大化。'
                )}
              </dd>
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
      <ul className="text-white md:flex">
        {list.map(({ icon, title, desc }) => (
          <li className="w-full md:flex-1 md:w-auto" key={icon}>
            <div className="mb-8 text-[92px]">
              <Icon type={icon} />
            </div>
            <dl className="w-full md:w-2/3 md:p-0">
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
        title: '快速查询',
        desc: i18n.t('快速查询客户的个人信息、交易订单、资产信息'),
      },
      {
        icon: 'Union-9',
        title: '客户关系管理系统',
        desc: i18n.t('完整的客户关系管理系统，高效完成客户转化、客户关系维护'),
      },
      {
        icon: 'Union-10',
        title: '客服系统',
        desc: i18n.t('完善的帮助中心与客服系统，随时解答客户的各类问题'),
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
        title: '完备的客户管理系统',
        desc: i18n.t('通过 CRM 为核心管理客户全生命周期，高效获客转化'),
      },
      {
        icon: 'Union-12',
        title: '智能投放系统',
        desc: i18n.t('通过丰富的用户标签，智能的规则配置，完成用户的精准触达'),
      },
      {
        icon: 'Union-13',
        title: '卡券权益系统',
        desc: i18n.t('提供费率折扣、免佣、股票卡、现金卡等灵活配置的营销权益'),
      },
      {
        icon: 'Union-14',
        title: '活动系统',
        desc: i18n.t('提供灵活的获客、裂变线上活动配置及自动发奖能力'),
      },
    ]
  }, [])

  return <CustomerManagement list={list} imageUrl={IMAGE_URL_WHITE_LABEL} />
}
