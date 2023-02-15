import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { i18nPaths } from '@/utils/i18n-paths'
import i18nextConfig from '@/next-i18next.config'
import { SEOMeta } from '@/utils/seo'
import { Layout } from '@/features/common/page-layout'
import Banner from '@/features/product/Banner'
import PageDivide from '@/features/solutions/page-divide'
import InfoIntroduce, { ImageAndText } from '@/features/solutions/info-introduce'
import Compare from '@/components/compare'
import Table from '@/components/table'
import Box from '@/features/product/Box'
import Title from '@/features/product/title'

export const getStaticPaths = () => ({
  fallback: false,
  paths: i18nPaths(),
})
export const getStaticProps = async (ctx: any) => ({
  props: {
    // @ts-ignore
    ...(await serverSideTranslations(ctx?.params?.locale, ['common', 'seo'], i18nextConfig)),
  },
})

const RightIcon = () => {
  return (
    <img
      src="https://assets.lbkrs.com/uploads/1e54e225-a8f6-42e5-af0a-eb2410a4f8be/vector.png"
      alt=""
      className="w-4"
    />
  )
}
const AppPlusPage = () => {
  const seoI18n = useTranslation(['seo'])
  const i18n = useTranslation('common')

  const banner_props = {
    title: '互联网 App + 解决方案',
    desc: [
      '提供「互联网 App+」解决方案，接入实时行情、资讯，营销服务，助力零售经济商快速拓客展业。通过进行简单权益配置即可深入客户场景，轻松触达每一位客户，并结合创意生动、引人入胜的营销活动，快速找到目标客户，持续不断的赢得新客户、激发老客户，完成高效的运营转化',
    ],
    img: {
      'en': 'https://assets.lbkrs.com/uploads/1c7e213c-f09d-48de-a531-4a4e3b7d7b2f/app-plus-banner-cn.png',
      'zh-CN': 'https://assets.lbkrs.com/uploads/1c7e213c-f09d-48de-a531-4a4e3b7d7b2f/app-plus-banner-cn.png',
      'zh-HK': 'https://assets.lbkrs.com/uploads/1c7e213c-f09d-48de-a531-4a4e3b7d7b2f/app-plus-banner-cn.png',
    },
  }
  const content_banner_props = {
    title: '资讯社区服务',
    desc: [
      '提供「互联网 App+」解决方案，接入实时行情、资讯，营销服务，助力零售经济商快速拓客展业。通过进行简单权益配置即可深入客户场景，轻松触达每一位客户，并结合创意生动、引人入胜的营销活动，快速找到目标客户，持续不断的赢得新客户、激发老客户，完成高效的运营转化',
    ],
    img: {
      'en': 'https://assets.lbkrs.com/uploads/c99f03c1-40ad-47e5-9e15-4ae13ca2e0e9/content-img.png',
      'zh-CN': 'https://assets.lbkrs.com/uploads/c99f03c1-40ad-47e5-9e15-4ae13ca2e0e9/content-img.png',
      'zh-HK': 'https://assets.lbkrs.com/uploads/c99f03c1-40ad-47e5-9e15-4ae13ca2e0e9/content-img.png',
    },
  }

  const compareList = [
    {
      title: 'LongPort',
      description: '公共品牌的证券交易系统，支持不同券商入驻，可实现即开即用，开户成功即可进行交易',
      subTitle: '适用客户',
      subList: ['快速入驻公共品牌，更快、更易开展证券业务', '轻量、低成本的开展券商业务'],
    },
    {
      title: 'White Label',
      description: '可做定制化开发，支持功能独立、规模化运营，助力经纪商打造独立品牌',
      subTitle: '适用客户',
      subList: ['具有独立规模化运营、营销需求', '需打造独立终端品牌，对立视觉体系', '具有特色功能定制开发需求'],
    },
  ]

  const table_1 = {
    heads: [
      { title: 'LongPort', subTitle: '月活用户不限量' },
      { title: 'White Label 标准版', subTitle: '免费 1,000 月活用户', light: true },
      { title: 'White Label 专业版', subTitle: '免费 5,000 月活用户', light: true },
      { title: 'White Label 旗舰版', subTitle: '月活用户不限量', light: true },
    ],
    body: [
      {
        label: '零售终端',
        value: [
          [
            '风格制定',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
        ],
      },
      {
        label: '内容服务',
        value: [
          [
            '股票数据服务',
            <RightIcon key="icon" />,
            <span key="line-1" className="text-text_color_1">
              支持港/沪深行情及基本面
            </span>,
            <span key="line-1" className="text-text_color_1">
              支持三大市场行情及基本面
            </span>,
            <span key="line-1" className="text-text_color_1">
              支持三大市场行情及基本面
            </span>,
          ],
          [
            '咨询社区',
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
        ],
      },
      {
        label: '营销服务',
        value: [
          [
            '客户管理',
            <span key="line-1" className="text-sm text-text_color_1">
              部分支持
            </span>,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
          [
            '客户营销',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
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
      { title: 'LongPort', subTitle: '月活用户不限量' },
      { title: 'White Label 标准版', subTitle: '免费 1,000 月活用户', light: true },
      { title: 'White Label 专业版', subTitle: '免费 5,000 月活用户', light: true },
      { title: 'White Label 旗舰版', subTitle: '月活用户不限量', light: true },
    ],
    body: [
      {
        label: '零售终端',
        value: [
          [
            '港股',
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
          [
            '美股',
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
          [
            'A 股',
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
        ],
      },
      {
        label: '内容服务',
        value: [
          [
            '香港市场「标准版」',
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <span key="line-2" className="text-text_color_3">
              －
            </span>,
          ],
          [
            '香港市场「高级版」',
            <RightIcon key="icon" />,
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
          [
            '美国市场「高级版」',
            <RightIcon key="icon" />,
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
          [
            '沪深市场「标准版」',
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
        ],
      },
      {
        label: '营销服务',
        value: [
          [
            '港股延迟 15 min',
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
          [
            '港股 BMP 行情',
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
          [
            '美股延迟 15 min',
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
          [
            '美股 L1 Nasdaq Basic 实时',
            <RightIcon key="icon" />,
            <span key="line-1" className="text-sm text-text_color_1">
              用户需从行情商店购买
            </span>,
            ,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
          [
            'OPRA 期权实时行情',
            <span key="line-1" className="text-sm text-text_color_1">
              按需采购
            </span>,
            <span key="line-2" className="text-sm text-text_color_1">
              按需采购
            </span>,
            <span key="line-3" className="text-sm text-text_color_1">
              按需采购
            </span>,
            <span key="line-4" className="text-sm text-text_color_1">
              按需采购
            </span>,
          ],
          [
            <div key="a-shares">
              <div>A 股中华通 L1 实时行情</div>
              <div className="mt-1 text-xs text-text_color_2">适用于 CCEP / TTEP 客户</div>
            </div>,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
        ],
      },
    ],
  }
  // TODO: 待调整文案
  const table_3 = {
    heads: [
      { title: 'LongPort', subTitle: '月活用户不限量' },
      { title: 'White Label 标准版', subTitle: '免费 1,000 月活用户', light: true },
      { title: 'White Label 专业版', subTitle: '免费 5,000 月活用户', light: true },
      { title: 'White Label 旗舰版', subTitle: '月活用户不限量', light: true },
    ],
    body: [
      {
        label: '零售终端',
        value: [
          [
            '风格制定',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
        ],
      },
      {
        label: '内容服务',
        value: [
          [
            '股票数据服务',
            <RightIcon key="icon" />,
            <span key="line-1" className="text-text_color_1">
              支持港/沪深行情及基本面
            </span>,
            <span key="line-1" className="text-text_color_1">
              支持三大市场行情及基本面
            </span>,
            <span key="line-1" className="text-text_color_1">
              支持三大市场行情及基本面
            </span>,
          ],
          [
            '咨询社区',
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
        ],
      },
      {
        label: '营销服务',
        value: [
          [
            '客户管理',
            <span key="line-1" className="text-sm text-text_color_1">
              部分支持
            </span>,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
          [
            '客户营销',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
        ],
      },
    ],
  }
  return (
    <Layout>
      <SEOMeta title={seoI18n.t('solutions-app.title')} description={seoI18n.t('solutions-app.description')} />
      <Banner {...banner_props}></Banner>
      <Box>
        <>
          <Title label="互联网 App + 解决方案" title="助力零售经纪商快速展业，轻松赢得增长转化"></Title>
          <Compare className="my-10" compareId="app-plus" list={compareList} />
          <Table data={table_1} />
          <div className="flex pt-4 text-text_color_2 gap-x-1">
            <span>*</span>
            <div className="max-w-[780px] text-xs">
              <div className="font-medium">White Label 产品体系面向客户提供三种版本：标准版、专业版、旗舰版</div>
              标准版：港美 A 市场基本交易服务 ｜专业版：满足现代化的证券交易服务 ｜ 旗舰版：具备规模化运营营销需求
            </div>
          </div>
        </>
      </Box>
      <PageDivide
        cover="https://assets.lbkrs.com/uploads/bc367324-4518-4be4-91fd-c17921a43a8f/divide-1.png"
        subTitle="一站式数据及内容服务"
        title="内容服务"
      />
      <Box>
        <>
          <Title title="股票数据服务"></Title>
          <InfoIntroduce
            className="my-8"
            data={[
              {
                title: '行情授权',
                description: '一站式解决行情授权问题，数据覆盖面广，评级全面且独立',
              },
              {
                title: '稳定行情',
                description: '提供香港、美国、A股，三大核心市场实时行情、延迟行情及BMP行情',
              },
              {
                title: '衍生功能',
                description: '更丰富全面的证券基本面数据，开放机构观点、估值分析、股价趋势、智能选股等特色功能',
              },
            ]}
          />
          <Table data={table_2} />
          <ImageAndText {...content_banner_props} />
          <Table data={table_3} />
        </>
      </Box>
      <PageDivide
        cover="https://assets.lbkrs.com/uploads/bc367324-4518-4be4-91fd-c17921a43a8f/divide-1.png"
        subTitle="致力于为证券业务进行赋能"
        title="营销服务"
      />
    </Layout>
  )
}
export default AppPlusPage
