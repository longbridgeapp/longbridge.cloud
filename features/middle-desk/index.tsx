import classNames from 'classnames'
import { FC, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import MainContain from '@/features/middle-desk/components/main-contain'
import ProductAdvantage from '@/features/middle-desk/components/product-advantage'
import TradingDeskSystem from '@/features/middle-desk/components/trading-desk-system'
import Risk from '@/features/middle-desk/components/risk'
import Atm from '@/features/middle-desk/components/atm'
import WhaleOfficialFooter from '@/features/whale-official/footer'
import { NewBanner as Banner } from '@/features/product/Banner'

export const MiddleDeskContain = () => {
  const i18n = useTranslation('common')

  const banner_props = {
    title: i18n.t('src_pages_atm_deposit_add_single_index_8632'),
    desc: [
      i18n.t('src_pages_atm_deposit_add_single_index_8633'),
      i18n.t('src_pages_atm_deposit_add_single_index_8633-1'),
    ],
    img: {
      'en': 'https://assets.lbkrs.com/uploads/d9cb12ae-de8a-47b6-a037-c4d76adb98b1/gui-center-hk.png',
      'zh-CN': 'https://assets.lbkrs.com/uploads/24c9673e-c245-4a2f-911b-36a3e58a727e/gui-center-cn.png',
      'zh-HK': 'https://assets.lbkrs.com/uploads/d9cb12ae-de8a-47b6-a037-c4d76adb98b1/gui-center-hk.png',
    },
  }

  return (
    <div>
      <Banner {...banner_props}></Banner>
      <ProductAdvantage />
      <TradingDeskSystem />
      <Risk />
      <Atm />
      <WhaleOfficialFooter />
    </div>
  )
}
