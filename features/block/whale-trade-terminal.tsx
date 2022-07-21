import React, { useMemo } from 'react'
import { useTranslation } from 'next-i18next'

import { Block, BlockHeader } from '@/components/block'
import Icon from '@/components/icon'

const IMAGE_URL = 'https://pub.lbkrs.com/files/202207/H2KHstvbtQhWzHgC/Group_427318854.png'

const WhaleTradeTerminal = () => {
  const i18n = useTranslation('common')

  const list = useMemo(() => {
    return [
      {
        image_url: 'https://pub.lbkrs.com/files/202207/rQiieJZ4Yb5Rm2p5/Frame_427318779.png',
        title: '广度',
        desc: i18n.t('支持超过 10 种订单类型，满足各类交易需求'),
      },
      {
        image_url: 'https://pub.lbkrs.com/files/202207/oTWonemh8Uty9Z1C/Frame_427318777.png',
        title: '深度',
        desc: i18n.t('港美 A 股实时行情，专业行情图、行情分析、画线工具、多档高级行情'),
      },
      {
        image_url: 'https://pub.lbkrs.com/files/202207/62g4Jq161FT2k6rZ/Frame_427318780.png',
        title: '操作员功能',
        desc: i18n.t('支持 IPO 认购、Margin Call、成交分配等操作员功能'),
      },
      {
        image_url: 'https://pub.lbkrs.com/files/202207/kpSVxp1cXbK2d3b9/Frame_427318788.png',
        title: '交易员定制',
        desc: i18n.t('灵活的面板配置能力，根据交易员习惯方便定制界面'),
      },
    ]
  }, [])

  return (
    <Block>
      <BlockHeader title={i18n.t('Whale Trade Terminal')} desc={i18n.t('专业的交易员终端，极速、便捷的交易下单')} />
      <div className="flex items-center mt-14">
        <ul className="flex flex-wrap justify-between">
          {list.map(({ image_url }) => (
            <li
              className="flex py-8"
              key={image_url}
              style={{
                width: '48%',
              }}
            >
              <img src={image_url} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </Block>
  )
}

export default WhaleTradeTerminal
