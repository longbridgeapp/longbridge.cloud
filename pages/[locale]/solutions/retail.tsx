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

const Retail: React.FC = () => {
  const i18n = useTranslation('common')
  const seoI18n = useTranslation(['seo'])

  const banner_props = {
    title: '零售终端',
    desc: [
      '更简洁的操作界面，承载多样功能，致力于为用户提供更优的交易体验。以「发现 → 认知 → 交易」为基础，结合大量的结构化数据，支持搭建更多样化的选股工具，降低用户认知和投资交易的门槛。支持多种终端：Mobile、Pad、Desktop、Web',
    ],
    img: {
      'en': 'https://assets.lbkrs.com/uploads/8ae1d3ce-6ae4-4fa7-bda1-9ada3196354c/retail-banner.png',
      'zh-CN': 'https://assets.lbkrs.com/uploads/8ae1d3ce-6ae4-4fa7-bda1-9ada3196354c/retail-banner.png',
      'zh-HK': 'https://assets.lbkrs.com/uploads/8ae1d3ce-6ae4-4fa7-bda1-9ada3196354c/retail-banner.png',
    },
  }

  const compareList = [
    {
      title: 'LongPort',
      description: '公共品牌的证券交易系统，开户成功即可进行交易',
      subTitle: '产品特点',
      subList: [
        '公共品牌交易系统，社区活跃，无需投入运营人力资源',
        '社区内容丰富，无需授权即可使用各类直播学堂',
        '华尔街见闻、智通财经专业平台新闻资讯，免费开放',
        '低成本快速上线，即开即用',
        '无需承担额外技术资源成本，即可快速获客',
      ],
      thirdTitle: '已支持的终端',
      thirdDescription: 'Mobile, Pad, Web',
    },
    {
      title: 'White Label',
      description: '独立运营，助力经纪商打造独立品牌的终端产品',
      subTitle: '产品特点',
      subList: [
        '支持更换视觉样式，打造独立终端品牌',
        '支持功能定制化，满足经纪商多种功能需求',
        '支持接入营销活动中台，实现线上营销，拥有独立流量圈',
        '支持桌面端交易，更直观进行资产管理',
        '支持多终端同时在线',
      ],
      thirdTitle: '已支持的终端',
      thirdDescription: 'Mobile, Pad, Desktop, Web',
    },
  ]

  const content_banner_props = {
    title: '看清基本面，投研更简单',
    subTitle: '全景 View：长桥特色功能',
    desc: [
      {
        icon: 'https://assets.lbkrs.com/uploads/b61dd812-e2fb-4043-9dc1-caec5464e4e8/i3.png',
        text: '结合多方数据资源，对标的进行综合评估',
      },
      {
        icon: 'https://assets.lbkrs.com/uploads/1f23ea19-c31b-4a32-8bdb-3f0a32f06152/i1.png',
        text: '提供更全面的证券分析视角：机构观点、估值分析、股价趋势、供应链，全方面进行剖析',
      },
      {
        icon: 'https://assets.lbkrs.com/uploads/b7b610ed-a461-419a-b19f-72d394fdbbda/i2.png',
        text: '支持查看标的深度数据，包含关键因子及数据图表',
      },
    ],
    img: {
      'en': 'https://assets.lbkrs.com/uploads/278c5a76-d094-406b-a3c5-6a3aadb1079c/banner1.png',
      'zh-CN': 'https://assets.lbkrs.com/uploads/278c5a76-d094-406b-a3c5-6a3aadb1079c/banner1.png',
      'zh-HK': 'https://assets.lbkrs.com/uploads/278c5a76-d094-406b-a3c5-6a3aadb1079c/banner1.png',
    },
    needTalk: false,
  }
  const content_banner_props_2 = {
    title: '智能交易策略，缓解用户盯盘压力',
    subTitle: '交易多样：支持多种交易策略',
    desc: [
      {
        icon: 'https://assets.lbkrs.com/uploads/4bd95457-5d74-424e-a736-bbe01011b051/i3.png',
        text: '支持设定智能交易策略，进行止盈止损，缓解用户盯盘压力，更好的玩转交易',
      },
      {
        icon: 'https://assets.lbkrs.com/uploads/a7329109-54f9-4695-9855-8b716880e13b/i.png',
        text: '设定条件订单，系统监控下单',
      },
      {
        icon: 'https://assets.lbkrs.com/uploads/984b646a-ebdc-4267-97a4-66f75645da42/i2.png',
        text: '网格交易订单，帮助用户通过高抛低吸赚取波动收益',
      },
    ],
    img: {
      'en': 'https://assets.lbkrs.com/uploads/d7ba0b31-3490-4161-9085-bbc2e730cbcf/banner.png',
      'zh-CN': 'https://assets.lbkrs.com/uploads/d7ba0b31-3490-4161-9085-bbc2e730cbcf/banner.png',
      'zh-HK': 'https://assets.lbkrs.com/uploads/d7ba0b31-3490-4161-9085-bbc2e730cbcf/banner.png',
    },
    needTalk: false,
    reverse: false,
  }
  const content_banner_props_3 = {
    title: '投资者们的网上家园',
    subTitle: '社区论坛：话题不断，资讯不断',
    desc: [
      {
        icon: 'https://assets.lbkrs.com/uploads/6d601e5e-faa5-41eb-a99c-4b8d2b59af8e/i3.png',
        text: '严格的内容安全控制，引入 300+ 投资者意见领袖，提供高质量发言',
      },
      {
        icon: 'https://assets.lbkrs.com/uploads/90df8667-5827-4055-8751-f542a9985743/i1.png',
        text: '投资者们可在“动态”分区找到更多投资机会',
      },
      {
        icon: 'https://assets.lbkrs.com/uploads/1c048341-b568-4989-86d8-4fdb5d2ab2e1/i2.png',
        text: '实时资讯新闻，及时更新热榜，让投资者们更快更好的看到投资机会，把握投资风向',
      },
    ],
    img: {
      'en': 'https://assets.lbkrs.com/uploads/f6ecffff-4e51-4f0e-aeb4-fbc9f40b780a/banner.png',
      'zh-CN': 'https://assets.lbkrs.com/uploads/f6ecffff-4e51-4f0e-aeb4-fbc9f40b780a/banner.png',
      'zh-HK': 'https://assets.lbkrs.com/uploads/f6ecffff-4e51-4f0e-aeb4-fbc9f40b780a/banner.png',
    },
    needTalk: false,
  }
  const content_banner_props_4 = {
    title: '更多前沿特色功能：股票 VS、智能选股、持仓日报...',
    subTitle: '只要你需要，我们就可以',
    desc: [
      {
        icon: 'https://assets.lbkrs.com/uploads/352d4d80-73a6-4aee-b192-188ca835b300/i3.png',
        text: (
          <div>
            <span className="font-medium">股票 VS：</span>多只标的进行对比，帮助投资者挑选更适合的标的
          </div>
        ),
      },
      {
        icon: 'https://assets.lbkrs.com/uploads/ff03023b-7ab4-4f57-8072-32cb1e23750e/i1.png',
        text: (
          <div>
            <span className="font-medium">智能选股：</span>
            根据需要的指标筛选标的，快速进行股票筛选，更快促成交易
          </div>
        ),
      },
      {
        icon: 'https://assets.lbkrs.com/uploads/38af6b42-18fd-4029-91e3-32c9be8e1837/i2.png',
        text: (
          <div>
            <span className="font-medium">股单：</span>
            快速管理股票分组，可帮助投资者精准定位自己的意向标的，批量进行涨跌监控
          </div>
        ),
      },
    ],
    img: {
      'en': 'https://assets.lbkrs.com/uploads/46ba6579-ef04-4ade-baae-31fe099c62af/banner.png',
      'zh-CN': 'https://assets.lbkrs.com/uploads/46ba6579-ef04-4ade-baae-31fe099c62af/banner.png',
      'zh-HK': 'https://assets.lbkrs.com/uploads/46ba6579-ef04-4ade-baae-31fe099c62af/banner.png',
    },
    needTalk: false,
    reverse: false,
  }

  return (
    <Layout>
      <SEOMeta indexTitle={true} title={seoI18n.t('tdk.title')} description={seoI18n.t('tdk.description')} />
      <Banner {...banner_props}></Banner>
      <Box>
        <>
          <Title label="Whale 生态终端产品" title="面向零售经纪商提供多种终端" />
          <InfoIntroduce
            className="mt-8"
            descClass="text-sm text-text_color_1"
            data={[
              {
                icon: 'https://assets.lbkrs.com/uploads/2487aaf2-d82f-4b9b-8e47-c27b50e968b7/Union (2).png',
                title: 'Mobile',
                description: '支持 iOS、Android 系统',
              },
              {
                icon: 'https://assets.lbkrs.com/uploads/6cb133cb-fe21-4b12-9109-8843159271eb/Union (3).png',
                title: 'Pad',
                description: '仅支持 iOS 系统',
              },
              {
                icon: 'https://assets.lbkrs.com/uploads/ca30756a-195c-4023-9f5d-4c2b2ff664fd/Vector (1).png',
                title: 'Web',
                description: '网页即可交易',
              },
              {
                icon: 'https://assets.lbkrs.com/uploads/fff6b0a5-3cb5-424d-a7b4-f9a6819bf38c/Vector (2).png',
                title: 'Desktop',
                description: '支持 Windows、MacOS、Linux 系统',
              },
            ]}
          />
        </>
      </Box>
      <Box className="bg-bg_color_2">
        <>
          <Title label="Whale 生态终端产品" title="面对券商提供两类 App 终端产品" />
          <Compare className="my-10" compareId="app-plus" list={compareList} />
        </>
      </Box>
      <Box>
        <>
          <Title label="产品优势" title="终端产品在行业的亮点" />
          <ImageAndList {...content_banner_props} />
          <div className="h-[1px] bg-border_color my-10"></div>
          <ImageAndList {...content_banner_props_2} />
          <div className="h-[1px] bg-border_color my-10"></div>
          <ImageAndList {...content_banner_props_3} />
          <div className="h-[1px] bg-border_color my-10"></div>
          <ImageAndList {...content_banner_props_4} />
        </>
      </Box>
      <Box className="bg-bg_color_2">
        <>
          <Title label="选择我们的理由" title="来自各平台用户的一些赞许" />
          <Comment
            className="mt-8"
            data={[
              {
                avatar: 'https://assets.lbkrs.com/uploads/76d421f5-6408-403f-b2f1-c1b24dcb767f/avatar1.png',
                name: 'luzhen 1982',
                platform: 'LongPort 平台',
                description: '最喜欢的功能是：市场-发现-更多工具 中可以查看所有的深度数据，特别好',
              },
              {
                avatar: 'https://assets.lbkrs.com/uploads/2d7f91ea-3ba2-45f0-af8d-953dec51d8d5/avatar2.png',
                name: 'luzhen 1982',
                platform: 'LongPort 平台',
                description: '最喜欢的功能是：市场-发现-更多工具 中可以查看所有的深度数据，特别好',
              },
              {
                avatar: 'https://assets.lbkrs.com/uploads/0fe3eb8b-d01e-44ef-86c1-4cb5d7d7b7b2/avatar3.png',
                name: 'luzhen 1982',
                platform: 'LongPort 平台',
                description: '最喜欢的功能是：市场-发现-更多工具 中可以查看所有的深度数据，特别好',
              },
              {
                avatar: 'https://assets.lbkrs.com/uploads/b0e24d73-cd50-40ec-94d8-6e7775520924/avatar4.png',
                name: 'luzhen 1982',
                platform: 'LongPort 平台',
                description: '最喜欢的功能是：市场-发现-更多工具 中可以查看所有的深度数据，特别好',
              },
              {
                avatar: 'https://assets.lbkrs.com/uploads/4d9bdbba-0647-4d53-a5c0-8c5dd344f474/avatar5.png',
                name: 'luzhen 1982',
                platform: 'LongPort 平台',
                description: '最喜欢的功能是：市场-发现-更多工具 中可以查看所有的深度数据，特别好',
              },
              {
                avatar: 'https://assets.lbkrs.com/uploads/725287ab-0761-42d1-b2ca-fd8e06bce10e/avatar6.png',
                name: 'luzhen 1982',
                platform: 'LongPort 平台',
                description: '最喜欢的功能是：市场-发现-更多工具 中可以查看所有的深度数据，特别好',
              },
            ]}
          />
        </>
      </Box>
      <WhaleOfficialFooter />
    </Layout>
  )
}

export default Retail
