import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { Layout } from '@/features/common/page-layout'
import { i18nPaths } from '@/utils/i18n-paths'
import i18nextConfig from '@/next-i18next.config'
import { SEOMeta } from '@/utils/seo'
import { LongPortOneStop } from '@/features/block/what-can-one-stop-do'
import LongPortApp from '@/features/block/longport-app'
import GlobalTransaction from '@/features/block/global-transaction'
import WhaleTradeTerminal from '@/features/block/whale-trade-terminal'
import { LongPortManagement } from '@/features/block/customer-management'
import { LongPortPremiumRate } from '@/features/block/premium-rate'
import FooterBanner from '@/features/footer-banner'
import { LongportBanner } from '@/features/block/top-banner'

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
      <LongportBanner />
      <LongPortOneStop />
      <LongPortApp />
      <GlobalTransaction />
      <LongPortManagement />
      <LongPortPremiumRate />
      <WhaleTradeTerminal />
      <FooterBanner
        title={i18n.t('在 1 分钟内开始')}
        desc={i18n.t(
          'LongPort 一站式解决方案，是面向中等规模零售经纪商一站式解决方案。零售经纪商可以通过 SaaS 服务快速搭建完整的证券业务系统，完成开户、交易、风控、出入金、清结算等业务，便捷的管理客户。并且可以使用新一代的 LongPort App 及 Whale Trade Terminal 交易员终端'
        )}
      />
    </Layout>
  )
}
export default WhaleIntroducingPage
