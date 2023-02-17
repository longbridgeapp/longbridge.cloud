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
      'en': 'https://assets.lbkrs.com/uploads/933aac3f-2728-4338-8148-9effdb0b503b/banner.png',
      'zh-CN': 'https://assets.lbkrs.com/uploads/933aac3f-2728-4338-8148-9effdb0b503b/banner.png',
      'zh-HK': 'https://assets.lbkrs.com/uploads/933aac3f-2728-4338-8148-9effdb0b503b/banner.png',
    },
  }
  const content_banner_props = {
    title: '资讯社区服务',
    desc: [
      '提供「互联网 App+」解决方案，接入实时行情、资讯，营销服务，助力零售经济商快速拓客展业。通过进行简单权益配置即可深入客户场景，轻松触达每一位客户，并结合创意生动、引人入胜的营销活动，快速找到目标客户，持续不断的赢得新客户、激发老客户，完成高效的运营转化',
    ],
    img: {
      'en': 'https://assets.lbkrs.com/uploads/b5b87228-6917-455e-b44e-af25af5fed8f/1.png',
      'zh-CN': 'https://assets.lbkrs.com/uploads/b5b87228-6917-455e-b44e-af25af5fed8f/1.png',
      'zh-HK': 'https://assets.lbkrs.com/uploads/b5b87228-6917-455e-b44e-af25af5fed8f/1.png',
    },
  }
  const content_banner_props_2 = {
    title: '客户营销',
    desc: [
      '提供完整的营销服务，持续不断推出更实用的营销产品模式，为证券业务进行赋能，是传统金融业务数字化转型必不可少的市场工具。更多样化营销工具，解决券商营销过程中的「营销难、开发慢、难管理、成本高」问题',
    ],
    img: {
      'en': 'https://assets.lbkrs.com/uploads/36406d45-4586-49e2-92a8-31fce7d6618e/2.png',
      'zh-CN': 'https://assets.lbkrs.com/uploads/36406d45-4586-49e2-92a8-31fce7d6618e/2.png',
      'zh-HK': 'https://assets.lbkrs.com/uploads/36406d45-4586-49e2-92a8-31fce7d6618e/2.png',
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
        value: [['风格制定', false, true, true, true]],
      },
      {
        label: '内容服务',
        value: [
          [
            '股票数据服务',
            true,
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
          ['咨询社区', true, true, true, true],
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
            true,
            true,
            true,
          ],
          ['客户营销', false, true, true, true],
        ],
      },
    ],
    colRatio: [15, 17, 17, 17, 17, 17],
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
          ['港股', true, true, true, true],
          ['美股', true, true, true, true],
          ['A 股', true, true, true, true],
        ],
      },
      {
        label: '内容服务',
        value: [
          ['香港市场「标准版」', true, true, false, false],
          ['香港市场「高级版」', true, false, true, true],
          ['美国市场「高级版」', true, false, true, true],
          ['沪深市场「标准版」', true, true, true, true],
        ],
      },
      {
        label: '营销服务',
        value: [
          ['港股延迟 15 min', true, true, true, true],
          ['港股 BMP 行情', true, true, true, true],
          ['美股延迟 15 min', true, true, true, true],
          [
            '美股 L1 Nasdaq Basic 实时',
            true,
            <span key="line-1" className="text-sm text-text_color_1">
              用户需从行情商店购买
            </span>,
            ,
            true,
            true,
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
            true,
            true,
            true,
            true,
          ],
        ],
      },
    ],
    colRatio: [14, 18, 17, 17, 17, 17],
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
          ['日常推送及运营', true, true, true, true],
          ['长桥资讯', true, true, true, true],
          ['海豚投研', true, true, true, true],
          [
            '华尔街见闻',
            true,
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
            true,
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
          ['KOL 精选文章', true, true, true, true],
          ['日常内容运营及审核', true, true, true, true],
          ['热点话题', true, true, true, true],
        ],
      },
    ],
    colRatio: [14, 18, 17, 17, 17, 17],
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
          ['客户关系', false, true, true, true],
          [
            <div key="client">
              <div>客户系统</div>
              <div className="mt-1 text-xs text-text_color_2">第三方服务</div>
            </div>,
            false,
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
          ['帮助系统', true, true, true, true],
        ],
      },
    ],
    colRatio: [14, 18, 17, 17, 17, 17],
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
          ['基础运营计划', false, true, true, true],
          ['智能运营计划', false, false, false, true],
          ['基础通道管理', false, true, true, true],
          ['全通道管理', false, false, true, true],
          ['基础用户分群', false, true, true, true],
          ['规则用户分群', false, false, false, true],
        ],
      },
      {
        label: '权益系统',
        value: [
          ['行情商店', true, true, true, true],
          ['发奖与奖励管理', false, true, true, true],
          ['行情卡券', false, true, true, true],
          ['股票现金卡券', false, false, true, true],
          ['平台费融资卡券', false, false, false, true],
        ],
      },
      {
        label: '活动系统',
        value: [
          ['开户入金活动', false, false, true, true],
          ['邀请组队活动', false, false, false, true],
        ],
      },
      {
        label: 'PageHub',
        value: [
          ['静态页面搭建', false, false, true, true],
          ['活动页面搭建', false, false, true, true],
          [
            '定制化页面模版',
            false,
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
    colRatio: [14, 18, 17, 17, 17, 17],
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
                  icon: 'https://assets.lbkrs.com/uploads/8a5b1aab-d6e7-4f5a-8460-52e1e1a51494/vote.png',
                  title: '微服务架构',
                  description: '所有服务独立化部署，保证数据安全及交付质量，持续使用更前沿的技术帮助券商互联网转型',
                },
                {
                  icon: 'https://assets.lbkrs.com/uploads/edce61fc-26a5-4883-8e44-ed962d901c88/delay.png',
                  title: '快捷配置交付',
                  description: '通过配置平台进行功能配置、快捷交付，缩减了打包开发时间，更快的助您展业',
                },
                {
                  icon: 'https://assets.lbkrs.com/uploads/45105937-bc35-485f-ba65-e643946d6e63/circle_laugh.png',
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
