import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { i18nPaths } from '@/utils/i18n-paths'
import i18nextConfig from '@/next-i18next.config'
import { SEOMeta } from '@/utils/seo'
import { PageLayout } from '@/features/common/page-layout'

export const getStaticPaths = () => ({
  fallback: false,
  paths: i18nPaths(),
})
export const getStaticProps = async (ctx: any) => ({
  props: {
    ...(await serverSideTranslations(ctx?.params?.locale, ['common'], i18nextConfig)),
  },
})
const SolutionsPage = () => {
  const i18n = useTranslation()

  return (
    <PageLayout
      screenProps={{
        backgroundImage: 'url(https://pub.lbkrs.com/files/202205/YU2Z37iWrsLLrxEc/.png)',
        title: i18n.t('一站式解决方案'),
        desc: (
          <span>
            {i18n.t(
              'LONGBRIDGE WHALE（簡稱 WHALE）成立於 2021 年 3 月，是由來自新加坡的長橋集團旗下長橋科技研發的一站式互联网證券交易云服務商，並由來自新加坡和香港的資深金融管理者，以及來自阿里巴巴、字節跳動等國際科技巨頭企業技術專才組成的創始團隊成立推出創辦的。'
            )}
            <br />
            {i18n.t(
              'LONGBRIDGE WHALE 提供了证券交易的全链路能力，包括了交易终端（含公版 App、White Label App）、前台业务系统（含 AMS / OMS / EMS / RMS / 交易员前台等）、清结算后台（出入金、清结算、交收、托管、公司行动等），也包括了这些系统部署所需的基础设施（混合部署、专线、带宽、弹性伸缩、灾备等），包括了为证券经纪人、交易员、RO、客服、风控、合规等多个运营角色提供的的系统管理产品 WAS (WHALE Admin System)。除此之外，通过 LONGBRIDGE 的最佳实践沉淀下来的平台运营工具，如：智能营销系统、运营活动搭建平台等也通过 SaaS 开放给客户。希望通过 WHALE SaaS 提供的一站式解决方案、原子化产品以及针对于不同客户的组合解决方案，能够让客户做一次真正的互联网券商升级，拥有自己运营用户的能力，拥有通过互联网获客的能力，具备更佳的市场竞争力，给用户带来更优使用体验。'
            )}
          </span>
        ),
      }}
    >
      <SEOMeta title="default" description="Longbridge Whale description" />
    </PageLayout>
  )
}
export default SolutionsPage
