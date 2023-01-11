import classNames from 'classnames'
import { FC, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import MainContain from '@/features/market/components/main-contain'
import ProductAdvantage from '@/features/market/components/product-advantage'
import TradingDeskSystem from '@/features/market/components/trading-desk-system'
import Risk from '@/features/market/components/risk'
import Atm from '@/features/market/components/atm'
import FooterBanner from '@/features/footer-banner'

export const MiddleDeskContain = () => {
  const i18n = useTranslation('common')

  return (
    <div>
      <MainContain />
      <ProductAdvantage />
      <TradingDeskSystem />
      <Risk />
      <Atm />
      <FooterBanner title={i18n.t('footer-banner.1m')} desc={i18n.t('middle_desk_01')} />
    </div>
  )
}
