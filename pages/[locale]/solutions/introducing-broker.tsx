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

const IMAGE_URL = 'https://assets.lbkrs.com/uploads/0109b1b6-f936-4dd8-9fd7-a3eedabcd48e/Group 427318855.png'
const IMAGE_URL_HK = 'https://assets.lbkrs.com/uploads/bc8f15e6-2bda-4e62-bdfa-d5be1821ecc5/Group 427318856.png'
const IMAGE_URL_EN = 'https://assets.lbkrs.com/uploads/7fcf772f-818c-4e5b-b23f-539d4ae5c032/Group 427318857.png'

const IntroducingPage = () => {
  const seoI18n = useTranslation(['seo'])
  const i18n = useTranslation('common')
  const isEn = i18n.i18n?.language === 'en'
  const isHK = i18n.i18n?.language === 'zh-HK'

  return (
    <Layout>
      <SEOMeta title={seoI18n.t('tdk.title')} description={seoI18n.t('tdk.description')} />
      <BrokerBanner img={isEn ? IMAGE_URL_EN : isHK ? IMAGE_URL_HK : IMAGE_URL} />
      <BrokerOneStop />
      <LongPortApp name="LongPort App" slogn={i18n.t('longport-app.slogn')} />
      <GlobalTransaction />
      <BrokerManagement />
      <BrokerPremiumRate />
      <WhaleTradeTerminal />
      <FooterBanner title={i18n.t('footer-banner.1m')} desc={i18n.t('footer-banner.item-1')} />
    </Layout>
  )
}
export default IntroducingPage
