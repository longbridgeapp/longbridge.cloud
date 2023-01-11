import BoxModule from '@/features/common/box-module'
import HorizontalItem from '@/features/common/horizontal-item'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

const Risk = () => {
  const i18n = useTranslation('common')
  const list = useMemo(() => {
    return [
      {
        title: i18n.t('src_pages_atm_deposit_add_single_index_8649'),
        desc: i18n.t('src_pages_atm_deposit_add_single_index_8650'),
      },
      {
        title: i18n.t('src_pages_atm_deposit_add_single_index_8651'),
        desc: i18n.t('src_pages_atm_deposit_add_single_index_8652'),
      },
      {
        title: i18n.t('src_pages_atm_deposit_add_single_index_8653'),
        desc: i18n.t('src_pages_atm_deposit_add_single_index_8654'),
      },
      {
        title: i18n.t('src_pages_atm_deposit_add_single_index_8655'),
        desc: i18n.t('src_pages_atm_deposit_add_single_index_8656'),
      },
    ]
  }, [])
  return (
    <BoxModule
      label={i18n.t('src_pages_atm_deposit_add_single_index_8657')}
      title={i18n.t('src_pages_atm_deposit_add_single_index_8658')}
    >
      <>
        <HorizontalItem className="mb-10" list={list} />
        <img src={i18n.t('packages_xadmin_shared_config_menus_7697')} alt="" />
      </>
    </BoxModule>
  )
}
export default Risk
