// 系统前中台
import { Layout } from '@/features/common/page-layout'
import i18nextConfig from '@/next-i18next.config'
import { i18nPaths } from '@/utils/i18n-paths'
import React, { useMemo } from 'react'
import { MiddleDeskContain } from '@/features/middle-desk'
import { Block, BlockBetween } from '@/components/block'
import { SEOMeta } from '@/utils/seo'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export const getStaticPaths = () => ({
  fallback: false,
  paths: i18nPaths(),
})

export const getStaticProps = async (ctx: any) => ({
  props: {
    ...(await serverSideTranslations(ctx?.params?.locale, ['common', 'seo'], i18nextConfig as unknown as any)),
  },
})

const FrontDesk: React.FC = () => {
  const i18n = useTranslation('common')
  const seoI18n = useTranslation(['seo'])

  const marketingBanners = useMemo(() => [1], [])

  return (
    <Layout>
      <SEOMeta indexTitle={true} title={seoI18n.t('tdk.title')} description={seoI18n.t('tdk.description')} />
      <MiddleDeskContain />
    </Layout>
  )
}

export default FrontDesk
