import classNames from 'classnames'
import { FC, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import MainContain from '@/features/middle-desk/components/main-contain'
import ProductAdvantage from '@/features/middle-desk/components/product-advantage'
import TradingDeskSystem from '@/features/middle-desk/components/trading-desk-system'
import Risk from '@/features/middle-desk/components/risk'
import Atm from '@/features/middle-desk/components/atm'
import WhaleOfficialFooter from '@/features/whale-official/footer'
import Banner from '../product/Banner'

export const MiddleDeskContain = () => {
  const i18n = useTranslation('common')

  const banner_props = {
    title: i18n.t('src_pages_atm_deposit_add_single_index_8632'),
    desc: [i18n.t('src_pages_atm_deposit_add_single_index_8633')],
    img: {
      'en': 'https://assets.lbkrs.com/uploads/d4eb19ff-7abe-4fdc-8db1-4267c17e1fa7/front-desk-en.png',
      'zh-CN': 'https://assets.lbkrs.com/uploads/d24e1500-e729-4615-a441-a3114e6de491/front-desk-cn.png',
      'zh-HK:': 'https://assets.lbkrs.com/uploads/0c54b42c-cd82-484d-99c9-d488282a11c0/front-desk-hk.png',
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
