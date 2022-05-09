import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { FirstScreen } from '@/features/home/first-screen'
import { MarketFeatures, MarketServices } from '@/features/market/features'
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
const MarketPage = () => {
  const i18n = useTranslation()

  return (
    <div>
      <SEOMeta title="default" description="Longbridge Whale description" />
      <FirstScreen
        contactUs
        backgroundImage="url('https://pub.lbkrs.com/files/202205/h3NVqR1SHi2NMSL1/market_data.png')"
        title={i18n.t('WHALE Market Data')}
        desc={i18n.t(
          'WHALE Market Data 提供专业、全面、极速的行情服务，客户可以通过极低的研发成本，快速具备业内一流的行情服务能力，包括美股、港股、新加坡股、A 股等各市场全面的行情覆盖。同时针对部分零售客户需要的高级行情，提供行情商店灵活售卖。另外提供行情成本管理系统，每个月可以清晰的看到行情服务的支出、收入，可以快捷的完成对各大交易所的申报过程。'
        )}
      />
      <MarketFeatures />
      <MarketServices />
    </div>
  )
}
export default MarketPage
