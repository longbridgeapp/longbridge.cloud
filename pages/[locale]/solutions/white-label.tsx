import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { Layout } from '@/features/common/page-layout'
import { i18nPaths } from '@/utils/i18n-paths'
import i18nextConfig from '@/next-i18next.config'
import { SEOMeta } from '@/utils/seo'
import { WhiteLabelOneStop } from '@/features/block/what-can-one-stop-do'
import LongPortApp from '@/features/block/longport-app'
import GlobalTransaction from '@/features/block/global-transaction'
import WhaleTradeTerminal from '@/features/block/whale-trade-terminal'
import { WhiteLabelManagement } from '@/features/block/customer-management'
import { WhiteLabelPremiumRate } from '@/features/block/premium-rate'
import FooterBanner from '@/features/footer-banner'
import { WhiteLabelBanner } from '@/features/block/top-banner'

export const getStaticPaths = () => ({
  fallback: false,
  paths: i18nPaths(),
})
export const getStaticProps = async (ctx: any) => ({
  props: {
    ...(await serverSideTranslations(ctx?.params?.locale, ['common', 'seo'], i18nextConfig)),
  },
})
const WhaleIntroducingPage = () => {
  const seoI18n = useTranslation(['seo'])
  const i18n = useTranslation('common')

  return (
    <Layout>
      <SEOMeta title={seoI18n.t('tdk.title')} description={seoI18n.t('tdk.description')} />
      <WhiteLabelBanner />
      <WhiteLabelOneStop />
      <LongPortApp />
      <GlobalTransaction />
      <WhiteLabelManagement />
      <WhiteLabelPremiumRate />
      <WhaleTradeTerminal />
      <FooterBanner
        title={i18n.t('在 1 分钟内开始')}
        desc={i18n.t(
          'White Label 一站式解决方案，是面向大规模及超大规模零售经纪商一站式解决方案。零售经纪商可以通过 SaaS 服务快速搭建完整的证券业务系统，完成开户、交易、风控、出入金、清结算等业务，并且可以通过独立品牌的白标 app 服务最终客户，通过完整的营销系统完成高效的获客及转化'
        )}
      />
    </Layout>
  )
}
export default WhaleIntroducingPage
