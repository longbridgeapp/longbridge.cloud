import BoxModule from '@/features/common/box-module'
import Title from '@/features/common/title'
import HorizontalItem from '@/features/common/horizontal-item'
import { useTranslation } from 'react-i18next'

import { useMemo } from 'react'
const Risk = () => {
  const i18n = useTranslation('common')
  const list = useMemo(() => {
    return [
      {
        title: i18n.t('src_pages_atm_deposit_add_single_index_8636'),
        desc: i18n.t('src_pages_atm_deposit_add_single_index_8637'),
      },
      {
        title: i18n.t('src_pages_atm_deposit_add_single_index_8638'),
        desc: i18n.t('src_pages_atm_deposit_add_single_index_8639'),
      },
      {
        title: i18n.t('src_pages_atm_deposit_add_single_index_8640'),
        desc: i18n.t('src_pages_atm_deposit_add_single_index_8641'),
      },
      {
        title: i18n.t('src_pages_atm_deposit_add_single_index_8642'),
        desc: i18n.t('src_pages_atm_deposit_add_single_index_8643'),
      },
    ]
  }, [])
  return (
    <BoxModule
      className="bg-[#F8F9FA]"
      label={i18n.t('packages_xadmin_shared_config_menus_7692')}
      title={i18n.t('src_pages_atm_deposit_add_single_index_8644')}
    >
      <>
        <HorizontalItem className="mb-10" list={list} />
        <img src={i18n.t('packages_xadmin_shared_config_menus_7698')} alt="" />
      </>
    </BoxModule>
  )
}
export default Risk
