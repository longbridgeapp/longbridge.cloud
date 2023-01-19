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
      'en': 'https://pub.lbkrs.com/static/offline/202301/nzFFjZEHgk6xtdt2/2.svg',
      'zh-CN': 'https://pub.lbkrs.com/static/offline/202301/pMBj9uXMrmTVf5tT/Frame_427319007.svg',
      'zh-HK:': 'https://pub.lbkrs.com/static/offline/202301/pMBj9uXMrmTVf5tT/Frame_427319007.svg',
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
