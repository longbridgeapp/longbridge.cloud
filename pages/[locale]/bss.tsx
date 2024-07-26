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
    ...(await serverSideTranslations(ctx?.params?.locale, ['common', 'seo'], i18nextConfig)),
  },
})
const BssPage = () => {
  const seoI18n = useTranslation(['seo'])
  const i18n = useTranslation('common')

  return (
    <PageLayout
      screenProps={{
        contactUs: true,
        contentFLex: i18n.i18n.language === 'en' ? '3' : '1',
        backgroundImage: 'url(https://pub.pbkrs.com/files/202205/SSpgCXC62ZPfstQ2/bss.png)',
        title: i18n.t('bss_page_003'),
        desc: i18n.t('bss_page_001'),
      }}
    >
      <SEOMeta title={seoI18n.t('bss.title')} description={seoI18n.t('bss.description')} />
      <BssFeatures />
      <ContactBanner
        title={i18n.t('bss_page_002')}
        desc={i18n.t('Try Whale Bss for free, and explore all the tools and services you need to start')}
      />
    </PageLayout>
  )
}
export default BssPage
