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
        image_url: 'https://pub.lbkrs.com/files/202207/oLjvck5hCLMS1Eh7/1.png',
        title: i18n.t('广度'),
        desc: i18n.t('支持超过 10 种订单类型，满足各类交易需求'),
      },
      {
        image_url: 'https://pub.lbkrs.com/files/202207/dje86qAdaL5VNrQP/2.png',
        title: i18n.t('深度'),
        desc: i18n.t('港美 A 股实时行情，专业行情图、行情分析、画线工具、多档高级行情'),
      },
      {
        image_url: 'https://pub.lbkrs.com/files/202207/RCHjxpjCGCQqNaPr/3.png',
        title: i18n.t('操作员功能'),
        desc: i18n.t('支持 IPO 认购、Margin Call、成交分配等操作员功能'),
      },
      {
        image_url: 'https://pub.lbkrs.com/files/202207/5yx2vfDrSLRBnSFy/4.png',
        title: i18n.t('交易员定制'),
        desc: i18n.t('灵活的面板配置能力，根据交易员习惯方便定制界面'),
      },
    ]
  }, [])

  return (
    <Block className="bg-bg_color_2">
      <BlockHeader title={i18n.t('Whale Trade Terminal')} desc={i18n.t('专业的交易员终端，极速、便捷的交易下单')} />
      <div className="flex items-center mt-14">
        <ul className="justify-between md:flex md:flex-wrap ">
          {list.map(({ image_url, title, desc }) => (
            <li className="my-8 overflow-hidden rounded-lg md:w-[48%]" key={image_url}>
              <img src={image_url} alt="" />
              <div className="h-[175px] py-8 px-10 bg-white">
                <h3 className="text-xl text-brand_color">{title}</h3>
                <p className="mt-3 text-xl font-medium">{desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Block>
  )
}

export default WhaleTradeTerminal
