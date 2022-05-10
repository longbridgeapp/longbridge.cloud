import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { PageLayout } from '@/features/common/page-layout'
import ContactBanner from '@/features/contact-banner'
import { MarketFeatures, MarketServices } from '@/features/market/features'
import { i18nPaths } from '../../utils/i18n-paths'
import i18nextConfig from '../../next-i18next.config'
import { SEOMeta } from '../../utils/seo'

export const getStaticPaths = () => ({
  fallback: false,
  paths: i18nPaths(),
})
export const getStaticProps = async (ctx: any) => ({
  props: {
    ...(await serverSideTranslations(ctx?.params?.locale, ['common'], i18nextConfig)),
  },
})
const MarketPage = () => {
  const i18n = useTranslation('common')

  return (
    <PageLayout
      screenProps={{
        titleNowrap: true,
        contactUs: true,
        contentFLex: i18n.i18n.language === 'en' ?  '10' : '1',
        backgroundImage: 'url(https://pub.lbkrs.com/files/202205/h3NVqR1SHi2NMSL1/market_data.png)',
        title: i18n.t('market_page_001'),
        desc: i18n.t('market_page_002'),
      }}
    >
      <SEOMeta title="default" description="Longbridge Whale description" />
      <MarketFeatures />
      <MarketServices />
      <ContactBanner title={i18n.t('market_page_003')} desc={i18n.t('market_page_004')} />
    </PageLayout>
  )
}
export default MarketPage
