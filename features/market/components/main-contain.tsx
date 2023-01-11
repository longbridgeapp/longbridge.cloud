import { useTranslation } from 'react-i18next'
import BoxModule from '@/features/common/box-module'
import { BlockBetween } from '@/components/block'
import { TalkToUs } from '@/features/talk-to-us'
import { CDN_IMAGES } from '@/constants'

const MainContain = () => {
  const i18n = useTranslation('common')
  return (
    <div style={{ backgroundImage: `url('${CDN_IMAGES.banner_bg}')` }}>
      <BoxModule>
        <BlockBetween
          left={
            <div className="flex flex-col items-start gap-8">
              <div className="text-[44px] font-semibold">{i18n.t('src_pages_atm_deposit_add_single_index_8632')}</div>
              <div className="text-lg leading-9 text-text_color_2">
                {i18n.t('src_pages_atm_deposit_add_single_index_8633')}
              </div>
              <TalkToUs className="mt-0" />
            </div>
          }
          right={<img className="w-[560px]" src={i18n.t('packages_xadmin_shared_config_menus_7693')} alt="" />}
        />
      </BoxModule>
    </div>
  )
}
export default MainContain
