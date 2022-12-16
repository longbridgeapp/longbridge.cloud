import { i18nPaths } from '@/utils/i18n-paths'
import i18nextConfig from '@/next-i18next.config'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Layout } from '@/features/common/page-layout'
import { WhaleReportList } from '@/features/whale-reports/list'

export const getStaticPaths = () => ({
  fallback: false,
  paths: i18nPaths(),
})
export const getStaticProps = async (ctx: any) => ({
  props: {
    ...(await serverSideTranslations(ctx?.params?.locale, ['common', 'seo'], i18nextConfig)),
  },
})

const WhaleReportPage = () => {
  return (
    <Layout>
      <WhaleReportList />
    </Layout>
  )
}
export default WhaleReportPage
