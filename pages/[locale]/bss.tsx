import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { PageLayout } from '@/features/common/page-layout'
import ContactBanner from '@/features/contact-banner'
import { BssFeatures } from '@/features/bss/features'
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
const BssPage = () => {
  const i18n = useTranslation('common')

  return (
    <PageLayout
      screenProps={{
        contactUs: true,
        backgroundImage: 'url(https://pub.lbkrs.com/files/202205/SSpgCXC62ZPfstQ2/bss.png)',
        title: i18n.t('bss_page_003'),
        desc: i18n.t(
          'bss_page_001'
        ),
      }}
    >
      <SEOMeta title="default" description="Longbridge Whale description" />
      <BssFeatures />
      <ContactBanner title={i18n.t('bss_page_002')} desc={i18n.t('Try Whale Bss for free, and explore all the tools and services you need to start')} />
    </PageLayout>
  )
}
export default BssPage
