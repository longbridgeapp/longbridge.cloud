import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { i18nPaths } from '@/utils/i18n-paths'
import i18nextConfig from '@/next-i18next.config'
import { SEOMeta } from '@/utils/seo'
import { PageLayout } from '@/features/common/page-layout'
import { SolutionApps } from '@/features/solutions/apps'

export const getStaticPaths = () => ({
  fallback: false,
  paths: i18nPaths(),
})
export const getStaticProps = async (ctx: any) => ({
  props: {
    ...(await serverSideTranslations(ctx?.params?.locale, ['common', 'seo'], i18nextConfig)),
  },
})
const AppSolutionPage = () => {
  const seoI18n = useTranslation(['seo'])
  const i18n = useTranslation('common')

  return (
    <PageLayout
      screenProps={{
        backgroundImage: 'url(https://pub.lbkrs.com/files/202205/r5fRPnErr61CDvy7/.png)',
        title: i18n.t('solutions_app_page_001'),
        contentFLex: '20',
        desc: i18n.t('solutions_app_page_002'),
      }}
    >
      <SEOMeta title={seoI18n.t('solutions-app.title')} description={seoI18n.t('solutions-app.description')} />
      <SolutionApps />
    </PageLayout>
  )
}
export default AppSolutionPage
