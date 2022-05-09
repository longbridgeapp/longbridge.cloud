import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { FirstScreen } from '@/features/home/first-screen'
import { TradingFeatures } from '@/features/trading/features'
import { TradingFunctions } from '@/features/trading/functions'
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
const TradingPage = () => {
  const i18n = useTranslation()

  return (
    <div>
      <SEOMeta title="default" description="Longbridge Whale description" />
      <FirstScreen
        contactUs
        backgroundImage="url(https://pub.lbkrs.com/files/202205/PSuwFHTnMt9yq7MF/trading_platform.png)"
        title={i18n.t('WHALE Trading Platform')}
        desc={i18n.t(
          'WHALE Trading Platform 为客户提供了迄今为止最佳体验的证券App，WHALE 以「发现」—「认知」—「交易」用户的核心旅程为基础，结合大量的结构化数据，让用户在美股，港股，新加坡，欧洲等全球核心市场更容易发现投资机会。'
        )}
        cover="https://pub.lbkrs.com/files/202205/QNtq9XZvZBPrArjb/cn01.png"
      />
      <TradingFeatures />
      <TradingFunctions />
    </div>
  )
}
export default TradingPage
