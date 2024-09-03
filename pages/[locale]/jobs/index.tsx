import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { i18nPaths } from '@/utils/i18n-paths'
import i18nextConfig from '@/next-i18next.config'
import { useJobs } from '@/hooks/use-jobs'
import { SEOMeta } from '@/utils/seo'
import { getAppConfig } from '@/services'
import { Layout, PageLayout } from '@/features/common/page-layout'
import JobBanner from '@/features/jobs/Banner'
import JobList from '@/features/jobs/List'

export const getStaticPaths = () => ({
  fallback: false,
  paths: i18nPaths(),
})
export const getStaticProps = async (ctx: any) => ({
  props: {
    ...(await serverSideTranslations(ctx?.params?.locale, ['common', 'seo'], i18nextConfig)),
  },
})

const Jobs: React.FC = () => {
  const [jobs, cities] = useJobs()
  const seoI18n = useTranslation(['seo'])
  const i18n = useTranslation('common')
  return (
    <Layout>
      <SEOMeta title={seoI18n.t('about.title')} description={seoI18n.t('about.description')} />
      <JobBanner />
      <div className="py-5 job-wrapper main-container">
        <div className="main-content-width">
          <JobList jobs={jobs} cities={cities} />
        </div>
      </div>
    </Layout>
  )
}

export default Jobs
