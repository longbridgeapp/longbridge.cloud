import BoxModule from '@/features/common/box-module'
import { useMemo } from 'react'
import { Divider } from 'antd'
import TextPictureSecondary from '@/features/common/text-picture-secondary'

const TradingDeskSystem = () => {
  const sectionList01 = useMemo(() => {
    return [
      {
        img: 'https://pub.lbkrs.com/static/offline/202301/xt62YraKZZG8ypWA/Frame_427319006.svg',
        title: '专业的交易能力',
        list: [
          '横跨港、美、中华通、新加坡等市场股票、ETF、轮证、期权等多品种的在线交易',
          '支持新股认购、基金申赎以及其他非标类 OTC 产品的线上交易',
          '支持全量交易所订单类型，外加自研的条件订单、附加单等为用户建仓、止盈止损策略提供辅助',
        ],
      },
      {
        img: 'https://pub.lbkrs.com/static/offline/202301/JMEzTGTMU93CW49z/Frame_427319008.svg',
        title: '高配置高可用的先进系统',
        list: [
          '毫秒级订单报送延迟，不错过任何一次交易机会',
          '20,000 TPS 并发处理能力，市场再火也不担心拥堵',
          '异地多活灾备，保持 7x24 小时在线，非交易时段全时段可预埋订单',
        ],
      },
    ]
  }, [])

  const sectionList02 = useMemo(() => {
    return {
      img: 'https://pub.lbkrs.com/static/offline/202301/PGR3CtMbtuKswMLf/Frame_427319002.svg',
      title: '深度管理业务',
      list: [
        {
          img: 'https://pub.lbkrs.com/static/offline/202301/DJpxkYQF5MzQjqQ8/list.svg',
          text: '支持成交分配、订单批核、成交补单、异常订单、成交取消等日常交易业务',
        },
        {
          img: 'https://pub.lbkrs.com/static/offline/202301/hhec68Xh6JMi6MHY/list_record.svg',
          text: '实时的风控记录展示和平仓下单',
        },
        {
          img: 'https://pub.lbkrs.com/static/offline/202301/8r21WddwVCdKvW8n/market.svg',
          text: '实时的调账操作灵活支持针对各种日间异常业务的差错调整',
        },
      ],
    }
  }, [])

  const sectionList03 = useMemo(() => {
    return {
      img: 'https://pub.lbkrs.com/static/offline/202301/wKf7dYWRW8Suc2vc/Frame_427319046.svg',
      title: '前台体验专家',
      list: [
        {
          img: 'https://pub.lbkrs.com/static/offline/202301/Ze5bxSCNooyh4UNS/feed.svg',
          text: '灵活的自定义面板组件布局，根据交易员喜好和操作场景灵活定制',
        },
        {
          img: 'https://pub.lbkrs.com/static/offline/202301/xgCrXorxFmhxM4Kv/keyboard.svg',
          text: '多达数十个交易、行情快捷键操作设置，全键盘完成快速下单，极大提升交易员操作效率',
        },
        {
          img: 'https://pub.lbkrs.com/static/offline/202301/mys4LWQux88M2Krv/watchlist.svg',
          text: 'TradingView 内嵌图表，提供趋势线、形态线等丰富的画线工具，上百种技术图形指标',
        },
        {
          img: 'https://pub.lbkrs.com/static/offline/202301/ZAYUDeSYBek5GGNn/vote.svg',
          text: '全市场热度、指数、板块、个股实时行情，应有尽有',
        },
      ],
    }
  }, [])
  return (
    <BoxModule className="bg-[#F8F9FA]" label={'交易前台系统'} title={'又快又好，做交易的专家'}>
      <>
        <div className="flex space-x-10">
          {sectionList01.map((item, index) => {
            return (
              <div key={index}>
                <img className="mb-5" src={item?.img} alt="" />
                <div className="space-y-4 max-w-[498px]">
                  <div className="text-[28px] font-medium">{item?.title}</div>
                  {item?.list &&
                    item.list.map((itm, idx) => {
                      return (
                        <div className="dot-list text-base leading-6 text-text_color_1_supplement" key="idx">
                          {itm}
                        </div>
                      )
                    })}
                </div>
              </div>
            )
          })}
        </div>
        <Divider className="my-10" />
        <TextPictureSecondary item={sectionList02} />
        <Divider className="my-10" />
        <TextPictureSecondary className="flex-row-reverse" item={sectionList02} />
      </>
    </BoxModule>
  )
}
export default TradingDeskSystem
