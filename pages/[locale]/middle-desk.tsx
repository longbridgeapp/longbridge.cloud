import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { PageLayout } from '@/features/common/page-layout'
import ContactBanner from '@/features/contact-banner'
import { MiddleDeskContain } from '@/features/middle-desk'
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
const MiddleDesk = () => {
  const seoI18n = useTranslation(['seo'])
  const i18n = useTranslation('common')

  return (
    <PageLayout
      screenProps={{
        contactUs: true,
        backgroundImage: 'url(https://pub.lbctrl.com/files/202205/PSuwFHTnMt9yq7MF/trading_platform.png)',
        title: '柜台系统前中台',
        desc: '覆盖多地区、多市场的开户、交易、风控、出入金等证券投资业务处理能力。具备统一的资产管理与高性能的交易风控处理能力，持续打造一套体验佳、处理快、保障 7×24 小时连续运行的证券前中台系统。',
        cover: 'https://pub.lbctrl.com/static/offline/202301/DSu9V71MZQ64i2Lb/Frame_427318999.svg',
      }}
    >
      <SEOMeta
        title={'柜台系统前中台'}
        description={
          '覆盖多地区、多市场的开户、交易、风控、出入金等证券投资业务处理能力。具备统一的资产管理与高性能的交易风控处理能力，持续打造一套体验佳、处理快、保障 7×24 小时连续运行的证券前中台系统。'
        }
      />
      <MiddleDeskContain />
      <ContactBanner
        title={i18n.t('bss_page_002')}
        desc={i18n.t('Try Whale Bss for free, and explore all the tools and services you need to start')}
      />
    </PageLayout>
  )
}
export default MiddleDesk
