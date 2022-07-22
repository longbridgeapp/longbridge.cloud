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
      <LongPortApp name="White Label App" slogn={i18n.t('longport-app.slogn-3')} />
      <GlobalTransaction />
      <WhiteLabelManagement />
      <WhiteLabelPremiumRate />
      <WhaleTradeTerminal />
      <FooterBanner title={i18n.t('footer-banner.1m')} desc={i18n.t('footer-banner.item-3')} />
    </Layout>
  )
}
export default WhaleIntroducingPage
