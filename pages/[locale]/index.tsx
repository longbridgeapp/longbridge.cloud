import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { HomeFeatures } from '@/features/home/features'
import DivideDot from '@/components/divide-dot'
import { HomeExamples } from '@/features/home/examples'
import { i18nPaths } from '@/utils/i18n-paths'
import i18nextConfig from '@/next-i18next.config'
import { SEOMeta } from '@/utils/seo'
import { PageLayout } from '@/features/common/page-layout'

export const getStaticPaths = () => ({
  fallback: false,
  paths: i18nPaths(),
})
export const getStaticProps = async (ctx: any) => ({
  props: {
    ...(await serverSideTranslations(ctx?.params?.locale, ['common', 'seo'], i18nextConfig)),
  },
})
const IndexPage = () => {
  const seoI18n = useTranslation(['seo'])
  const i18n = useTranslation(['common'])

  const title = (
    <>
      <div className="text-5xl leading-tight">
        <span>{i18n.t('home_page_002')}</span>&nbsp;
        <span className="text-text_brand_color">{i18n.t('home_page_001')}</span>
      </div>
      <DivideDot size="large" />
    </>
  )

  return (
    <PageLayout
      screenProps={{
        backgroundColor: 'var(--bg_color_1)',
        title,
        desc: i18n.t(
          'home_page_003'
        ),
        cover: 'https://pub.lbkrs.com/files/202205/c4LPqwdQrmZ4VtLk/Group_627289.png',
      }}
    >
      <SEOMeta indexTitle={true} title={seoI18n.t('tdk.title')} description={seoI18n.t('tdk.description')} />
      <HomeFeatures />
      <HomeExamples />
    </PageLayout>
  )
}
export default IndexPage
