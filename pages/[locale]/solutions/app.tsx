import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { i18nPaths } from '@/utils/i18n-paths'
import i18nextConfig from '@/next-i18next.config'
import { SEOMeta } from '@/utils/seo'
import { PageLayout } from '@/features/common/page-layout'
import { SolutionApps } from '@/features/solutions/apps'

export const getStaticPaths = () => ({
  fallback: false,
  paths: i18nPaths(),
})
export const getStaticProps = async (ctx: any) => ({
  props: {
    ...(await serverSideTranslations(ctx?.params?.locale, ['common'], i18nextConfig)),
  },
})
const AppSolutionPage = () => {
  const i18n = useTranslation()

  return (
    <PageLayout
      screenProps={{
        backgroundImage: 'url(https://pub.lbkrs.com/files/202205/r5fRPnErr61CDvy7/.png)',
        title: i18n.t('APP 解决方案'),
        contentFLex: '2.5',
        desc: i18n.t(
          'LONGBRIDGE Whale 对于不同的客户的不同需求都提供了公版App以及white label的解决方案。同时，对于非Whale的部分友商BSS也做了对接，确保App可以单独可以为客户服务。交易产品包括了美港股，期权，基金等行业主流品种，满足了大部分用户的需求；App也集成了美港股行情，资讯，基本面等数据服务，客户无需再单独接入；用户体验经过LONGBRIDGE 20万用户的检验，获得了用户的一致好评。'
        ),
      }}
    >
      <SEOMeta title="default" description="Longbridge Whale description" />
      <SolutionApps />
    </PageLayout>
  )
}
export default AppSolutionPage
