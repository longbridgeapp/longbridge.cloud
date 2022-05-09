import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { TradingFeatures } from '@/features/trading/features'
import { TradingFunctions } from '@/features/trading/functions'
import { TradingGallery } from '@/features/trading/gallery'
import { i18nPaths } from '../../utils/i18n-paths'
import i18nextConfig from '../../next-i18next.config'
import { SEOMeta } from '../../utils/seo'
import { PageLayout } from '@/features/common/page-layout'
import ContactBanner from '@/features/contact-banner'

export const getStaticPaths = () => ({
  fallback: false,
  paths: i18nPaths(),
})
export const getStaticProps = async (ctx: any) => ({
  props: {
    ...(await serverSideTranslations(ctx?.params?.locale, ['common'], i18nextConfig)),
  },
})
const TradingPage = () => {
  const i18n = useTranslation()

  return (
    <PageLayout
      screenProps={{
        contactUs: true,
        backgroundImage: 'url(https://pub.lbkrs.com/files/202205/PSuwFHTnMt9yq7MF/trading_platform.png)',
        title: i18n.t('WHALE Trading Platform'),
        desc: i18n.t(
          'WHALE Trading Platform 为客户提供了迄今为止最佳体验的证券App，WHALE 以「发现」—「认知」—「交易」用户的核心旅程为基础，结合大量的结构化数据，让用户在美股，港股，新加坡，欧洲等全球核心市场更容易发现投资机会。'
        ),
        cover: 'https://pub.lbkrs.com/files/202205/QNtq9XZvZBPrArjb/cn01.png',
      }}
    >
      <SEOMeta title="default" description="Longbridge Whale description" />
      <TradingFeatures />
      <TradingFunctions />
      <TradingGallery />
      <ContactBanner title={i18n.t('Get Started With WHALE Trading Platform')} desc={i18n.t('Try Whale Trading Platform for free, and explore all the tools and services you need to start')} />
    </PageLayout>
  )
}
export default TradingPage
