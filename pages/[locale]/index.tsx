import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
// import { HomeFeatures } from '@/features/home/features'
// import { HomeExamples } from '@/features/home/examples'
import HomeCardList from '@/features/home/data-card-list'
import { i18nPaths } from '@/utils/i18n-paths'
import i18nextConfig from '@/next-i18next.config'
import { SEOMeta } from '@/utils/seo'
import { Layout } from '@/features/common/page-layout'
import { IndexBanner } from '@/features/block/top-banner'
import HomeSolutionSwiper from '@/features/home/home-solution-swiper'
import HomeCombination from '@/features/home/home-combination'
import HomeCoreAdvantages from '@/features/home/home-core-advantages'
import HomeNewExamples from '@/features/home/home-examples'
import HomeTeamsInfo from '@/features/home/home-teams-info'
import WhaleOfficialFooter from '@/features/whale-official/footer'

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

  return (
    <Layout>
      <SEOMeta indexTitle={true} title={seoI18n.t('tdk.title')} description={seoI18n.t('tdk.description')} />
      <IndexBanner />
      <HomeCardList />
      <HomeSolutionSwiper />
      <HomeCombination />
      <HomeCoreAdvantages />
      <HomeNewExamples />
      <HomeTeamsInfo />
      <WhaleOfficialFooter />
      {/* <HomeFeatures /> */}
    </Layout>
  )
}
export default IndexPage
