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

const IMAGE_URL = 'https://assets.lbkrs.com/uploads/d4264df1-9768-462f-be36-608b6b12486a/header img.png'
const IMAGE_URL_HK = 'https://assets.lbkrs.com/uploads/2fc175ec-e071-4cc9-936f-08da0a0dff39/header img.png'
const IMAGE_URL_EN = 'https://assets.lbkrs.com/uploads/e4c72546-ad87-473f-bbf3-7fb2912bf6f2/header img.png'

const WhaleIntroducingPage = () => {
  const seoI18n = useTranslation(['seo'])
  const i18n = useTranslation('common')

  const isEn = i18n.i18n?.language === 'en'
  const isHK = i18n.i18n?.language === 'zh-HK'
  return (
    <Layout>
      <SEOMeta title={seoI18n.t('tdk.title')} description={seoI18n.t('tdk.description')} />
      <LongportBanner img={isEn ? IMAGE_URL_EN : isHK ? IMAGE_URL_HK : IMAGE_URL} />
      <LongPortOneStop />
      <LongPortApp name="LongPort App" slogn={i18n.t('longport-app.slogn-2')} />
      <GlobalTransaction />
      <LongPortManagement />
      <LongPortPremiumRate />
      <WhaleTradeTerminal />
      <FooterBanner title={i18n.t('footer-banner.1m')} desc={i18n.t('footer-banner.item-2')} />
    </Layout>
  )
}
export default WhaleIntroducingPage
