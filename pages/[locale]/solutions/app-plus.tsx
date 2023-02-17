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
import RightIcon from '@/components/right-icon'
import Box from '@/features/product/Box'
import Title from '@/features/product/title'
import WhaleOfficialFooter from '@/features/whale-official/footer'

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
  const content_banner_props_2 = {
    title: '客户营销',
    desc: [
      '提供完整的营销服务，持续不断推出更实用的营销产品模式，为证券业务进行赋能，是传统金融业务数字化转型必不可少的市场工具。更多样化营销工具，解决券商营销过程中的「营销难、开发慢、难管理、成本高」问题',
    ],
    img: {
      'en': 'https://assets.lbkrs.com/uploads/77a723fc-8a14-47e5-9c8c-45fdddeafad7/content-img-22.png',
      'zh-CN': 'https://assets.lbkrs.com/uploads/77a723fc-8a14-47e5-9c8c-45fdddeafad7/content-img-22.png',
      'zh-HK': 'https://assets.lbkrs.com/uploads/77a723fc-8a14-47e5-9c8c-45fdddeafad7/content-img-22.png',
    },
  }
  const content_banner_props_3 = {
    title: '支持功能定制开发',
    desc: ['具备行业运营经验的产品 + 专业的技术开发团队，全程为您服务，若您还在考虑功能，大可放心交给 Whale'],
    img: {
      'en': 'https://assets.lbkrs.com/uploads/df49d156-cbbe-4489-b77a-585ba7d763fe/content-img-3.png',
      'zh-CN': 'https://assets.lbkrs.com/uploads/df49d156-cbbe-4489-b77a-585ba7d763fe/content-img-3.png',
      'zh-HK': 'https://assets.lbkrs.com/uploads/df49d156-cbbe-4489-b77a-585ba7d763fe/content-img-3.png',
    },
    needTalk: false,
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
  const table_3 = {
    heads: [
      { title: 'LongPort', subTitle: '月活用户不限量' },
      { title: 'White Label 标准版', subTitle: '免费 1,000 月活用户', light: true },
      { title: 'White Label 专业版', subTitle: '免费 5,000 月活用户', light: true },
      { title: 'White Label 旗舰版', subTitle: '月活用户不限量', light: true },
    ],
    body: [
      {
        label: '资讯服务',
        value: [
          [
            '日常推送及运营',
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
          [
            '长桥资讯',
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
          [
            '海豚投研',
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
          [
            '华尔街见闻',
            <RightIcon key="icon" />,
            <span key="line-1" className="text-sm text-text_color_1">
              按需采购
            </span>,
            <span key="line-1" className="text-sm text-text_color_1">
              按需采购
            </span>,
            <span key="line-1" className="text-sm text-text_color_1">
              按需采购
            </span>,
          ],
          [
            '智通财经',
            <RightIcon key="icon" />,
            <span key="line-1" className="text-sm text-text_color_1">
              按需采购
            </span>,
            <span key="line-1" className="text-sm text-text_color_1">
              按需采购
            </span>,
            <span key="line-1" className="text-sm text-text_color_1">
              按需采购
            </span>,
          ],
        ],
      },
      {
        label: '社区服务',
        value: [
          [
            'KOL 精选文章',
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
          [
            '日常内容运营及审核',
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
          [
            '热点话题',
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
        ],
      },
    ],
  }
  const table_4 = {
    heads: [
      { title: 'LongPort', subTitle: '月活用户不限量' },
      { title: 'White Label 标准版', subTitle: '免费 1,000 月活用户', light: true },
      { title: 'White Label 专业版', subTitle: '免费 5,000 月活用户', light: true },
      { title: 'White Label 旗舰版', subTitle: '月活用户不限量', light: true },
    ],
    body: [
      {
        label: '客户管理',
        value: [
          [
            '客户关系',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
          [
            <div key="client">
              <div>客户系统</div>
              <div className="mt-1 text-xs text-text_color_2">第三方服务</div>
            </div>,
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <span key="line-1" className="text-sm text-text_color_1">
              按需采购
            </span>,
            <span key="line-1" className="text-sm text-text_color_1">
              按需采购
            </span>,
            <span key="line-1" className="text-sm text-text_color_1">
              按需采购
            </span>,
          ],
          [
            '帮助系统',
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
        ],
      },
    ],
  }
  const table_5 = {
    heads: [
      { title: 'LongPort', subTitle: '月活用户不限量' },
      { title: 'White Label 标准版', subTitle: '免费 1,000 月活用户', light: true },
      { title: 'White Label 专业版', subTitle: '免费 5,000 月活用户', light: true },
      { title: 'White Label 旗舰版', subTitle: '月活用户不限量', light: true },
    ],
    body: [
      {
        label: '投放系统',
        value: [
          [
            '基础运营计划',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
          [
            '智能运营计划',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <RightIcon key="icon" />,
          ],
          [
            '基础通道管理',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
          [
            '全通道管理',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
          [
            '基础用户分群',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
          [
            '规则用户分群',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
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
      {
        label: '权益系统',
        value: [
          [
            '行情商店',
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
          [
            '发奖与奖励管理',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
          [
            '行情卡券',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
          [
            '股票现金卡券',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <span key="line-2" className="text-text_color_3">
              －
            </span>,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
          [
            '平台费融资卡券',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <span key="line-2" className="text-text_color_3">
              －
            </span>,
            <span key="line-3" className="text-text_color_3">
              －
            </span>,
            <RightIcon key="icon" />,
          ],
        ],
      },
      {
        label: '活动系统',
        value: [
          [
            '开户入金活动',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <span key="line-2" className="text-text_color_3">
              －
            </span>,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
          [
            '邀请组队活动',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <span key="line-2" className="text-text_color_3">
              －
            </span>,
            <span key="line-3" className="text-text_color_3">
              －
            </span>,
            <RightIcon key="icon" />,
          ],
        ],
      },
      {
        label: 'PageHub',
        value: [
          [
            '静态页面搭建',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <span key="line-2" className="text-text_color_3">
              －
            </span>,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
          [
            '活动页面搭建',
            <span key="line-1" className="text-text_color_3">
              －
            </span>,
            <span key="line-2" className="text-text_color_3">
              －
            </span>,
            <RightIcon key="icon" />,
            <RightIcon key="icon" />,
          ],
          [
            '定制化页面模版',
            <span key="line-1" className="text-text_color_3">
              －
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
        ],
      },
    ],
  }
  return (
    <Layout>
      <SEOMeta title={seoI18n.t('solutions-app.title')} description={seoI18n.t('solutions-app.description')} />
      <div>
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
          cover="https://assets.lbkrs.com/uploads/14a70dd4-5460-4fce-9011-8005e18f3127/content-service.png"
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
          cover="https://assets.lbkrs.com/uploads/7e4af769-fe55-44af-a67a-5b9470dba92d/sale-service.png"
          subTitle="致力于为证券业务进行赋能"
          title="营销服务"
        />
        <Box>
          <>
            <Title title="客户管理"></Title>
            <InfoIntroduce
              className="my-8"
              data={[
                {
                  title: '精准定位',
                  description: '利用专业工具帮助您真正了解客户需求，更便捷的寻找并定位到最有价值的客户',
                },
                {
                  title: '高效转化',
                  description: '高效完成客户转化、客户关系维护，节约更多客户维护人工成本',
                },
                {
                  title: '帮助系统',
                  description: '释放证券业务相关知识库，使新手用户更快了解券商业务及平台运营活动功能',
                },
              ]}
            />
            <Table data={table_4} />
            <ImageAndText {...content_banner_props_2} />
            <Table data={table_5} />
          </>
        </Box>
        <Box className="bg-bg_color_2">
          <>
            <Title title="解决方案在科技行业内的优势" label="方案优势"></Title>
            <InfoIntroduce
              className="mt-8"
              descClass="text-sm text-text_color_1"
              data={[
                {
                  icon: 'https://assets.lbkrs.com/uploads/e24d2596-f9a6-4e04-b40f-96e2deebdf50/Union.png',
                  title: '微服务架构',
                  description: '所有服务独立化部署，保证数据安全及交付质量，持续使用更前沿的技术帮助券商互联网转型',
                },
                {
                  icon: 'https://assets.lbkrs.com/uploads/bb7f2c40-3150-415e-aa9b-60afab49d83b/Vector.png',
                  title: '快捷配置交付',
                  description: '通过配置平台进行功能配置、快捷交付，缩减了打包开发时间，更快的助您展业',
                },
                {
                  icon: 'https://assets.lbkrs.com/uploads/17e900f6-73dc-4523-98df-329cba06d834/Union (1).png',
                  title: '运营营销服务',
                  description: '快捷接入运营营销服务，通过多种投放通道为经纪商的互联网转型带来更精准用户触达',
                },
              ]}
            />
          </>
        </Box>
        <Box>
          <ImageAndText {...content_banner_props_3} />
        </Box>
        <WhaleOfficialFooter />
      </div>
    </Layout>
  )
}
export default AppPlusPage
