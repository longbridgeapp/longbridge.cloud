import classNames from 'classnames'
import { FC, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import MainContain from '@/features/middle-desk/components/main-contain'
import ProductAdvantage from '@/features/middle-desk/components/product-advantage'
import TradingDeskSystem from '@/features/middle-desk/components/trading-desk-system'
import Risk from '@/features/middle-desk/components/risk'
import Atm from '@/features/middle-desk/components/atm'
import FooterBanner from '@/features/footer-banner'

export const MiddleDeskContain = () => {
  const i18n = useTranslation('common')

  return (
    <div>
      <MainContain
        title={i18n.t('src_pages_atm_deposit_add_single_index_8632')}
        desc={i18n.t('src_pages_atm_deposit_add_single_index_8633')}
        img={i18n.t('packages_xadmin_shared_config_menus_7693')}
      />
      <ProductAdvantage />
      <TradingDeskSystem />
      <Risk />
      <Atm />
      <FooterBanner title={i18n.t('footer-banner.1m')} desc={i18n.t('middle_desk_01')} />
    </div>
  )
}
