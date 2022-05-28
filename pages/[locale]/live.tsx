import Header from '@/features/header'
import Live from '@/features/live'
import { i18nPaths } from '@/utils/i18n-paths'
import i18nextConfig from '../../next-i18next.config'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import {useTranslation} from "next-i18next";
import { SEOMeta } from '@/utils/seo'

export const getStaticPaths = () => ({
  fallback: false,
  paths: i18nPaths(),
})
export const getStaticProps = async (ctx: any) => ({
  props: {
    ...(await serverSideTranslations(ctx?.params?.locale, ['common', 'seo'], i18nextConfig)),
  },
})

const LivePage = () => {
  const seoI18n = useTranslation(['seo'])
  const i18n = useTranslation('common')
  return <>
    <SEOMeta title={seoI18n.t('live.title')} description={seoI18n.t('live.description')} />
    <Live />
  </>
}
export default LivePage
