import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { i18nPaths } from '@/utils/i18n-paths'
import i18nextConfig from '@/next-i18next.config'
import { SEOMeta } from '@/utils/seo'
import { PageLayout } from '@/features/common/page-layout'
import { AboutGallery } from '@/features/about/gallery'

export const getStaticPaths = () => ({
  fallback: false,
  paths: i18nPaths(),
})
export const getStaticProps = async (ctx: any) => ({
  props: {
    ...(await serverSideTranslations(ctx?.params?.locale, ['common', 'seo'], i18nextConfig)),
  },
})
const AboutPage = () => {
  const seoI18n = useTranslation(['seo'])
  const i18n = useTranslation('common')

  return (
    <PageLayout
      screenProps={{
        titleNowrap: true,
        contentFLex: '10',
        backgroundImage: 'url(https://pub.lbkrs.com/files/202205/YU2Z37iWrsLLrxEc/.png)',
        title: i18n.t('about_page_001'),
        desc: (
          <span>
            {i18n.t('solutions_page_002')}
            <br />
            {i18n.t('about_page_002')}
          </span>
        ),
      }}
    >
      <SEOMeta title={seoI18n.t('about.title')} description={seoI18n.t('about.description')} />
      <AboutGallery />
    </PageLayout>
  )
}
export default AboutPage
