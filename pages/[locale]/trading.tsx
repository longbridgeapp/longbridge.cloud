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
    ...(await serverSideTranslations(ctx?.params?.locale, ['common', 'seo'], i18nextConfig)),
  },
})
const TradingPage = () => {
  const seoI18n = useTranslation(['seo'])
  const i18n = useTranslation('common')

  return (
    <PageLayout
      screenProps={{
        contactUs: true,
        backgroundImage: 'url(https://pub.pbkrs.com/files/202205/PSuwFHTnMt9yq7MF/trading_platform.png)',
        title: i18n.t('trading_page_001'),
        desc: i18n.t('trading_page_002'),
        cover: 'https://pub.pbkrs.com/files/202205/Gm8Kw2xQbkwo7TXs/trading_header.png',
      }}
    >
      <SEOMeta title={seoI18n.t('trading.title')} description={seoI18n.t('trading.description')} />
      <TradingFeatures />
      <TradingFunctions />
      <TradingGallery />
      <ContactBanner title={i18n.t('trading_page_003')} desc={i18n.t('trading_page_004')} />
    </PageLayout>
  )
}
export default TradingPage
