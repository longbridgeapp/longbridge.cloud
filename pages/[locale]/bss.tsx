import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { FirstScreen } from '@/features/home/first-screen'
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
    ...(await serverSideTranslations(ctx?.params?.locale, ['common'], i18nextConfig)),
  },
})
const BssPage = () => {
  const i18n = useTranslation()

  return (
    <div>
      <SEOMeta title="default" description="Longbridge Whale description" />
      <FirstScreen
        contactUs
        backgroundImage="url(https://pub.lbkrs.com/files/202205/SSpgCXC62ZPfstQ2/bss.png)"
        title={i18n.t('WHALE BSS')}
        desc={i18n.t(
          'WHALE BSS 是全新一代基于云原生架构的一站式交易结算系统，覆盖了从交易到结算的全部流程。支持不同市场、多投资品、多币种的交易能力，满足券商灵活的业务模式。'
        )}
      />
      <BssFeatures />
    </div>
  )
}
export default BssPage
