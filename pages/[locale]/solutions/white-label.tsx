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

const IMAGE_URL = 'https://assets.lbkrs.com/uploads/d0341695-65fe-426a-b624-8f0118399116/Group 427318956.png'
const IMAGE_URL_HK = 'https://assets.lbkrs.com/uploads/75231795-165f-4036-86d4-0f6b926f43b6/Group 427318957.png'
const IMAGE_URL_EN = 'https://assets.lbkrs.com/uploads/ee190a03-9f8b-4ae6-8aea-72529ee9b5e1/Group 427318958.png'

const WhaleIntroducingPage = () => {
  const seoI18n = useTranslation(['seo'])
  const i18n = useTranslation('common')
  const isEn = i18n.i18n?.language === 'en'
  const isHK = i18n.i18n?.language === 'zh-HK'

  return (
    <Layout>
      <SEOMeta title={seoI18n.t('tdk.title')} description={seoI18n.t('tdk.description')} />
      <WhiteLabelBanner img={isEn ? IMAGE_URL_EN : isHK ? IMAGE_URL_HK : IMAGE_URL} />
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
