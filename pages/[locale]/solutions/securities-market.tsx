// 零售终端
import { Layout } from '@/features/common/page-layout'
import i18nextConfig from '@/next-i18next.config'
import { i18nPaths } from '@/utils/i18n-paths'
import React, { useMemo, useRef } from 'react'
import { SEOMeta } from '@/utils/seo'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import WhaleOfficialFooter from '@/features/whale-official/footer'
import Banner from '@/features/product/Banner'
import Comment from '@/features/product/Comment'
import Box from '@/features/product/Box'
import Title from '@/features/product/title'
import InfoIntroduce, { ImageAndText, ImageAndList } from '@/features/solutions/info-introduce'
import Table from '@/components/table'
import RightIcon from '@/components/right-icon'
import Compare from '@/components/compare'

export const getStaticPaths = () => ({
  fallback: false,
  paths: i18nPaths(),
})

export const getStaticProps = async (ctx: any) => ({
  props: {
    ...(await serverSideTranslations(ctx?.params?.locale, ['common', 'seo'], i18nextConfig as unknown as any)),
  },
})
const SecuritiesMarket: React.FC = () => {
  const seoI18n = useTranslation(['seo'])
  const i18n = useTranslation('common')

  const banner_props = {
    title: '证券柜台解决方案',
    desc: [
      '方案涵盖股票、期权、基金、债券、衍生品等产品的交易清算能力；支持多市场、多样化交易模式，满足经纪商开户、登记、托管、交易、清算需求；灵活可定制的开放接口可以满足各类业务快速接入，可配置的标准业务功能和定制的专业旗舰功能，任何类型的经纪商都能确定一套适合的解决方案；基于互联网运营思维梳理的核心业务流程高度实现自动化，帮助经纪商更好的降本增效',
    ],
    img: {
      'en': 'https://assets.lbkrs.com/uploads/67b3311b-5bfe-4306-8230-22ac7a48365c/banner.png',
      'zh-CN': 'https://assets.lbkrs.com/uploads/67b3311b-5bfe-4306-8230-22ac7a48365c/banner.png',
      'zh-HK': 'https://assets.lbkrs.com/uploads/67b3311b-5bfe-4306-8230-22ac7a48365c/banner.png',
    },
  }

  const content_banner_props = {
    desc: [
      'Windows / macOS / Linux 多终端支持，根据操作员自身操作习惯自定义面板组件和内容排布，设置不同操作快捷键，支持全键盘操作',
      '专业的行情交易工具，覆盖全市场高级行情及订单类型，以及实时的 Margin Call 检测在前台实现日常的盯盘交易、订单处理、信息查询、账目调整等操作',
    ],
    img: {
      'en': 'https://assets.lbkrs.com/uploads/12cf7828-95b7-43bb-9e94-3ef98e6a5024/banner.png',
      'zh-CN': 'https://assets.lbkrs.com/uploads/12cf7828-95b7-43bb-9e94-3ef98e6a5024/banner.png',
      'zh-HK': 'https://assets.lbkrs.com/uploads/12cf7828-95b7-43bb-9e94-3ef98e6a5024/banner.png',
    },
  }
  const content_banner_props_2 = {
    desc: [
      '便捷高效的账户管理系统实现多种身份认证方式，满足不同国家地区合规要求',
      '自动化 KYC 审核流程，即刻生成审核结果',
      '线上开户流程，快至 3 分钟开通账户',
      '统一的资产管理与高性能的交易风控处理，提供体验佳、处理快、7×24H 连续的服务能力',
      '出入金方式涵盖主流的银证转帐等直连实时到账以及银行凭证关联人工操作出入账模式',
    ],
    img: {
      'en': 'https://assets.lbkrs.com/uploads/eaf543bb-80f4-42b7-bac1-e43d8afcd27d/banner.png',
      'zh-CN': 'https://assets.lbkrs.com/uploads/eaf543bb-80f4-42b7-bac1-e43d8afcd27d/banner.png',
      'zh-HK': 'https://assets.lbkrs.com/uploads/eaf543bb-80f4-42b7-bac1-e43d8afcd27d/banner.png',
    },
    reverse: false,
  }
  const content_banner_props_3 = {
    desc: [
      '清结算系统具备多市场、多投资品、多币种的结合运营卡券一体化清算能力，满足经纪商灵活的业务模式',
      'Whale 独立的清算数据备份及回撤功能可以在前台 7 x 24 运转的情况下完成分市场的精准一键清算',
      '公司行动系统实现从预告登记到方案选择以及确认执行支持线上自动化处理流程，满足客户在线快速选择方案，确保公司行动方案及时准确执行',
      '丰富的各类业务、监管报表及灵活的配置的会计系统有效提高财务及结算人员工作效率',
    ],
    img: {
      'en': 'https://assets.lbkrs.com/uploads/eaf543bb-80f4-42b7-bac1-e43d8afcd27d/banner.png',
      'zh-CN': 'https://assets.lbkrs.com/uploads/eaf543bb-80f4-42b7-bac1-e43d8afcd27d/banner.png',
      'zh-HK': 'https://assets.lbkrs.com/uploads/eaf543bb-80f4-42b7-bac1-e43d8afcd27d/banner.png',
    },
  }

  const table_1 = {
    heads: [
      { title: '产品功能' },
      { title: '标准版', light: true },
      { title: '专业版', light: true },
      { title: '旗舰版', light: true },
    ],
    body: [
      {
        label: '证券市场支持',
        value: [
          ['香港港股', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
          ['港股暗盘', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
          ['中华通 A 股', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
          ['美股（含盘前盘后）', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
          ['新加坡股', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
          [
            '基金产品',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
          [
            '美股期权',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <RightIcon key="icon" />,
          ],
          ['OTC-股票（全球市场）', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
          [
            'OTC-债券',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
          [
            'OTC-其他（含衍生品）',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
          [
            '美股沽空 Short Sell',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            ,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
        ],
      },
      {
        label: '订单类型支持',
        value: [
          [
            <div key="hk-shares">
              <div>港股 - 基本订单</div>
              <div className="mt-1 text-xs text-text_color_2 lg:max-w-[484px]">
                含：LO、MO、ELO、SLO、AO、ALO、Odd Lot、Manual Trade(含碎股撮合)、碎股盘与撮合、交易所批量撤单
              </div>
            </div>,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
          [
            <div key="cn-shares">
              <div>中华通 - 基本订单</div>
              <div className="mt-1 text-xs text-text_color_2 lg:max-w-[484px]">含：LO、MO</div>
            </div>,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
          [
            <div key="us-shares">
              <div>美股 - 基本订单</div>
              <div className="mt-1 text-xs text-text_color_2 lg:max-w-[484px]">含：LO、MO、支持盘前盘后时段交易</div>
            </div>,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
          [
            <div key="sg-shares">
              <div>新加坡股 - 基本订单</div>
              <div className="mt-1 text-xs text-text_color_2 lg:max-w-[484px]">含：LO、MO</div>
            </div>,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
          [
            <div key="long-shares">
              <div>长期单</div>
              <div className="mt-1 text-xs text-text_color_2 lg:max-w-[484px]">含：GTD、GTC、FOK、IOC</div>
            </div>,
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
          [
            <div key="long-shares">
              <div>条件订单</div>
              <div className="mt-1 text-xs text-text_color_2 lg:max-w-[484px]">
                含：到价买入、到价卖出、反弹买入、回落卖出
              </div>
            </div>,
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
          [
            '篮子订单',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <RightIcon key="icon" />,
          ],
          [
            '网格订单',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <RightIcon key="icon" />,
          ],
          [
            <div key="long-shares">
              <div>策略订单（金纳算法）</div>
              <div className="mt-1 text-xs text-text_color_2 lg:max-w-[484px]">含：TWAP、VWAP</div>
            </div>,
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
        ],
      },
      {
        label: '订阅升级',
        value: [
          [
            '已订阅产品的核心功能保障持续升级迭代',
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
        ],
      },
    ],
  }

  const table_2 = {
    heads: [
      { title: '产品功能' },
      { title: '标准版', light: true },
      { title: '专业版', light: true },
      { title: '旗舰版', light: true },
    ],

    body: [
      {
        label: '交易面板',
        value: [
          [
            <div key="base">
              <div>基础功能</div>
              <div className="mt-1 text-xs text-text_color_2 lg:max-w-[484px]">
                含：市场、个股、自选、查看客户资料、委托下单、查看持仓
              </div>
            </div>,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
          [
            <div key="special">
              <div>EP 专属港交所功能</div>
              <div className="mt-1 text-xs text-text_color_2 lg:max-w-[484px]">含：人手单、批量撤单、碎股撮合</div>
            </div>,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
        ],
      },
      {
        label: '交易管理',
        value: [
          ['成交补单', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
          ['成交分配', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
          ['订单批核', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
        ],
      },
      {
        label: '基金管理',
        value: [
          [
            '基金详情',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
          [
            '基金交易',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
        ],
      },
      {
        label: '新股 IPO',
        value: [
          ['新股详情', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
          ['新股认购', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
        ],
      },
      {
        label: '风控管理',
        value: [
          ['证券限制', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
          ['Margin Call', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
        ],
      },
      {
        label: '调账功能',
        value: [
          ['调账查询', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
          ['调账清算', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
        ],
      },
    ],
  }
  const table_3 = {
    heads: [
      { title: '产品功能' },
      { title: '标准版', light: true },
      { title: '专业版', light: true },
      { title: '旗舰版', light: true },
    ],

    body: [
      {
        label: '账户管理系统',
        value: [
          ['账户信息管理及 KYC 审核', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
          ['柜台开户', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
          [
            '线上开户及标准流程配置',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,

            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
          [
            '客户持续监察及 CDD 自动年检',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,

            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
        ],
      },
      {
        label: 'IPO 系统',
        value: [
          ['港股 IPO 资料管理', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
          ['港股 IPO 认购配售', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
          ['单一融资渠道配置', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
          [
            '美股 IPO 资料管理',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
          [
            '美股 IPO 认购配售',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
          [
            '全额融资认购',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
          [
            '多融资渠道配置',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <span key="line-2" className="text-text_color_3">
              －
            </span>,
            <RightIcon key="icon" />,
          ],
          [
            'IPO 认购通道外接服务',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <span key="line-2" className="text-text_color_3">
              －
            </span>,
            <RightIcon key="icon" />,
          ],
        ],
      },
      {
        label: '出入金及资产管理系统',
        value: [
          ['7*24 小时服务能力', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
          ['网上转账', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
          ['FPS 转账', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
          ['支票', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
          ['ATM 机', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
          ['现金', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
          ['手工换汇', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
          ['跨境电子汇款 TT', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
          // autocorrect: false
          [
            'eDDA、sDDA',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <span key="line-2" className="text-sm text-text_color_1_supplement">
              支持 1 eDDA
            </span>,
            <span key="line-2" className="text-sm text-text_color_1_supplement">
              支持 2 eDDA
            </span>,
          ],
          // autocorrect: true
          [
            '实时银证转账平台',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <span key="line-2" className="text-sm text-text_color_1_supplement">
              支持 1 银证
            </span>,
            <span key="line-2" className="text-sm text-text_color_1_supplement">
              支持 2 银证
            </span>,
          ],
          [
            '银行账单批量配对',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
          [
            '实时换汇',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
          [
            '换汇对接银行 API',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
        ],
      },
      {
        label: '基金系统',
        value: [
          [
            '基金产品管理，上下架',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
          [
            '风险评估',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
          [
            '手工调账',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
          [
            '基金认购赎回系统处理流程',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
        ],
      },
      {
        label: 'OTC 系统',
        value: [
          ['OTC 产品管理', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
          ['风险评估', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
          ['手工调账', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
          [
            'OTC 产品系统交易后端处理流程',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
        ],
      },
      {
        label: '风控系统',
        value: [
          ['交易限额', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
          ['压力测试及风控报表', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
          ['统一风控 Margin Call 监测', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
          ['手动平仓', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
          ['手动授信，融资额度管理', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
          [
            <div key="base">
              <div>指数管理</div>
              <div className="mt-1 text-xs text-text_color_2 lg:max-w-[484px]">含：成份股管理、haircut 管理</div>
            </div>,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
          [
            <div key="base">
              <div>风控参数设置</div>
              <div className="mt-1 text-xs text-text_color_2 lg:max-w-[484px]">含：风控大盘监控</div>
            </div>,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
          [
            '批量平仓',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
          [
            '自动授信，融资额度管理批量平仓自动授信，融资额度管理',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <RightIcon key="icon" />,
          ],
          [
            '期权风控',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <RightIcon key="icon" />,
          ],
          [
            '自动平仓',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <RightIcon key="icon" />,
          ],
          [
            '风险分组计算',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <RightIcon key="icon" />,
          ],
          [
            'Margin Call 语音通知',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <RightIcon key="icon" />,
          ],
          [
            'Margin Call 策略回测功能',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <RightIcon key="icon" />,
          ],
        ],
      },
    ],
  }

  const table_4 = {
    heads: [
      { title: '产品功能' },
      { title: '标准版', light: true },
      { title: '专业版', light: true },
      { title: '旗舰版', light: true },
    ],

    body: [
      {
        label: '公司行动系统',
        value: [
          ['港股常见公司行动', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
          ['美股常见公司行动', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
          ['中华通 A 股常见公司行动', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
          [
            '线上公司行动 - App 选股选息',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
          [
            '线上公司行动 - App 供股',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
          [
            <div key="base">
              <div>公司行动通知</div>
              <div className="mt-1 text-xs text-text_color_2 lg:max-w-[484px]">含：结单、App、SMS、Email</div>
            </div>,
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
        ],
      },
      {
        label: '会计中台',
        value: [
          ['科目属性', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
          ['会计科目', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
          ['分录规则', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
          ['会计分录、明细账', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
          [
            <div key="base">
              <div>记账数据源</div>
              <div className="mt-1 text-xs text-text_color_2 lg:max-w-[484px]">含：支付流水、银行流水、人工录入</div>
            </div>,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
          [
            '银行余额自动查询',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
          ['财务报表导出', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
        ],
      },
      {
        label: '清算系统',
        value: [
          ['基础计费管理', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
          ['市场管理', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
          ['日终任务', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
          ['对账', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
          ['结单管理', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
          ['仓位管理', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
          ['一键清算', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
          ['经纪分佣', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
          [
            '阶梯计费',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
        ],
      },
      {
        label: '报表',
        value: [
          ['各类业务报表', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
          ['报表批量打印', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
        ],
      },
      {
        label: '系统用户管理',
        value: [
          ['权限管理', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
          ['管理员管理', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
          ['角色管理', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
          ['系统操作日志', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
          ['审批流程', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />],
        ],
      },
      {
        label: '监管升级服务',
        value: [['HKEX、SFC 监管改动', <RightIcon key="icon" />, <RightIcon key="icon" />, <RightIcon key="icon" />]],
      },
    ],
  }

  return (
    <Layout>
      <SEOMeta indexTitle={true} title={seoI18n.t('tdk.title')} description={seoI18n.t('tdk.description')} />
      <div>
        <Banner {...banner_props}></Banner>
        <Box>
          <>
            <Title label="证券交易能力" title="丰富的市场和品种覆盖、全面的订单交易能力" />
            <InfoIntroduce
              className="my-8"
              descClass="text-sm text-text_color_1"
              data={[
                {
                  icon: 'https://assets.lbkrs.com/uploads/f0e49593-38c7-406d-92d0-896525a4ee64/i3.png',
                  title: '连接环球市场',
                  description:
                    '支持港美 A 新加坡四个市场的常见交易标的，包括各场内的股票、场内外 ETF 、股票、债券交易、窝轮、牛熊证、界内证、美股期权及OTC 股票交易等',
                },
                {
                  icon: 'https://assets.lbkrs.com/uploads/d9974d44-b1a3-4398-9aa6-230c56497f6e/i1.png',
                  iconClass: 'w-9 h-auto',
                  title: '完整的基础订单',
                  description:
                    '覆盖交易所支持的各类包括竞价、限价等基础订单类型，提供自研市价单及常用的止盈止损条件订单，可设定 GTD/GTC 长期单及非交易时段预埋单',
                },
                {
                  icon: 'https://assets.lbkrs.com/uploads/110536eb-7663-459c-a47a-b10a16a47e46/i2.png',
                  iconClass: 'w-9 h-auto',
                  title: '专业的交易策略',
                  description:
                    '面对专业交易人员的复杂策略场景，Whale 还提供了包括算法订单如 TWAP/VWAP、网格订单、篮子订单在内的多种交易策略，充分满足策略交易需求',
                },
              ]}
            />
            <Table data={table_1} thColSpan={1} />
            <div className="flex pt-4 text-text_color_2 gap-x-1">
              <span>*</span>
              <div className="max-w-[780px] text-xs">
                <div className="font-medium">Whale 证券柜台解决方案面向客户提供三种版本：标准版、专业版、旗舰版</div>
                标准版：基本的美港 A 股交易能力 ｜ 专业版：现代化的证券交易能力 ｜
                旗舰版：具有互联网营销、机构服务能力的合作伙伴
              </div>
            </div>
          </>
        </Box>
        <Box className="bg-bg_color_2">
          <>
            <Title label="证券交易前台 (WhaleTradeTerminal)" title="专业的交易前台系统" />
            <ImageAndText {...content_banner_props} />
            <Table data={table_2} thColSpan={1} />
          </>
        </Box>
        <Box>
          <>
            <Title label="证券交易中台" title="便捷的证券交易中台" />
            <ImageAndText {...content_banner_props_2} />
            <Table data={table_3} thColSpan={1} />
          </>
        </Box>
        <Box>
          <>
            <Title label="证券交易后台" title="稳定高效的证券交易后台" />
            <ImageAndText {...content_banner_props_3} />
            <Table data={table_4} thColSpan={1} />
          </>
        </Box>
        <WhaleOfficialFooter />
      </div>
    </Layout>
  )
}

export default SecuritiesMarket
