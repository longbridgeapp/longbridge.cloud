import Title from '@/features/common/title'
import TextPicture from '@/features/common/text-picture'
import { useTranslation } from 'react-i18next'

const ProductAdvantage = () => {
  const i18n = useTranslation('common')
  const productAdvantageText = {
    imgUrl: i18n.t('packages_xadmin_shared_config_menus_7694'),
    list: [
      i18n.t('src_pages_atm_deposit_add_single_index_8645'),
      i18n.t('src_pages_atm_deposit_add_single_index_8646'),
      i18n.t('src_pages_atm_deposit_add_single_index_8647'),
      i18n.t('src_pages_atm_deposit_add_single_index_8648'),
    ],
  }
  return (
    <>
      <TextPicture imgUrl={productAdvantageText.imgUrl} list={productAdvantageText.list} />
    </>
  )
}
export default ProductAdvantage
