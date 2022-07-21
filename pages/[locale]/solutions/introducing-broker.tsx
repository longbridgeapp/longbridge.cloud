import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { Layout } from '@/features/common/page-layout'
import { i18nPaths } from '@/utils/i18n-paths'
import i18nextConfig from '@/next-i18next.config'
import { SEOMeta } from '@/utils/seo'
import { BrokerOneStop } from '@/features/block/what-can-one-stop-do'
import LongPortApp from '@/features/block/longport-app'
import GlobalTransaction from '@/features/block/global-transaction'
import WhaleTradeTerminal from '@/features/block/whale-trade-terminal'
import { BrokerManagement } from '@/features/block/customer-management'
import { BrokerPremiumRate } from '@/features/block/premium-rate'
import FooterBanner from '@/features/footer-banner'
import { BrokerBanner } from '@/features/block/top-banner'

export const getStaticPaths = () => ({
  fallback: false,
  paths: i18nPaths(),
})
export const getStaticProps = async (ctx: any) => ({
  props: {
    ...(await serverSideTranslations(ctx?.params?.locale, ['common', 'seo'], i18nextConfig)),
  },
})
const IntroducingPage = () => {
  const seoI18n = useTranslation(['seo'])
  const i18n = useTranslation('common')

  return (
    <Layout>
      <SEOMeta title={seoI18n.t('tdk.title')} description={seoI18n.t('tdk.description')} />
      <BrokerBanner />
      <BrokerOneStop />
      <LongPortApp />
      <GlobalTransaction />
      <BrokerManagement />
      <BrokerPremiumRate />
      <WhaleTradeTerminal />
      <FooterBanner
        title={i18n.t('在 1 分钟内开始')}
        desc={i18n.t(
          'Whale Introducing Broker 解决方案，是面向全披露介绍经纪商的一站式解决方案。介绍经纪商无需自设经纪系统，即可完成客户开户、交易、计费等全过程，并且可以使用新一代的 LongPort App 及 Whale Trade Terminal 交易员终端'
        )}
      />
    </Layout>
  )
}
export default IntroducingPage
